import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { magicLink } from "better-auth/plugins";
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    database: prismaAdapter(prisma, {
        provider: "postgresql"  // since you're using PostgreSQL
    }),
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            callbackURL: `${process.env.BETTER_AUTH_URL}/api/auth/callback/github`,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            callbackURL: `${process.env.BETTER_AUTH_URL}/api/auth/callback/google`,
        },
        linkedin: {
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
            callbackURL: `${process.env.BETTER_AUTH_URL}/api/auth/callback/linkedin`,
        },
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }) => {
                const transport = nodemailer.createTransport({
                    host: "sandbox.smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS
                    }
                });

                const magicLinkUrl = `${process.env.BETTER_AUTH_URL}/sign-in/verify?token=${token}`;
                
                await transport.sendMail({
                    from: '"Your App" <notifications@yourdomain.com>',
                    to: email,
                    subject: 'Your Login Link',
                    html: `
                        <h2>Welcome!</h2>
                        <p>Click the link below to sign in:</p>
                        <a href="${magicLinkUrl}">Sign In</a>
                        <p>Link expires in 15 minutes.</p>
                    `
                });
            },
        }),
    ]
});
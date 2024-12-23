import { betterAuth } from "better-auth";
import { PrismaClient } from "@prisma/client";
import { magicLink } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
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
  databaseAdapter: {
    prisma: {
      client: prisma,
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }) => {
        console.log('Starting magic link send process...'); // Debug log
        console.log('Email:', email); // Debug log
        console.log('Token received:', token); // Debug log
        console.log('URL:', url); // Debug log

        const transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "761e0693075449",
            pass: "56784bea759135" // Make sure this is correct
          }
        });

        const magicLinkUrl = `${process.env.BETTER_AUTH_URL}/sign-in/verify?token=${token}`;
        console.log('Generated magic link URL:', magicLinkUrl); // Debug log

        const mailOptions = {
          from: '"Your App" <notifications@yourdomain.com>', // More professional from address
          to: email,
          subject: 'Your Login Link',
          html: `
            <h2>Welcome!</h2>
            <p>Click the link below to sign in to your account:</p>
            <a href="${magicLinkUrl}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Sign In to Your Account</a>
            <p>If you didn't request this link, you can safely ignore this email.</p>
            <p>The link will expire in 15 minutes.</p>
          `
        };

        try {
          console.log('Attempting to send email...'); // Debug log
          const info = await transport.sendMail(mailOptions);
          console.log('Email sent successfully!'); // Debug log
          console.log('Mailtrap response:', info); // Debug log
        } catch (error) {
          console.error('Detailed error sending magic link email:', error);
          throw error;
        }
      },
    }),
],
});
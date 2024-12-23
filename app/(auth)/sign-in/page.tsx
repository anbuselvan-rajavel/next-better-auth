"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState<string | null>(null);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (!email) {
                throw new Error('Email is required');
            }
            
            console.log('Sending magic link to:', email);
            await signIn.magicLink({ 
                email,
                callbackURL: "/dashboard"
            });
            
            alert('Magic link sent! Check your email (including spam folder).');
        } catch (error) {
            console.error('Magic link error:', error);
            alert('Error sending magic link. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider: 'google' | 'github' | 'linkedin') => {
        try {
            setSocialLoading(provider);
            console.log(`Attempting to login with ${provider}`);
            await signIn.social({
                provider,
                callbackURL: "/dashboard"
            });
        } catch (error) {
            console.error(`${provider} login error:`, error);
            alert(`Failed to login with ${provider}. Please try again.`);
        } finally {
            setSocialLoading(null);
        }
    };

    return (
        <div className="flex items-center justify-center my-20 p-20">
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="johndoe@example.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <Button className="gap-2" onClick={handleSubmit} disabled={loading}>
                                {loading ? <><Loader2 className="animate-spin" /> Sending...</> : "Sign-in with Magic Link"}
                            </Button>
                        </div>

                        <div className={cn("w-full gap-2 flex items-center", "justify-between flex-col")}>
                            <Button
                                variant="outline"
                                className="w-full gap-2 bg-red-400 text-white"
                                onClick={() => handleSocialLogin('google')}
                                disabled={!!socialLoading}
                            >
                                {socialLoading === 'google' ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z" />
                                    </svg>
                                )}
                                Sign in with Google
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full gap-2 bg-neutral-300"
                                onClick={() => handleSocialLogin('github')}
                                disabled={!!socialLoading}
                            >
                                {socialLoading === 'github' ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                    </svg>
                                )}
                                Sign in with Github
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full gap-2 bg-cyan-500 text-white"
                                onClick={() => handleSocialLogin('linkedin')}
                                disabled={!!socialLoading}
                            >
                                {socialLoading === 'linkedin' ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                    </svg>
                                )}
                                Sign in with Linkedin
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
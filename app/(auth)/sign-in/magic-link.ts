import { authClient } from "@/lib/auth-client";

// This should be a function that takes an email parameter
export async function handleMagicLink(email: string) {
  return await authClient.signIn.magicLink({
    email,
    callbackURL: "/dashboard"
  });
}
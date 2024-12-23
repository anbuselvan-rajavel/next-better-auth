import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [magicLinkClient()],
});

export const {
  signIn,
  signOut,
  signUp,
  useSession,
} = authClient;
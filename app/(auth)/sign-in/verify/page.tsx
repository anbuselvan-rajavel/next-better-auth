"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyMagicLink() {
  const [status, setStatus] = useState("Verifying...");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = searchParams.get("token");
        if (!token) {
          setStatus("No verification token found");
          return;
        }

        await signIn.verifyMagicLink({ 
          token,
          callbackURL: "/dashboard"
        });

        // If verification is successful, redirect to dashboard
        router.push("/dashboard");
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("Verification failed. Please try signing in again.");
      }
    };

    verifyToken();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Verifying Magic Link</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{status}</p>
        </CardContent>
      </Card>
    </div>
  );
}
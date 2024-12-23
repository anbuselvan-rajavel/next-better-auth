'use client'

import { useAuth } from "@/hooks/useAuth"


export default function Home() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to NextSecure</h1>
      {isAuthenticated ? (
        <p className="text-xl">You are currently signed in.</p>
      ) : (
        <p className="text-xl">Please sign in to access your account.</p>
      )}
    </div>
  )
}

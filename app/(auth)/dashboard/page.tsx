'use client'

import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react' // Add useState for mounted state
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Dashboard() {
  const { data: session, isPending } = useSession()
  const router = useRouter()

  // State to track if the component has mounted on the client side
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // Set the hasMounted state to true after the component mounts on the client
    setHasMounted(true)

    if (!isPending && !session) {
      router.push('/')
    }
  }, [session, isPending, router])

  // If the component has not yet mounted on the client, do not render anything
  if (!hasMounted) {
    return null
  }

  // If session data is pending or missing, handle accordingly
  if (isPending) {
    return <div>Loading...</div>
  }

  if (!session) {
    return null // This will be handled by the useEffect hook above
  }

  const userIdentifier = session.user.name || session.user.email || 'User'

  return (
    <div className="container mx-auto mt-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center justify-center text-center">
          <CardTitle>Welcome to Your Dashboard</CardTitle>
          <CardDescription>You are now signed in</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center">
          <p className="text-lg mb-4">
            Signed in as: <strong>{userIdentifier}</strong>
          </p>
          <p className="mb-4">
            Email: <strong>{session.user.email}</strong>
          </p>
          {session.user.image && (
            <img 
              src={session.user.image} 
              alt="Profile" 
              className="w-20 h-20 rounded-full mb-4"
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}

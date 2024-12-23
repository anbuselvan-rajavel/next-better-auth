'use client'

import { Rabbit } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useSession, signOut } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { data, isPending, error } = useSession()
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut()
      router.push('/')  // Navigate to the home page after logout
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-neutral-100">
      <div className="flex items-center justify-around gap-2">
        <Rabbit />
        nextsecure.
      </div>
      <div className='flex gap-2'>
        {!isClient || isPending ? (
          <Button disabled>Loading...</Button>
        ) : data ? (
          <Button onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Button>
            <Link href="/sign-in">
              Sign In
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated (e.g., by checking for a token in localStorage)
    const token = localStorage.getItem('authToken')
    setIsAuthenticated(!!token)
  }, [])

  const signIn = (token: string) => {
    localStorage.setItem('authToken', token)
    setIsAuthenticated(true)
  }

  const signOut = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
    router.push('/')
  }

  return { isAuthenticated, signIn, signOut }
}

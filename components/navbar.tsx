import { Rabbit } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-neutral-100">
<div className="flex items-center justify-around gap-2">
<Rabbit />
nextsecure.
</div>
<Button>
    <Link href="/sign-in">
    Sign In
    </Link>
    </Button>
    </div>
  )
}

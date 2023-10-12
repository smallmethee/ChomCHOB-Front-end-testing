'use client'

import Button from '@/components/button/button'
import Link from 'next/link'

export default function Error(props: { error: Error }) {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">500</h1>

        <p className="py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {props.error.message ?? 'Unauthroized!'}
        </p>

        <Link href="/">
          <Button>Try Again</Button>
        </Link>
      </div>
    </div>
  )
}

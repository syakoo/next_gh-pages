import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <div>
          <Link href="/" as={'/'}>
            <a>Home</a>
          </Link>
          <Link href="/items" as={'/items'}>
            <a>Items</a>
          </Link>
          <Link href={'/items/[id]'} as={'/items/a'}>
            <a>A</a>
          </Link>
          <Link href={'/items/[id]'} as={'/items/b'}>
            <a>B</a>
          </Link>
        </div>
      </header>
      <style jsx>{`
        a {
          margin: 1rem;
        }
      `}</style>
    </>
  )
}

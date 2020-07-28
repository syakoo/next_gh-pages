import React from 'react'
import Link from 'next/link'

const withRootPath = (path: string) =>
  process.env.NODE_ENV === 'production' ? '/next_gh-pages' + path : path

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <div>
          <Link href="/" as={withRootPath('/')}>
            <a>Home</a>
          </Link>
          <Link href="/items" as={withRootPath('/items')}>
            <a>Items</a>
          </Link>
          <Link
            href={withRootPath('/items/[id]')}
            as={withRootPath('/items/a')}
          >
            <a>A</a>
          </Link>
          <Link href={withRootPath('/items/b')}>
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

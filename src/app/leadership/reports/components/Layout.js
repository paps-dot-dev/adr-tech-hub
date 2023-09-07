import React from 'react'
import Link from 'next/link'
import { FaArrowCircleLeft } from 'react-icons/fa'

function Layout({ children, title, goBackLink }) {
  return (
    <main>
      <Link
        href={'/leadership/reports'}
        className='flex items-center hover:text-blue-400 duration-100 ease-linear'>
        <FaArrowCircleLeft className='text-[4em] px-4' />
        <p>Go Back</p>
      </Link>
      <h1 className='text-4xl font-semibold border-b-2 w-3/4 py-4 px-2 md:text-[3em] md:py-5 md:w-1/3'>
        {title}
      </h1>
      {children}
    </main>
  )
}

export default Layout

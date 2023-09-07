import Image from 'next/image'
import logo from '../../public/logo.png'
import React from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex justify-between items-center h-[200px] md:h-[300px] bg-slate-400 mb-10'>
      <Navbar />
      <MobileNav />
      <div className='flex flex-col justify-center items-center p-3 md:p-0'>
        <h1 className='text-2xl font-semibold lg:text-[3em]'>
          Welcome to <span className='text-yellow-200'>ADR OS</span>
        </h1>
        <h2 className='hidden md:flex text-lg mt-4 text-yellow-200'>
          The operating system fueling ADR.
        </h2>
      </div>
      <Link
        className='hover:animate-pulse cursor-not-allowed'
        href={'/leadership/executives'}>
        <Image className='hidden md:block' src={logo} height={100} />
      </Link>
    </header>
  )
}

export default Header

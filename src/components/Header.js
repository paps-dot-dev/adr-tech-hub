import Image from 'next/image'
import logo from '../../public/logo.png'
import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='flex justify-between items-center h-[300px] bg-slate-400 mb-10'>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold lg:text-[3em]'>
          Welcome to <span className='text-yellow-200'>ADR OS</span>
        </h1>
        <h2 className='text-lg mt-4 text-yellow-200'>
          The operating system fueling ADR.
        </h2>
      </div>
      <Image className='hidden md:block' src={logo} height={100} />
    </header>
  )
}

export default Header

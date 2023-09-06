import Image from 'next/image'
import logo from '../../public/logo.png'
import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='flex justify-between items-center h-[300px] bg-slate-400 mb-10'>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[2em] font-semibold lg:text-[3em]'>
          Welcome to <span className='text-white'>ADR OS</span>
        </h1>
        <h2 className='text-lg'>The operating system fueling ADR.</h2>
      </div>
      <Image src={logo} height={100} />
    </header>
  )
}

export default Header

'use client'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaArrowLeft,
  FaBars,
  FaBeer,
  FaDumpster,
  FaHome,
  FaLaptopCode,
  FaLine,
} from 'react-icons/fa'

function Navbar() {
  const [open, setIsOpen] = useState(false)

  return open ? (
    <nav className='fixed h-screen w-[500px] top-0 left-0 bg-gradient-to-br from-blue-600 to-blue-400 z-20'>
      <div className='h-4/5 flex flex-col justify-between p-2 py-5'>
        <div className='flex justify-between items-center m-2'>
          <h1 className='text-[4em] font-bold text-white'>Navigation</h1>
          <FaArrowLeft
            onClick={() => setIsOpen(false)}
            className='text-[3em] hover:text-white hover:animate-pulse hover:-translate-x-2 transition-all ease-linear duration-200'
          />
        </div>

        <ul className='text-4xl flex flex-col justify-between h-4/5 max-w-[90%]'>
          <Link href={'/software'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaLaptopCode className='mx-4' />
              <span>Useful Software</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Department</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  ) : (
    <div className='bg-blue-400 flex rounded-r-full'>
      <div
        onClick={() => setIsOpen(true)}
        className=' text-center w-[96px] p-2 m-2  flex justify-center cursor-pointer hover:text-white hover:animate-pulse ease-linear duration-200'>
        <FaBars className='text-[3em] my-4' />
      </div>
      <div className='text-center w-[96px] p-2 m-2  flex justify-center cursor-pointer hover:text-white hover:animate-pulse ease-linear duration-200'>
        <Link href={'/'}>
          <FaHome className='text-[3em] my-4 ' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar

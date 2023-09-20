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
  FaLaptop,
  FaChartBar,
  FaMapPin,
  FaHandHolding,
  FaMoneyCheck,
  FaUserShield,
  FaTruckLoading,
  FaTruck,
  FaCreditCard,
  FaUsers,
  FaAngry,
  FaCode,
  FaTicketAlt,
  FaWrench,
  FaAd,
  FaHackerNews,
  FaNewspaper,
  FaBookOpen,
} from 'react-icons/fa'

function Navbar() {
  const [open, setIsOpen] = useState(false)

  return open ? (
    <nav className='md:fixed h-screen w-[500px] top-0 left-0 bg-gradient-to-br from-blue-600 to-blue-400 z-20 rounded-tr-3xl text-gray-700 overflow-y-auto'>
      <div className='h-4/5 flex flex-col justify-between p-2 py-5 '>
        <div className='flex justify-between items-start m-2'>
          <h1 className='text-[3em] font-bold text-white'>Navigation</h1>
          <FaArrowLeft
            onClick={() => setIsOpen(false)}
            className='text-[3em] hover:text-white hover:animate-pulse hover:-translate-x-2 transition-all ease-linear duration-200'
          />
        </div>
        <h2 className='text-[2.5em] font-semibold text-white border-b-2 w-2/3 p-2 mb-8 mt-8'>
          For Everybody
        </h2>

        <ul className='text-3xl flex flex-col justify-between max-w-[90%]'>
          <Link onClick={() => setIsOpen(false)} href={'/software'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaLaptopCode className='mx-4' />
              <span>Useful Software</span>
            </li>
          </Link>
          <a
            target='_blank'
            href='https://s-papineau.notion.site/0311076c494f45ec854436db7a85d471?v=e63ad873edb74000bd830bc722415349&pvs=4'>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaLaptop className='mx-4' />
              <span>ADR Tech Docs</span>
            </li>
          </a>
          <a target='_blank' href='https://forms.gle/6iM6ZGjhAX98QDgQ7'>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaWrench className='mx-4' />
              <span>Service Ticket</span>
            </li>
          </a>

          <h2 className='text-[1em] font-semibold text-white border-b-2 w-2/3 p-2 mt-[56px] mb-8'>
            By Department
          </h2>
        </ul>
        <ul className='text-3xl flex flex-col justify-between h-4/5 max-w-[90%]'>
          <Link onClick={() => setIsOpen(false)} href={'/analytics'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaChartBar className='mx-4' />
              <span>Analytics</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/sales'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaDumpster className='mx-4' />
              <span>Sales</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/team-support'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaHandHolding className='mx-4' />
              <span>Team Support</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/billing'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaMoneyCheck className='mx-4' />
              <span>Billing</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/customer-concern'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaUserShield className='mx-4' />
              <span>Customer Concern</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/hauler-liaison'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaTruck className='mx-4' />
              <span>Hauler Liaison</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/chargeback'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaCreditCard className='mx-4' />
              <span>Chargeback</span>
            </li>
          </Link>
          <Link href={'/marketing'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaNewspaper className='mx-4' />
              <span>Marketing</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/leadership'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaUsers className='mx-4' />
              <span>Leadership</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/training'}>
            <li className='font-semibold flex justify-between items-center hover:text-white hover:border-b-2 hover:border-white p-4 transition-all duration-200 hover:animate-pulse ease-linear'>
              <FaBookOpen className='mx-4' />
              <span>Training</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  ) : (
    <div className='hidden md:flex bg-blue-400  rounded-r-full px-4'>
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

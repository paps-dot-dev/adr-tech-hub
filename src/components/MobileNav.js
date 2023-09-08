'use client'
import React from 'react'
import {
  FaBars,
  FaBookOpen,
  FaHome,
  FaPlusCircle,
  FaRegWindowClose,
  FaSchool,
} from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  FaArrowLeft,
  FaLaptopCode,
  FaMoneyCheck,
  FaWrench,
  FaDumpster,
  FaUsers,
  FaUserShield,
  FaChartBar,
  FaNewspaper,
  FaLaptop,
  FaHandHolding,
  FaTruck,
  FaCreditCard,
} from 'react-icons/fa'

function MobileNav() {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='flex md:hidden bg-blue-400  rounded-r-full'>
        <div
          onClick={() => setIsOpen(true)}
          className=' text-center w-[64px] p-2 m-2  flex justify-center cursor-pointer hover:text-white hover:animate-pulse ease-linear duration-200'>
          <FaBars className='text-[2em] my-4' />
        </div>
        <div className='text-center w-[96px] p-2 m-2  flex justify-center cursor-pointer hover:text-white hover:animate-pulse ease-linear duration-200'>
          <Link href={'/'}>
            <FaHome className='text-[2em] my-4 ' />
          </Link>
        </div>
      </div>
      <Dialog
        className='fixed top-0 left-0 h-screen w-screen overflow-y-auto bg-blue-300 opacity-90 z-20'
        open={isOpen}
        onClose={() => setIsOpen(false)}>
        <Dialog.Overlay>
          <Dialog.Panel className='flex flex-col justify-between  h-full pb-[96px]'>
            <Dialog.Title className='text-[2em] text-white font-semibold flex items-start justify-between p-6'>
              <h2>Navigation</h2>
              <FaPlusCircle
                onClick={() => setIsOpen(false)}
                className='rotate-45 text-[2.5rem] cursor-pointer hover:-translate-y-2 hover:animate-pulse hover:text-red-500 ease-linear duration-200'
              />
            </Dialog.Title>

            <h2 className='text-[2em] font-semibold text-white border-b-2 w-2/3 p-2 mb-8 mt-8'>
              For Everybody
            </h2>

            <ul className='text-2xl flex flex-col justify-between max-w-[70%]'>
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
            </ul>
            <h2 className='text-[2em] font-semibold text-white border-b-2 w-2/3 p-2 mt-[56px] mb-8'>
              By Department
            </h2>
            <ul className='text-2xl flex flex-col justify-between h-4/5 max-w-[65%]'>
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
              <Link onClick={() => setIsOpen(false)} href={'/marketing'}>
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
          </Dialog.Panel>
        </Dialog.Overlay>
      </Dialog>
    </>
  )
}

export default MobileNav

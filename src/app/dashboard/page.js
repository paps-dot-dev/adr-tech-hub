import React from 'react'
import DashboardLayout from './layout'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaChrome,
  FaDumpster,
  FaDumpsterFire,
  FaGraduationCap,
  FaInternetExplorer,
  FaLaptop,
  FaLeaf,
  FaServicestack,
  FaUniversity,
  FaVideo,
  FaWrench,
} from 'react-icons/fa'
import paychex from '../../../public/paychex.png'
import dialpad from '../../../public/dialpad.png'

function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <div className='flex flex-col md:flex-row justify-between items-end md:items-center'>
          <h1 className='text-3xl lg:text-[3em] font-semibold mx-8'>
            Where would you like to navigate to?
          </h1>
          <button className='bg-gradient-to-br from-blue-400 to-indigo-500 p-5 mt-6 md:mt-0 w-3/4 rounded-l-full text-white font-medium  lg:w-1/4 text-xl hover:animate-pulse'>
            <a target='_blank' href='https://forms.gle/nAPvmbUSzYHLKDUr9'>
              <div className='flex items-center justify-center'>
                <FaLaptop className='text-[2em] lg:text-xl' />
                <p className='mx-4'>
                  {' '}
                  Do You Have Some Tech You'd Like to Share?
                </p>
              </div>
            </a>
          </button>
        </div>
        <div className='h-screen bg-white rounded-l-2xl rounded-r-2xl mt-[64px] mx-2'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
            <Card>
              <a target='_blank' href='https://forms.gle/uTv4nEynrZnVd1Bt6'>
                <div>
                  <FaWrench className='m-auto text-[2em]' />
                  <p className='text-center mt-2'>Submit a Service Ticket</p>
                </div>
              </a>
            </Card>
            <Card>
              <a target='_blank' href='https://www.leaf-crm.com'>
                <div>
                  <FaLeaf className='m-auto text-[2em]' />
                  <p className='text-center mt-2'>Open Leaf CRM</p>
                </div>
              </a>
            </Card>
            <Card>
              <a target='_blank' href='https://zoom.us/j/99970048256'>
                <div>
                  <FaVideo className='m-auto text-[2em]' />
                  <p className='text-center mt-2'>Join ADR Office</p>
                </div>
              </a>
            </Card>
            <Card>
              <a target='_blank' href='https://myapps.paychex.com/'>
                <div>
                  <Image src={paychex} height={300} className='m-auto' />
                </div>
              </a>
            </Card>
            <Card>
              <a target='_blank' href='https://www.service-leaf-crm.com'>
                <div>
                  <FaDumpsterFire className='m-auto text-[3em]' />
                  <p className='text-center mt-2'>Bin Squad CRM</p>
                </div>
              </a>
            </Card>
            <Card>
              <a target='_blank' href='https://lsvtlogin.lightspeedvt.com/'>
                <div>
                  <FaUniversity className='m-auto text-[3em]' />
                  <p className='text-center mt-2'>GC University</p>
                </div>
              </a>
            </Card>
            <Card>
              <a target='_blank' href='https://vt.lightspeedvt.com/'>
                <div>
                  <FaGraduationCap className='m-auto text-[3em]' />
                  <p className='text-center mt-2'>ADR University</p>
                </div>
              </a>
            </Card>

            <Card>
              <a target='_blank' href='https://dialpad.com/login/'>
                <div className='flex justify-center'>
                  <Image src={dialpad} height={200} />
                </div>
              </a>
            </Card>
            <Card>
              <a
                target='_blank'
                href='https://www.affordabledumpsterrental.com/'>
                <div>
                  <FaChrome className='m-auto text-[3em]' />
                  <p className='text-center mt-2'>ADR Website</p>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Dashboard

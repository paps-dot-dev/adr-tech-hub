import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { FaCreditCard, FaDollarSign } from 'react-icons/fa'
import { FaArrowCircleLeft } from 'react-icons/fa'

function page() {
  return (
    <main>
      <Link
        href={'/leadership'}
        className='flex items-center hover:text-blue-400 duration-100 ease-linear'>
        <FaArrowCircleLeft className='text-[4em] px-4' />
        <p>Go Back</p>
      </Link>
      <h1 className='text-4xl font-semibold border-b-2 w-3/4 py-4 px-2 md:text-[3em] md:py-5 md:w-1/3'>
        Reports
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 mt-[64px] w-[95vw] m-auto gap-4'>
        <Link href={'/leadership/reports/sales-reports'}>
          <Card>
            <FaDollarSign />
            <p className='p-2'>Sales</p>
          </Card>
        </Link>
        <Link href={'/leadership/reports/billing-reports'}>
          <Card>
            <FaCreditCard />
            <p className='p-2'>Billing</p>
          </Card>
        </Link>
      </div>
    </main>
  )
}

export default page

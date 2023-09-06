import Department from '@/components/Department'
import React from 'react'
import Reports from './components/Reports'
import Image from 'next/image'
import pbi from '../../../public/pbi.png'
import Card from '@/components/Card'

function page() {
  return (
    <>
      <Department
        phrase="100,000 row spreadsheet? That's cute..."
        department='Analytics'>
        <div className='grid grid-cols-4 p-8'>
          <Card>
            <a target='_blank' href='https://powerbi.microsoft.com/en-us/'>
              <div className='flex justify-center'>
                <Image src={pbi} height={150} />
              </div>
            </a>
          </Card>
        </div>
      </Department>
      <Reports />
    </>
  )
}

export default page

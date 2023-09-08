import Department from '@/components/Department'
import React from 'react'
import Reports from '../../components/Reports/Reports'
import Image from 'next/image'
import pbi from '../../../public/pbi.png'
import Card from '@/components/Card'

const reports = [
  {
    title: 'PowerBi daily reports',
    url: 'https://app.powerbi.com/reportEmbed?reportId=84ec7a03-8500-4328-9088-24ccbeed33c4&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
  },
  {
    title: 'PowerBi time comparison reports',
    url: 'https://app.powerbi.com/reportEmbed?reportId=4f32035a-fd25-495d-8292-ccdbbbb9e3ef&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
  },
]

function page() {
  return (
    <>
      <Department phrase='Crunching the Numbers...' department='Analytics'>
        <div className='grid grid-cols-2 md:grid-cols-4 p-8'>
          <Card>
            <a target='_blank' href='https://powerbi.microsoft.com/en-us/'>
              <div className='flex justify-center'>
                <Image src={pbi} height={150} />
              </div>
            </a>
          </Card>
        </div>
      </Department>
      <Reports reports={reports} />
    </>
  )
}

export default page

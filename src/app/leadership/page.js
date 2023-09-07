import Card from '@/components/Card'
import Construction from '@/components/Construction'
import Department from '@/components/Department'
import Link from 'next/link'
import React from 'react'
import { FaChartBar, FaPaperclip } from 'react-icons/fa'

function page() {
  const item = 'FaPaperclip'
  return (
    <>
      <Department
        department='Leadership'
        phrase='The Leaders and Best...or whatever my little sister said...'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2'>
          <Link href={'/leadership/reports'}>
            <Card>
              <FaChartBar />
              <p>Reports</p>
            </Card>
          </Link>
          <Link href={'/leadership/lead-docs'}>
            <Card>
              <FaPaperclip />
              <p>Docs</p>
            </Card>
          </Link>
        </div>
      </Department>
    </>
  )
}

export default page

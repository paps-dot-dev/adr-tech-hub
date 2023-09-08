import Department from '@/components/Department'
import React from 'react'
import evaluagent from '../../../public/evaluagent.png'
import Card from '@/components/Card'
import Image from 'next/image'
import { FaDumpster, FaGraduationCap } from 'react-icons/fa'

function page() {
  return (
    <>
      <Department
        department='Training'
        phrase="Welcome to the Dojo, home of Steve's favorite class...">
        <div className='grid grid-cols-2 md:grid-cols-4 p-8 gap-4'>
          <Card>
            <a target='_blank' href='https://app.evaluagent.com/login'>
              <div className='flex flex-col justify-center items-center'>
                <Image src={evaluagent} height={150} />
                <p>Call Scores</p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://prod.affordabledumpsterrental.com/Account/Login'>
              <div className='flex flex-col justify-center items-center'>
                <FaDumpster className='text-4xl' />
                <p>Training CRM</p>
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
        </div>
      </Department>
    </>
  )
}

export default page

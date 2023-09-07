import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'
import Card from '@/components/Card'
import { FaLeaf, FaVideo } from 'react-icons/fa'
import dialpad from '../../../public/dialpad.png'
import paychex from '../../../public/paychex.png'
import loom from '../../../public/loom.png'
import merchant from '../../../public/intuit.png'
import Image from 'next/image'

function page() {
  return (
    <>
      <Department
        department='Billing'
        phrase="'Where's my money, man...' - Stewie Griffin.">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-8'>
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
            <a target='_blank' href='https://dialpad.com/login/'>
              <div className='flex justify-center'>
                <Image src={dialpad} height={200} />
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
            <a target='_blank' href='https://www.loom.com'>
              <div className='flex flex-col justify-center items-center'>
                <Image src={loom} height={100} />
                <p className='text-center mt-2'>Loom</p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://accounts.intuit.com/app/sign-in?app_group=MerchantServiceCenter&asset_alias=Intuit.platform.msc&redirect_uri=https%3A%2F%2Fmerchantcenter.intuit.com%2Fmsc%2Fportal%2Finit%3Fcustmode%3Dmsclogin#transaction/MS0189669245'>
              <div className='flex flex-col justify-center items-center'>
                <Image src={merchant} height={50} />
                <p className='text-center mt-2'>Merchant</p>
              </div>
            </a>
          </Card>
        </div>
      </Department>
    </>
  )
}

export default page

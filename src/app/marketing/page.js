import Department from '@/components/Department'
import React from 'react'
import Card from '@/components/Card'
import {
  FaAd,
  FaChartBar,
  FaGoogle,
  FaWordpress,
  FaWordpressSimple,
} from 'react-icons/fa'

function page() {
  return (
    <>
      <Department
        department='Marketing'
        phrase='Marketing...more like Barketing...'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 px-4'>
          <Card>
            <a
              target='_blank'
              href='https://adr-backend-dash-nextjs.vercel.app/'>
              <div>
                <FaChartBar className='m-auto text-[2em]' />
                <p className='text-center mt-2'>
                  Joel's Super Cool and Epic Marketing Dashboard
                </p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://ads.google.com/home/?subid=ww-ww-xs-ip-awhc-a-ogb_dash%21o2&authuser=0'>
              <div>
                <div className='flex justify-center'>
                  <FaAd className='text-[2em]' />
                  <FaGoogle className='text-[2em] mx-2' />
                </div>
                <p className='text-center mt-2'>Google Ads</p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://affordabledumpsterrental.com/wp-login.php?redirect_to=https%3A%2F%2Faffordabledumpsterrental.com%2Fwp-admin%2F&reauth=1'>
              <div>
                <FaWordpressSimple className='text-[2em] m-auto' />

                <p className='text-center mt-2'>Wordpress Admin Portal</p>
              </div>
            </a>
          </Card>
        </div>
      </Department>
    </>
  )
}

export default page

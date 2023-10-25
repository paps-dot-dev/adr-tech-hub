'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SignInForm from '@/components/Auth/SignInForm'
import adr from '../../public/logo.png'
import hero from '../../public/signinbg.jpg'
import { useRouter } from 'next/navigation'

import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa'

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleLogin = (data) => {
    if (data.user.aud === 'authenticated') {
      setUserLoggedIn(true)
      const userData = data
      return userData
    }
  }

  if (userLoggedIn) {
    const router = useRouter()

    router.push('/dashboard')
  } else {
    return (
      <body>
        <main className='bg-slate-900 min-h-screen flex flex-col justify-center items-center'>
          <div
            className='bg-gradient-to-br from-slate-500 to-slate-300 rounded-xl w-3/4 lg:h-[800px]  flex 
      lg:flex-row lg:justify-between flex-col items-center ring-1 ring-blue-300 ease-in'>
            <div>
              <Image
                className='lg:max-w-[40vw] lg:max-h-screen flex-shrink flex-grow hidden lg:flex rounded-xl'
                src={hero}
              />
            </div>
            <div className=' rounded-md min-h-full flex justify-center items-center flex-col lg:w-2/5 w-full mr-4 mt-8'>
              <Image src={adr} className='max-w-[300px]' />
              <h1 className='text-3xl font-bold mt-8'>Welcome to ADR OS</h1>
              <SignInForm handleLogin={handleLogin} />

              <p>
                Sign in with a Provider or{'   '}
                <Link
                  className='font-semibold hover:text-blue-400 ease-linear duration-100'
                  href={'/create-account'}>
                  Create Account
                </Link>
              </p>

              <div className='py-2 flex justify-between items-center mt-4 mb-8'>
                <button className='w-[160px] h-[48px] text-2xl bg-opacity-50 bg-white rounded-full flex justify-center items-center hover:-translate-y-1 ease-in-out duration-200 hover:bg-slate-600 hover:text-white hover:ring-2 ring-blue-400 mx-2'>
                  <FaGoogle />
                </button>
                <button className='w-[160px] h-[48px] text-2xl bg-opacity-50 bg-white rounded-full flex justify-center items-center hover:-translate-y-1 ease-in-out duration-200 hover:bg-slate-600 hover:text-white hover:ring-2 ring-blue-400 mx-2'>
                  <FaApple />
                </button>
                <button className='w-[160px] h-[48px] text-2xl bg-opacity-50 bg-white rounded-full flex justify-center items-center hover:-translate-y-1 ease-in-out duration-200 hover:bg-slate-600 hover:text-white hover:ring-2 ring-blue-400 ml-2'>
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    )
  }
}

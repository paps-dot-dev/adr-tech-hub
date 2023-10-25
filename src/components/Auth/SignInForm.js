'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = (e) => {}
  return (
    <form className='w-full flex flex-col rounded-xl p-8 mt-4 mb-8 bg-neutral-200 bg-opacity-60 shadow-2xl'>
      <h1 className='text-2xl font-bold mt-16'>Sign In with Your Account</h1>
      <div className=' ring-2 ring-blue-400 p-4 rounded-full focus-within:ring-yellow-200 my-4 bg-white bg-opacity-50'>
        <FaUser className='inline' />
        <input
          className='bg-transparent outline-0 px-2'
          type='text'
          id='email'
          placeholder='Email'
        />
      </div>
      <div className=' ring-2 ring-blue-400 p-4 rounded-full focus-within:ring-yellow-200 bg-white bg-opacity-50'>
        <FaLock className='inline' />
        <input
          className='bg-transparent outline-0 px-2'
          type='password'
          id='password'
          placeholder='Password'
        />
      </div>
      <Link
        href={'/forgot-password'}
        className='text-blue-500 ml-auto text-sm p-2'>
        Forgot Password?
      </Link>
      <button
        onSubmit={handleLogin}
        className='bg-green-400 mt-4 w-3/4 m-auto h-[64px] rounded-full shadow-lg hover:bg-gradient-to-r from-green-500 to-green-200 ease-in-out duration-300 hover:-translate-y-2'>
        Sign In
      </button>
    </form>
  )
}

export default SignInForm

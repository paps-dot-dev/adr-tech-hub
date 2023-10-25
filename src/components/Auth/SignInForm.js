'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa'
import { supabase } from '../../lib/helper/supabaseClient'

function SignInForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [inputType, setInputType] = useState('password')

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleShowPassword = () => {
    if (showPassword === true) {
      setShowPassword(false)
      setInputType('password')
    } else {
      setShowPassword(true)
      setInputType('text')
    }
  }

  const { email, password } = formData

  const signInWithEmail = async (e) => {
    e.preventDefault()
    console.log(formData)

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      console.message('Something went wrong', message)
    }
    handleLogin(data)
  }

  return (
    <form
      onSubmit={signInWithEmail}
      className='w-full flex flex-col rounded-xl p-8 mt-4 mb-8 bg-neutral-200 bg-opacity-60 shadow-2xl'>
      <h1 className='text-2xl font-bold mt-16'>Sign In with Your Account</h1>
      <div className=' ring-2 ring-blue-400 p-4 rounded-full focus-within:ring-yellow-200 my-4 bg-white bg-opacity-50'>
        <FaUser className='inline' />
        <input
          className='bg-transparent outline-0 px-2'
          type='text'
          id='email'
          onChange={onChange}
          placeholder='Email'
          value={email}
        />
      </div>
      <div className=' ring-2 ring-blue-400 p-4 rounded-full focus-within:ring-yellow-200 bg-white bg-opacity-50 flex justify-between items-center'>
        <FaLock />
        <input
          className='bg-transparent outline-0 px-2'
          type={inputType}
          id='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        {showPassword ? (
          <FaEyeSlash
            className={showPassword ? 'ml-auto' : 'opacity-50 ml-auto'}
            onClick={handleShowPassword}
          />
        ) : (
          <FaEye
            className={showPassword ? 'ml-auto' : 'opacity-50 ml-auto'}
            onClick={handleShowPassword}
          />
        )}
      </div>
      <Link
        href={'/forgot-password'}
        className='text-blue-500 ml-auto text-sm p-2'>
        Forgot Password?
      </Link>
      <button
        type='submit'
        className='bg-green-400 mt-4 w-3/4 m-auto h-[64px] rounded-full shadow-lg hover:bg-gradient-to-r from-green-500 to-green-200 ease-in-out duration-300 hover:-translate-y-2'>
        Sign In
      </button>
    </form>
  )
}

export default SignInForm

'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../../public/logo.png'
import { useState } from 'react'

function LoginModal({ handleLogin }) {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const handleClick = (e) => {
    e.preventDefault()

    const login = {
      username: user,
      password: password,
    }
    handleLogin(login)
  }

  return (
    <div className='flex flex-col p-10 items-center bg-slate-400 h-[60vh] max-w-[90vw] m-auto rounded-2xl bg-opacity-80'>
      <Image src={logo} height={100} />
      <h2 className='text-3xl italic font-semibold'>Executive Team</h2>

      <form className='flex flex-col justify-center h-[80%] w-2/3 bg-gradient-to-br from-indigo-400 to-blue-400 px-10 mt-[32px] rounded-xl'>
        <input
          onChange={(e) => setUser(e.target.value)}
          className='p-3 lg:p-6 rounded-full'
          placeholder='First Name'
          value={user}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='p-3 lg:p-6 rounded-full mt-4'
          placeholder='Password'
          type='password'
          value={password}
        />
        <button
          onClick={handleClick}
          className='p-4 bg-green-400 w-1/2 mx-auto mt-[32px] rounded-full'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginModal

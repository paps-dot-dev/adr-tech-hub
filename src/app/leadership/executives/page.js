'use client'
import React from 'react'
import LoginModal from './components/LoginModal'
import { useState } from 'react'
import { executives } from '@/executives'

function page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  const handleLogin = (login) => {
    const userInfo = executives.find(
      (executive) => executive.name == login.username
    )
    console.log(userInfo)
    console.log(login)

    if (userInfo.password === login.password) {
      setIsLoggedIn(true)
      setUser(userInfo.name)
    } else {
      alert('Incorrect Username or Password. Please Try Again')
    }
  }

  return (
    <main>
      {isLoggedIn ? (
        <>
          <h1>Hello, {user}</h1>
          <p>Nothing here to see yet, but there will be! Stay Tuned!</p>
        </>
      ) : (
        <>
          <h1 className='text-4xl font-semibold'>
            Welcome to the Executive Level
          </h1>
          <LoginModal handleLogin={handleLogin} />{' '}
        </>
      )}
    </main>
  )
}

export default page

import React from 'react'

function Card({ children }) {
  return (
    <div className='text-2xl min-w-[300px] bg-slate-300 h-[300px] flex flex-col justify-center rounded-xl p-5 bg-opacity-70 hover:bg-blue-400 hover:animate-pulse hover:text-white hover:-translate-y-4 transition-all ease-linear'>
      {children}
    </div>
  )
}

export default Card

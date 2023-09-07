import React from 'react'

function Card({ children }) {
  return (
    <div className='text-xl lg:text-2xl  bg-slate-300 h-[200px] lg:h-[300px] flex flex-col justify-center items-center rounded-xl p-5 bg-opacity-70 hover:bg-blue-400 hover:animate-pulse hover:text-white hover:-translate-y-4 transition-all ease-linear hover:ring-2 hover:ring-yellow-100 ring-inset'>
      {children}
    </div>
  )
}

export default Card

import Image from 'next/image'
import React from 'react'
import mario from '../../public/mario.png'

function Construction() {
  return (
    <div className='m-auto'>
      <Image src={mario} />
      <h1 className='text-[4em] bg-gradient-to-br from-gray-400 to-slate-400 drop-shadow-2xl ring-4 mt-2 ring-gray-600 text-red-600'>
        Still working on this page! Check back later.
      </h1>
    </div>
  )
}

export default Construction

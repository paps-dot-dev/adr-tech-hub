import React from 'react'

function Department({ children, department, phrase }) {
  return (
    <main>
      <div className='mx-8 text-right flex justify-between items-baseline'>
        <p className='text-2xl italic'>{phrase}</p>
        <h1 className='text-[4em] font-semibold border-b-2 w-1/3'>
          {department}
        </h1>
      </div>
      <h2 className='mt-20 text-[2em] lg:text-[3em] mx-8 font-semibold rounded-full p-4 w-[300px] lg:w-1/4 text-center bg-blue-300 drop-shadow-lg ring-yellow-200 ring-2'>
        Resources
      </h2>
      <div className='bg-slate-500 min-h-[600px] mt-[32px] max-w-[95vw] m-auto rounded-2xl flex flex-col  justify-center'>
        {children}
      </div>
    </main>
  )
}

export default Department

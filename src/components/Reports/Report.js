'use client'

import React from 'react'
import { useState, useEffect } from 'react'

function Report({ reports }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return reports.map((report) => (
    <div className='bg-slate-400 mt-[64px] rounded-t-xl bg-opacity-30'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl md:text-4xl p-4 mb-[32px] bg-blue-400 w-3/5 rounded-r-xl'>
          {report.title.toUpperCase()}
        </h1>
        <a
          href={report.url}
          className='bg-yellow-300 p-3 lg:p-5 w-[165px] lg:w-[300px] rounded-xl mr-2 font-semibold ring-2 ring-blue-200 hover:ring-blue-400 hover:-translate-y-2 hover:bg-yellow-200 hover:drop-shadow-lg ease-linear duration-100'>
          View Report in Power BI Browser
        </a>
      </div>
      <iframe
        className='rounded-xl '
        key={report.title}
        title={report.title}
        width={windowWidth}
        height='600'
        src={report.url}
        frameborder='0'
        allowFullScreen='true'></iframe>
    </div>
  ))
}

export default Report

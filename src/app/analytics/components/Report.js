import React from 'react'

function Report({ reports }) {
  return (
    <div className='flex flex-row-wrap justify-between items-center max-w-[95vw] m-auto bg-slate-500 p-2 rounded-2xl mt-8 h-[1000px] '>
      {reports.map((report) => (
        <iframe
          className='rounded-xl mx-2'
          key={report.title}
          title={report.title}
          width='1500'
          height='600'
          src={report.url}
          frameborder='0'
          allowFullScreen='true'></iframe>
      ))}
    </div>
  )
}

export default Report

import React from 'react'
import Report from './Report'

function Reports({ reports }) {
  return (
    <div className='flex flex-col justify-center '>
      <Report reports={reports} />
    </div>
  )
}

export default Reports

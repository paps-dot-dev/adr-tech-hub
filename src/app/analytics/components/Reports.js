import React from 'react'
import Report from './Report'

function Reports() {
  const reports = [
    {
      title: 'Team Lead Career Path',
      url: 'https://app.powerbi.com/reportEmbed?reportId=2c86163c-5e82-4ca8-baed-c14d67ede416&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
    },
    {
      title: 'PowerBi daily reports',
      url: 'https://app.powerbi.com/reportEmbed?reportId=5f2d6aa4-ae82-4e64-8498-3944f4044bb3&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
    },
  ]
  return (
    <>
      <h2 className='mt-[96px] text-[3em] mx-8 font-semibold rounded-full p-4 w-1/4 text-center bg-blue-300 drop-shadow-lg ring-yellow-200 ring-2'>
        Reports
      </h2>
      <Report reports={reports} />
    </>
  )
}

export default Reports

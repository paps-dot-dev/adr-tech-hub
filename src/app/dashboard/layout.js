import Header from '@/components/Header'
import React from 'react'

function DashboardLayout({ children }) {
  return (
    <>
      <body>
        <Header />
        {children}
      </body>
    </>
  )
}

export default DashboardLayout

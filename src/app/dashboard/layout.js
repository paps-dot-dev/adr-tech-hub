import Header from '@/components/Header'
import React from 'react'

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default DashboardLayout

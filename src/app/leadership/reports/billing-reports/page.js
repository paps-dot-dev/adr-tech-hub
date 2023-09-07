import React from 'react'
import Layout from '../components/Layout'
import Reports from '@/components/Reports/Reports'

function page() {
  const reports = [
    {
      title: 'Billing Invoice Tracker',
      url: 'https://app.powerbi.com/reportEmbed?reportId=06cecd38-6089-42f8-a805-916e68f34547&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
    },
    {
      title: 'Billing Reports',
      url: 'https://app.powerbi.com/reportEmbed?reportId=fc1a2b8c-b499-4729-b1ca-b0f948f1f980&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
    },
  ]
  return (
    <>
      <Layout title='Billing Reports'>
        <Reports reports={reports} />
      </Layout>
    </>
  )
}

export default page

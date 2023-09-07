import React from 'react'
import Reports from '../../../../components/Reports/Reports'
import Layout from '../components/Layout'

function page() {
  const reports = [
    {
      title: 'PowerBi daily reports',
      url: 'https://app.powerbi.com/reportEmbed?reportId=84ec7a03-8500-4328-9088-24ccbeed33c4&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
    },
    {
      title: 'Sales Rep Career Path Dashboard',
      url: 'https://app.powerbi.com/reportEmbed?reportId=e24c7cee-8f5f-4cc9-966d-ecaba9647d58&autoAuth=true&ctid=92ff4683-3e44-41b2-ae51-8aeb1d0f3ce3',
    },
  ]
  return (
    <>
      <Layout title='Sales Reports'>
        <Reports reports={reports} />
      </Layout>
    </>
  )
}

export default page

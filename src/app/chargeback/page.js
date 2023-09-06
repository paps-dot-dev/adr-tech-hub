import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'

function page() {
  return (
    <>
      <Department
        department='Chargeback'
        phrase='Would you like to secure your spot on the schedule for not having to mess with me for just $1 down?...'>
        <Construction />
      </Department>
    </>
  )
}

export default page

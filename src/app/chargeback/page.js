import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'

function page() {
  return (
    <>
      <Department
        department='Chargeback'
        phrase='You did not just charge back $1...'>
        <Construction />
      </Department>
    </>
  )
}

export default page

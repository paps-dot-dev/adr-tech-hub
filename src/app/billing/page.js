import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'

function page() {
  return (
    <>
      <Department
        department='Billing'
        phrase="'Where's my money, man...' - Stewie Griffin.">
        <Construction />
      </Department>
    </>
  )
}

export default page

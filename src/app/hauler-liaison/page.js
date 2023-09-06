import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'

function page() {
  return (
    <>
      <Department
        department='Hauler Liaison'
        phrase='Favorite flavor of Kool-Aid? ADR...'>
        <Construction />
      </Department>
    </>
  )
}

export default page

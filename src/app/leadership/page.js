import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'

function page() {
  return (
    <>
      <Department
        department='Leadership'
        phrase='The Leaders and Best...or whatever my little sister said...'>
        <Construction />
      </Department>
    </>
  )
}

export default page

import Department from '@/components/Department'
import React from 'react'
import Construction from '@/components/Construction'

function page() {
  return (
    <>
      <Department
        department='Customer Concern'
        phrase="Mhmmm...yep. You definitely didn't put that in the can...">
        <Construction />
      </Department>
    </>
  )
}

export default page

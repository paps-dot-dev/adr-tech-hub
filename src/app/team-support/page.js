import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'
import { FaHardHat } from 'react-icons/fa'

function page() {
  return (
    <>
      <Department
        department='Team Support'
        phrase="So you can't deliver until next week...what about tomorrow instead...I wasn't asking...">
        <Construction />
      </Department>
    </>
  )
}

export default page

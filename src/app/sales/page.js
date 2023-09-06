import Department from '@/components/Department'
import React from 'react'
import Card from '@/components/Card'
import {
  FaVideo,
  FaLeaf,
  FaDumpsterFire,
  FaCalculator,
  FaMapPin,
  FaMapMarked,
  FaMoneyBill,
} from 'react-icons/fa'
import paychex from '../../../public/paychex.png'
import Image from 'next/image'
import dialpad from '../../../public/dialpad.png'

function page() {
  return (
    <>
      <Department
        department='Sales'
        phrase='No tires, halfway-full when loading concrete, and make sure to sign your service agreement...'>
        <div className='grid grid-cols-2 lg:grid-cols-4 p-8 gap-5'>
          <Card>
            <a target='_blank' href='https://www.leaf-crm.com'>
              <div>
                <FaLeaf className='m-auto text-[2em]' />
                <p className='text-center mt-2'>Open Leaf CRM</p>
              </div>
            </a>
          </Card>
          <Card>
            <a target='_blank' href='https://dialpad.com/login/'>
              <div className='flex justify-center'>
                <Image src={dialpad} height={200} />
              </div>
            </a>
          </Card>
          <Card>
            <a target='_blank' href='https://zoom.us/j/99970048256'>
              <div>
                <FaVideo className='m-auto text-[2em]' />
                <p className='text-center mt-2'>Join ADR Office</p>
              </div>
            </a>
          </Card>
          <Card>
            <a target='_blank' href='https://myapps.paychex.com/'>
              <div>
                <Image src={paychex} height={300} className='m-auto' />
              </div>
            </a>
          </Card>
          <Card>
            <a target='_blank' href='https://www.service-leaf-crm.com'>
              <div>
                <FaDumpsterFire className='m-auto text-[3em]' />
                <p className='text-center mt-2'>Bin Squad CRM</p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://www.dumpsters.com/resources/concrete-weight-calculator'>
              <div>
                <FaCalculator className='m-auto text-[3em]' />
                <p className='text-center mt-2'>Concrete Weight Calculator</p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://www.google.com/maps/d/u/0/edit?mid=1iXNhWbl6gWbRBomLTyX2KlnOKXxI4Yrh&ll=33.47167943054576%2C-85.61173763241877&z=5'>
              <div>
                <FaMapPin className='m-auto text-[3em]' />
                <p className='text-center mt-2'>ADR Service Territory Map</p>
              </div>
            </a>
          </Card>
          <Card>
            <a target='_blank' href='https://www.google.com/maps'>
              <div>
                <FaMapMarked className='m-auto text-[3em]' />
                <p className='text-center mt-2'>Google Maps</p>
              </div>
            </a>
          </Card>
          <Card>
            <a
              target='_blank'
              href='https://docs.google.com/spreadsheets/d/1ExFlBmH_8gKQDtG3cXDpPpi2s55ZJEhvFb5Dowl65uA/edit#gid=1925829189'>
              <div>
                <FaMoneyBill className='m-auto text-[3em]' />
                <p className='text-center mt-2'>Commission Calculator</p>
              </div>
            </a>
          </Card>
        </div>
      </Department>
    </>
  )
}

export default page

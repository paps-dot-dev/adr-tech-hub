import Construction from '@/components/Construction'
import Department from '@/components/Department'
import React from 'react'
import Card from '@/components/Card'
import { FaDollarSign, FaList } from 'react-icons/fa'
import Image from 'next/image'
import dumpstars from '../../../public/dsedited.png'
import sharks from '../../../public/sharksedited.png'
import royals from '../../../public/RoyalKnights.png'
import squad from '../../../public/301SquadLogo.png'
import knights from '../../../public/Knights.png'

function page() {
  const cards = [
    {
      name: 'Dumpstars Hauler Info',
      image: dumpstars,
      link: 'https://docs.google.com/spreadsheets/d/1bmQ27bnwTIPAFHysTj0QpUpPXpJf3jSPYb30h40hJrw/edit?usp=sharing',
    },
    {
      name: 'Sharks Hauler Info',
      image: sharks,
      link: 'https://docs.google.com/spreadsheets/d/1kH4TlF0KEJUttH9t0jLO67lLfKXiDYZn979OqTprGik/edit?usp=sharing',
    },
    {
      name: '301 Hauler Info',
      image: squad,
      link: 'https://docs.google.com/spreadsheets/d/1Z475mn6ubZKOSAMLq7xD6BE_cLhxXLz6IOtB-kaGNTw/edit?usp=sharing',
    },
    {
      name: 'Royals Hauler Info',
      image: royals,
      link: 'https://docs.google.com/spreadsheets/d/1fcfJ3ubnPwz0R38OOxDfkhUsQV_HNB5tkMHIxShtHeQ/edit?usp=sharing',
    },
    {
      name: 'Knights Hauler Info',
      image: knights,
      link: 'https://docs.google.com/spreadsheets/d/1f3iVJj1v6df2ymfkxcaZfQSwW94XGBTrHcG6umpfT-w/edit#gid=1954078734',
    },
    {
      name: "Joel's Zip Tool",
      image: '',
      link: 'https://adr-backend-dash-nextjs.vercel.app/',
    },
  ]
  return (
    <>
      <Department
        department='Hauler Liaison'
        phrase='Favorite flavor of Kool-Aid? ADR...'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
          {cards.map((card) => (
            <a target='_blank' href={card.link}>
              <Card>
                <Image src={card.image} width={64} alt='image' />
                <p>{card.name}</p>
              </Card>
            </a>
          ))}
        </div>
      </Department>
    </>
  )
}

export default page

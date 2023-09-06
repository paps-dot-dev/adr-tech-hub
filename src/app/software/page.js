import React from 'react'
import Card from '@/components/Card'
import { FaTrello, FaWrench } from 'react-icons/fa'
import Image from 'next/image'
import pbi from '../../../public/pbi.png'
import loom from '../../../public/loom.png'
import notion from '../../../public/notion.png'
import adobe from '../../../public/adobe.png'

function page() {
  return (
    <main className='flex flex-col justify-between'>
      <div>
        <h1 className='text-[4em] font-semibold'>
          Software that works for you...
        </h1>
        <h2 className='text-right text-[3em] mt-4'>
          ...not the other way around.
        </h2>
      </div>
      <div className='grid grid-cols-3 gap-8 p-8 mt-[128px]'>
        <Card>
          <a target='_blank' href='https://www.trello.com'>
            <div>
              <FaTrello className='m-auto text-[3em]' />
              <p className='text-center mt-2'>Trello</p>
            </div>
          </a>
        </Card>
        <Card>
          <a target='_blank' href='https://powerbi.microsoft.com/en-us/'>
            <div className='flex justify-center'>
              <Image src={pbi} height={150} />
            </div>
          </a>
        </Card>
        <Card>
          <a target='_blank' href='https://www.loom.com'>
            <div className='flex flex-col justify-center items-center'>
              <Image src={loom} height={100} />
              <p className='text-center mt-2'>Loom</p>
            </div>
          </a>
        </Card>
        <Card>
          <a target='_blank' href='https://www.notion.so/login'>
            <div className='flex flex-col justify-center items-center'>
              <Image src={notion} height={200} />
            </div>
          </a>
        </Card>
        <Card>
          <a
            target='_blank'
            href='https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fadobedotcom-cc%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Fcreativecloud.html%2523old_hash%253D%2526from_ims%253Dtrue%253Fclient_id%253Dadobedotcom-cc%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Ccreative_cloud%252Cgnav%252Cread_organizations%252Cadditional_info.projectedProductContext%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522%2522%252C%2522jslibver%2522%253A%2522v2-v0.38.0-17-g633319d%2522%252C%2522nonce%2522%253A%25221453575891838310%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=adobedotcom-cc&scope=AdobeID%2Copenid%2Ccreative_cloud%2Cgnav%2Cread_organizations%2Cadditional_info.projectedProductContext%2Cadditional_info.roles&state=%7B%22ac%22%3A%22%22%2C%22jslibver%22%3A%22v2-v0.38.0-17-g633319d%22%2C%22nonce%22%3A%221453575891838310%22%7D&relay=be571f47-4dca-4846-b5e4-739bdb14f4ca&locale=en_US&flow_type=token&idp_flow_type=login&ab_test=stop-mk-new-text&s_p=apple%2Cgoogle%2Cfacebook&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.adobe.com%2Fcreativecloud.html%23old_hash%3D%26from_ims%3Dtrue%3Fclient_id%3Dadobedotcom-cc%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Ccreative_cloud%2Cgnav%2Cread_organizations%2Cadditional_info.projectedProductContext%2Cadditional_info.roles&use_ms_for_expiry=true#/'>
            <div className='flex flex-col justify-center items-center'>
              <Image src={adobe} height={200} />
              <p>Adobe Creative Cloud</p>
            </div>
          </a>
        </Card>
      </div>
      <div className='bg-blue-300 bg-opacity-65 rounded-t-2xl p-8'>
        <h1 className='text-4xl font-semibold mt-[32px]'>
          And for when it doesn't want to work...
        </h1>
        <h2 className='text-right text-2xl font-semibold'>
          We Have Developers and IT Pros!
        </h2>
        <div className=' mt-8'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdSqUTqq9Vw5LKWwlbFo7OVc-1UNahfjXlBKB-SXi5STkxlXg/viewform?embedded=true'
            width='640'
            height='1131'
            frameborder='0'
            marginheight='0'
            marginwidth='0'>
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  )
}

export default page

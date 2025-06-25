'use client' 

import Image from 'next/image'
import { FormDataType } from './FormData'
import ticket from '@/public/assets/icons/pattern-ticket.svg'

export function Ticket({data}: {data: FormDataType}) {
  return (
    <div className='w-full flex justify-center'>
      <div className='relative flex justify-center items-center overflow-hidden max-w-[600px] aspect-[15/7] grow backdrop-blur-xl clip-path-ticket'>
        <Image
          src={ticket}
          alt='ticket image'
          className='absolute w-full'
        />
        <div className='relative size-56'>
          <Image
            src={data.avatar}
            alt='Avatar image'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}
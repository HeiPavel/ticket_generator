'use client' 

import Image from 'next/image'
import { FormDataType } from './FormData'
import { TicketData } from './TicketData'
import ticket from '@/public/assets/icons/pattern-ticket.svg'

export function Ticket({data}: {data: FormDataType}) {
  return (
    <div className='mt-16 tablet:mt-24 w-full flex justify-center'>
      <div className='relative flex overflow-hidden max-w-[600px] aspect-[15/7] grow backdrop-blur-xl clip-path-ticket animate-appear'>
        <Image
          src={ticket}
          alt='ticket image'
          className='absolute w-full'
        />
        <TicketData data={data}/>
      </div>
    </div>
  )
}
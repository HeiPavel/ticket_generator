'use client' 

import { FormDataType } from './FormData'
import { TicketData } from './TicketData'
import {ReactComponent as TicketIcon} from '@/public/assets/icons/pattern-ticket.svg'

export function Ticket({data}: {data: FormDataType}) {
  return (
    <div className='mt-16 tablet:mt-24 w-full flex justify-center'>
      <div className='relative flex overflow-hidden max-w-[600px] aspect-[15/7] grow backdrop-blur-xl clip-path-ticket animate-appear'>
        <TicketIcon className='absolute w-full'/>
        <TicketData data={data}/>
      </div>
    </div>
  )
}
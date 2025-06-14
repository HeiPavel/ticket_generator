'use client' 

import Image from 'next/image'
import { FormDataType } from './FormData'

export function Ticket({data}: {data: FormDataType}) {
  return (
    <div className='relative size-56 border border-black'>
      <Image
        src={data.avatar}
        alt='User photo'
        className='object-cover'
        fill
      />
    </div>
  )
}
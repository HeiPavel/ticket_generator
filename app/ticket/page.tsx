'use client'

import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { FormContext } from '../components/FormData'

export default function Ticket() {
  const {data} = useContext(FormContext)

  useEffect(() => {
    return () => URL.revokeObjectURL(data.avatar)
  }, [data.avatar])

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
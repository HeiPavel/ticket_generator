'use client'

import { FiInfo } from 'react-icons/fi'

type Props = {
  message: string
  isInfoMessage?: boolean
}

export function Message({message, isInfoMessage = false}: Props) {
  return (
    <p className={`${isInfoMessage ? 'text-white' : 'text-orange-medium'} flex gap-2 items-center text-xs`}>
      <FiInfo/>
      <span>{message}</span>
    </p>
  )
}
'use client'

import { useContext } from 'react'
import { FormContext } from '../components/FormData'
import { useCleanAndRedirect } from '../components/hooks/useCleanAndRedirect'

import { Ticket } from '../components/Ticket'

export default function TicketPage() {
  const {data} = useContext(FormContext)
  const isMounted = useCleanAndRedirect(data.avatar, data.isValid)

  if (!isMounted) return

  return (
    <Ticket data={data}/>
  )
}
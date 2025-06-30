'use client'

import { useContext } from 'react'
import { FormContext } from '../components/FormData'
import { useCleanAndRedirect } from '../components/hooks/useCleanAndRedirect'
import { TicketTitle } from '../components/TicketTitle'
import { Ticket } from '../components/Ticket'
import { LinkBack } from '../components/LinkBack'

export default function TicketPage() {
  const {data} = useContext(FormContext)
  const isMounted = useCleanAndRedirect(data.avatar, data.isValid)

  if (!isMounted) return

  return (
    <>
      <TicketTitle
        name={data.name}
        email={data.email}
      />
      <Ticket data={data}/>
      <LinkBack/>
    </>
  )
}
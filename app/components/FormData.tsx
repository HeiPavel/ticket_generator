'use client'

import { useState, createContext, ReactNode } from 'react'
import { UserData } from '../util/schema'

export interface FormDataType extends Omit<UserData, 'avatar'> {
  avatar: string
  isValid: boolean
  eventDate: string
  ticketID: string
}

export type FormContextType = {
  data: FormDataType
  setData: (data: FormDataType) => void
}

export const defaultData: FormDataType = {
  avatar: '',
  name: '',
  email: '',
  gitHubUsername: '',
  isValid: false,
  eventDate: '',
  ticketID: ''
}

export const defaultValue: FormContextType = {
  data: defaultData,
  setData: (data: FormDataType) => undefined
}

export const FormContext = createContext<FormContextType>(defaultValue)

export function FormData({children}: Readonly<{children: ReactNode}>) {
  const [data, setData] = useState<FormDataType>(defaultData)

  const context: FormContextType = {
    data,
    setData
  }

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )
}
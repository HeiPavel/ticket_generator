'use client'

import { useState, createContext, ReactNode } from 'react'
import { UserData } from './Form'

interface FormData extends Omit<UserData, 'avatar'> {
  avatar: string
  isValid: boolean
}

type FormContextType = {
  data: FormData
  setData: (data: FormData) => void
}

export const defaultData: FormData = {
  avatar: '',
  name: '',
  email: '',
  gitHubUsername: '',
  isValid: false
}

export const defaultValue: FormContextType = {
  data: defaultData,
  setData: (data: FormData) => undefined
}

export const FormContext = createContext<FormContextType>(defaultValue)

export function FormData({children}: Readonly<{children: ReactNode}>) {
  const [data, setData] = useState<FormData>(defaultData)

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
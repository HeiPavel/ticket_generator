'use client'

import { useContext, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, UserData } from '../util/schema'
import { generateEventDate } from '../util/generateEventDate'
import { generateTicketNumber } from '../util/generateTicketNumber'
import { FormContext } from './FormData'
import { FileInput } from './FileInput'
import { TextInput } from './TextInput'
import { SubmitButton } from './SubmitButton'
import { defaultData } from './FormData'

const textFieldData: TextInputType[] = [
  {
    name: 'name',
    placeholder: 'John Doe',
    label: 'Full Name'
  },
  {
    name: 'email',
    placeholder: 'example@email.com',
    label: 'Email Address'
  },
  {
    name: 'gitHubUsername',
    placeholder: '@yourusername',
    label: 'GitHub Username'
  }
]

export type FieldName = 'name' | 'email' | 'gitHubUsername'

export interface TextData extends Omit<UserData, 'avatar'> {
  eventDate: string
  ticketID: string
}

export type TextInputType = {
  name: FieldName
  placeholder: string
  label: string
}

export function Form() {
  const {setData} = useContext(FormContext)
  const router = useRouter()
  const isSubmitPassedRef = useRef(false)
  
  const methods = useForm<UserData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const {handleSubmit} = methods

  const handleSendData = (data: TextData) => {
    const formData = new FormData()

    for (const key in data) {
      formData.set(key, data[key as keyof TextData])
    }

    fetch('/api/send-email', {
      method: 'POST',
      body: formData
    })
  }

  const onSubmit: SubmitHandler<UserData> = (data) => {
    if (isSubmitPassedRef.current) {
      return
    } else isSubmitPassedRef.current = true
    
    const textData: TextData = {
      name: data.name.toLowerCase().split(' ').filter(name => name).join(' '),
      email: data.email.toLowerCase(),
      gitHubUsername: data.gitHubUsername,
      eventDate: generateEventDate(),
      ticketID: generateTicketNumber()
    }

    setData({
      avatar: URL.createObjectURL(data.avatar[0]),
      isValid: true,
      ...textData
    })

    handleSendData(textData)

    router.push('./ticket')
  }

  useEffect(() => {
    setData(defaultData)
  }, [])

  return (
    <div className='w-full flex justify-center'>
      <FormProvider {...methods}>
        <form
          className='mt-10 grow flex flex-col text-white max-w-[460px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <FileInput/>
          {textFieldData.map((data, index) => (
            <TextInput
              key={index} 
              {...data}
            />
          ))}
          <SubmitButton/>
        </form>
      </FormProvider>
    </div>
  )
}
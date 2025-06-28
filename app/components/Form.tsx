'use client'

import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, UserData } from '../util/schema'
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

export type TextInputType = {
  name: FieldName
  placeholder: string
  label: string
}

export function Form() {
  const {setData} = useContext(FormContext)
  const router = useRouter()

  const methods = useForm<UserData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const {handleSubmit} = methods

  const onSubmit: SubmitHandler<UserData> = (data) => {
    setData({
      name: data.name.toLowerCase().split(' ').filter(name => name).join(' '),
      email: data.email.toLowerCase(),
      gitHubUsername: data.gitHubUsername,
      avatar: URL.createObjectURL(data.avatar[0]),
      isValid: true
    })

    router.push('./ticket')
  }

  useEffect(() => {
    setData(defaultData)
  }, [])

  return (
    <div className='px-4 w-full flex justify-center'>
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
'use client'

import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'
import { UserData } from '../util/schema'
import { FieldName } from './Form'
import { Message } from './Message'

type Props = {
  errors: FieldErrors<UserData>
  name: FieldName | 'avatar'
  isFileType: boolean
}

const fileMessage = 'Upload your photo (JPG or PNG, max size 500KB).'

export function InputError({errors, name, isFileType}: Props) {
  const isError = errors[name]

  return (
    <div className='mt-1 min-h-4'>
      {
        isError ? 
          <ErrorMessage
            errors={errors}
            name={name}
            render={({message}) => <Message message={message}/>}
          /> : 
        isFileType ?
          <Message
            message={fileMessage}
            isInfoMessage={isFileType}
          /> : null
      }
    </div>
  )
}
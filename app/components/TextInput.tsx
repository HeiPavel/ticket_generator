'use client'

import { InputEvent, ClipboardEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextInputType } from './Form'
import { UserData } from '../util/schema'

export function TextInput({name, placeholder, label}: TextInputType) {
  const {
    register,
    formState: {
      errors
    }
  } = useFormContext<UserData>()

  const handleInput = (event: InputEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement, curentIndex = target.selectionStart ?? 0
    if (
      event.data === ' ' && 
      (
        curentIndex === 0 || 
        target.value[curentIndex] === ' ' || 
        target.value[curentIndex - 1] === ' ' || 
        target.value[curentIndex + 1] === ' '
      )) event.preventDefault()
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const text = event.clipboardData.getData('text')
    if (/^\s|\s{2,}|\s$/.test(text)) event.preventDefault()
  }

  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
        <input
          type='text'
          id={name}
          {...register(name)}
          onBeforeInput={handleInput}
          onPaste={handlePaste}
          className='border border-white rounded-xl text-lg'
        />
        <p className='text-xs min-h-4 text-red-700'>{errors[name]?.message ? errors[name]?.message : ''}</p>
    </div>
  )
}
'use client'

import { InputEvent, ClipboardEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextInputType } from './Form'
import { UserData } from '../util/schema'
import { InputError } from './InputError'

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
    <div className='mt-1 flex flex-col'>
      <label 
        className='text-xl font-medium'
        htmlFor={name}
      >
        {label}
      </label>
        <input
          type='text'
          id={name}
          {...register(name)}
          onBeforeInput={handleInput}
          onPaste={handlePaste}
          className='mt-2 px-3 h-12 border border-gray-medium rounded-xl text-white text-lg bg-blur backdrop-blur-xs 
            placeholder:text-gray-light hover:border-gray-light focus:hover:border-gray-medium 
            focus:outline-solid focus:outline-2 focus:outline-gray-medium focus:outline-offset-2 transition-[border-color] duration-150 ease-linear'
          placeholder={placeholder}
        />
        <InputError
          errors={errors}
          name={name}
          isFileType={false}
        />
    </div>
  )
}
'use client'

import { useState, useEffect, DragEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { AvatarPreview } from './AvatarPreview'
import { UserData } from './Form'

export function FileInput() {
  const [path, setPath] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const {
    register,
    formState: {
      errors
    },
    setValue,
    watch,
    setFocus
  } = useFormContext<UserData>()

  const files = watch('avatar')

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files

    setFocus('avatar')
    
    if (files.length) setValue('avatar', files, {shouldValidate: true})
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (!isFocused) setIsFocused(true)
  }
  
  useEffect(() => {
    if (!files?.length) {
      setPath('')
      return
    }
      
    const objectURL = URL.createObjectURL(files[0])
    setPath(objectURL)
  
    return () => URL.revokeObjectURL(objectURL)
  }, [files?.[0]])

  return (
    <>
      <label 
        htmlFor='avatar'
        className='text-lg font-medium'
        onClick={event => event.preventDefault()}
      >
        Upload Avatar
      </label>
      <div 
        className={`relative overflow-hidden mt-2 h-36 rounded-xl ${isFocused ? 'border-2 border-gray-medium' : ''} before:absolute before:border-2 before:border-dashed before:border-gray-medium before:rounded-xl before:-inset-[1px]`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsFocused(false)}
      >    
        <AvatarPreview path={path}/>
      </div> 
      <input 
        type='file' 
        id='avatar'
        {...register('avatar')}
        accept='image/png, image/jpg, image/jpeg'
        className='size-0 opacity-0'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />     
      <p className='text-xs min-h-4 text-red-700'>{errors.avatar?.message ? errors.avatar?.message : ''}</p>
    </>
  )
}
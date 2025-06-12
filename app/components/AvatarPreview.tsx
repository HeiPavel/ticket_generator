'use client'

import Image from 'next/image'
import uploadIcon from '@/public/assets/icons/icon-upload.svg'
import { useFormContext } from 'react-hook-form'
import { UserData } from './Form'

export function AvatarPreview({path}: {path: string}) {
  const {resetField, getFieldState} = useFormContext<UserData>()
  const {invalid} = getFieldState('avatar')

  const preview = () => {
    if (path && !invalid) return (
      <>
        <div className='relative size-14 rounded-md overflow-hidden'>
          <Image
            src={path}
            alt='preview'
            fill
            className='object-cover'
          />
        </div>
        <div className='flex gap-1.5 text-sm text-gray-light'>
          <button
            type='reset'
            className='px-2 rounded-md bg-gray-dark cursor-pointer'
            onClick={(event) => {
              event.preventDefault()
              resetField('avatar')
            }}
          >
            Remove image
          </button>
          <label 
            htmlFor='avatar'
            className='px-2 rounded-md bg-gray-dark cursor-pointer'
          >
            Change image
          </label>
        </div>
      </>
    )

    return (
      <>
        <label 
          htmlFor='avatar'
          className='block p-2 rounded-lg bg-gray-dark border border-gray-medium cursor-pointer'
        >
          <Image
            src={uploadIcon}
            alt='Upload icon'
          />
        </label>
        <p className='text-gray-light text-lg'>Drag and drop or click to upload</p>
      </>
    )
  }

  return (
    <div className='relative h-full flex justify-center items-center'>
      <div className='flex flex-col items-center gap-3'>
        {preview()}
      </div>
    </div>
  )
}
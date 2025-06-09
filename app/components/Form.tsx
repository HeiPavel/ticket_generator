'use client'

import { InputEvent, ClipboardEvent, DragEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png"
]

const MAX_FILE_SIZE = 0.5 * 1024 * 1024

const schema = z.object({
  avatar: z.custom<FileList>()
    .refine(
      files => files.length > 0,
      'Photo required'
    )
    .refine(
      files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Wrong type of file. Please upload a photo with extension JPG or PNG.'
    )
    .refine(
      files => files?.[0]?.size <= MAX_FILE_SIZE,
      'File too large. Please uplouad a photo under 500KB.'
    ),
  name: z.string()
    .min(1, {message: 'Full name required'})
    .max(60, {message: 'Maximum length of Full name is 60 letters.'})
    .refine(
      string => string.split(' ').filter(name => name).length >= 2,
      'First and Last names required splited by space.'
    )
    .refine(
      string => string.split(' ').filter(name => name).every(name => name.length >= 2),
      'Each name should have 2 or more letters.'
    )
    .refine(
      string => /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(string),
      "Only letters, spaces, apostrophes (') and hyphens (-) are allowed."
    ),
  email: z.string().min(1, {message: 'Email required'}).email(),
  gitHubUsername: z.string()
    .min(1, {message: 'GitHub Username required.'})
    .refine(
      string => /^@(?=.{1,39}$)[a-z\d](?:[a-z\d]|-(?=[a-z\d]))*$/.test(string),
      'Invalid format. Must start with "@" and adjust GitHub rules.'
    )
})

type UserData = z.infer<typeof schema>

export function Form() {
  const {
    register,
    formState: {
      errors
    },
    reset,
    watch,
    handleSubmit,
    setValue
  } = useForm<UserData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files

    if (files.length) setValue('avatar', files, {shouldValidate: true})
  }

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
    <div className='w-full flex justify-center'>
      <form
        className='mt-10 grow flex flex-col text-white max-w-[450px]'
      >
        <label htmlFor='avatar'>Upload avatar</label>
        <label 
          htmlFor='avatar'
          className='relative overflow-hidden h-24 rounded-xl before:absolute before:border-2 before:border-dashed before:rounded-xl before:-inset-[1px]'
          onDrop={handleDrop}
          onDragOver={event => event.preventDefault()}
        >
        </label>
        <input 
          type='file' 
          id='avatar'
          {...register('avatar')}
          accept='image/png, image/jpg, image/jpeg'
          className='hidden'
        />
        <p className='text-xs min-h-4 text-red-700'>{errors.avatar?.message ? errors.avatar?.message : ''}</p>
        <label htmlFor='name'>Full Name</label>
        <input
          type='text'
          id='name'
          {...register('name')}
          onBeforeInput={handleInput}
          onPaste={handlePaste}
          className='border border-white rounded-xl text-lg'
        />
        <p className='text-xs min-h-4 text-red-700'>{errors.name?.message ? errors.name?.message : ''}</p>
        <label htmlFor='email'>Email Adress</label>
        <input
          type='text'
          id='email'
          {...register('email')}
          onBeforeInput={handleInput}
          onPaste={handlePaste}
          className='border border-white rounded-xl text-lg'
        />
        <p className='text-xs min-h-4 text-red-700'>{errors.email?.message ? errors.email?.message : ''}</p>
        <label htmlFor='gitHubUsername'>GitHub Username</label>
        <input
          type='text'
          id='gitHubUsername'
          {...register('gitHubUsername')}
          onBeforeInput={handleInput}
          onPaste={handlePaste}
          className='border border-white rounded-xl text-lg'
        />
        <p className='text-xs min-h-4 text-red-700'>{errors.gitHubUsername?.message ? errors.gitHubUsername?.message : ''}</p>
        <button
          type='submit'
          className='px-3 py-2 border border-white rounded-xl'
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  )
}
'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
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
      files => files?.[0]?.size <= MAX_FILE_SIZE,
      'File too large. Please uplouad a photo under 500KB.'
    )
    .refine(
      files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Wrong type of file. Please upload a photo with extension JPG or PNG.'
    ),
  name: z.string().min(1, {message: 'Name required'}),
  email: z.string().min(1, {message: 'Email required'}).email(),
  gitHubUsername: z.string()
    .min(1, {message: 'GitHub Username required'})
    .refine(
      username => username.startsWith('@') && username.length === 1,
      'GitHub Username should have 2 or more symbols.'
    )
    .refine(
      username => username.startsWith('@'),
      'GitHub Username should starts with "@"'
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
    handleSubmit
  } = useForm<UserData>({
    resolver: zodResolver(schema)
  })

  return (
    <></>
  )
}
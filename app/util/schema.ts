import {z} from 'zod'

const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png"
]

const MAX_FILE_SIZE = 0.5 * 1024 * 1024

export const schema = z.object({
  avatar: z.custom<FileList>()
    .refine(
      files => files?.length > 0,
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

export type UserData = z.infer<typeof schema>
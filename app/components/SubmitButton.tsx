'use client'

import {motion} from 'motion/react'
import { useFormContext } from 'react-hook-form'
import { UserData } from '../util/schema'

export function SubmitButton() {
  const {
    formState: {
      isSubmitSuccessful,
      isSubmitting,
      isValid
    }
  } = useFormContext<UserData>()
  
  const isDisabled = (isSubmitting && isValid) || isSubmitSuccessful

  return (
    <motion.button
      disabled={isDisabled}
      type='submit'
      className='mt-3 h-12 flex items-center justify-center text-blue-dark bg-orange-light text-xl font-extrabold rounded-xl cursor-pointer
        border-2 border-transparent focus:border-blue-dark button-shadow-hover will-change-[filter] enabled:hover:border-blue-dark
        focus:outline-solid focus:outline-2 focus:outline-gray-medium transition-all duration-150 ease-linear opacity-100 disabled:opacity-75'
      whileTap={{scale: 0.9, transitionEnd: {scale: 1}}}
    >
      Generate My Ticket
    </motion.button>
  )
}
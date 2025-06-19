'use client'

import {motion} from 'motion/react'

export function SubmitButton() {
  return (
    <motion.button
      type='submit'
      className='mt-3 h-12 flex items-center justify-center text-blue-dark bg-orange-light text-xl font-extrabold rounded-xl cursor-pointer
        border-2 border-transparent focus:border-blue-dark button-shadow-hover will-change-[filter] hover:border-blue-dark
        focus:outline-solid focus:outline-2 focus:outline-gray-medium transition-all duration-150 ease-linear'
      whileTap={{scale: 0.85}}
    >
      Generate My Ticket
    </motion.button>
  )
}
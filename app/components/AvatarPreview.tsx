'use client'

import Image from 'next/image'
import uploadIcon from '@/public/assets/icons/icon-upload.svg'
import { useFormContext } from 'react-hook-form'
import { UserData } from '../util/schema'
import { motion, AnimatePresence } from 'motion/react'
import { useMounted } from './hooks/useMounted'

export function AvatarPreview({path}: {path: string}) {
  const {resetField, getFieldState} = useFormContext<UserData>()
  const {invalid} = getFieldState('avatar')
  const isMounted = useMounted()

  const isPreviewOpen = path && !invalid

  const preview = () => {
    if (isPreviewOpen) return (
      <>
        <motion.div
          className='relative size-14 rounded-md overflow-hidden'
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -100, opacity: 0}}
        >
          <Image
            src={path}
            alt='preview'
            fill
            className='object-cover'
          />
        </motion.div>
        <motion.div 
          className='flex gap-1.5 text-sm text-gray-light'
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -100, opacity: 0}}
        >
          <button
            type='reset'
            className='px-2 py-0.5 rounded-md bg-gray-dark cursor-pointer decoration-transparent hover:decoration-gray-medium decoration-2 underline-offset-2 underline transition-color duration-150 ease-linear'
            onClick={(event) => {
              event.preventDefault()
              resetField('avatar')
            }}
          >
            Remove image
          </button>
          <label 
            htmlFor='avatar'
            className='px-2 py-0.5 rounded-md bg-gray-dark cursor-pointer decoration-transparent hover:decoration-gray-medium decoration-2 underline-offset-2 underline transition-color duration-150 ease-linear'
          >
            Change image
          </label>
        </motion.div>
      </>
    )

    return (
      <>
        <motion.label
          key='upload label' 
          htmlFor='avatar'
          className='block p-2 rounded-lg bg-gray-dark border border-gray-medium-dark cursor-pointer'
          whileHover={{scale: 1.15}}
          whileTap={{scale: 0.85}}
          initial={{x: isMounted ? 100 : 0, opacity: isMounted ? 0 : 1}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -100, opacity: 0}}
        >
          <Image
            src={uploadIcon}
            alt='Upload icon'
          />
        </motion.label>
        <motion.p
          key='upload description' 
          className='text-gray-light text-lg'
          initial={{x: isMounted ? 100 : 0, opacity: isMounted ? 0 : 1}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -100, opacity: 0}}
        >
          Drag and drop or click to upload
        </motion.p>
      </>
    )
  }

  return (
    <div className='relative z-10 h-full flex justify-center items-center'>
      <div className='flex flex-col items-center gap-3'>
        <AnimatePresence>
          {preview()}
        </AnimatePresence>
      </div>
    </div>
  )
}
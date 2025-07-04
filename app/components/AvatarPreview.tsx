'use client'

import Image from 'next/image'
import {ReactComponent as UploadIcon} from '@/public/assets/icons/icon-upload.svg'
import { useFormContext } from 'react-hook-form'
import { UserData } from '../util/schema'
import { motion, AnimatePresence, TargetAndTransition } from 'motion/react'
import { useMounted } from './hooks/useMounted'

type MotionProps = {
  initial: TargetAndTransition
  animate: TargetAndTransition
  exit: TargetAndTransition
}

const generateMotionProps = (isMounted: boolean, delay: number): MotionProps => {
  return {
    initial: {x: isMounted ? 100 : 0, opacity: isMounted ? 0 : 1},
    animate: {x: 0, opacity: 1, transition: {delay, bounce: 0.35, stiffness: 450, damping: 15, type: 'spring'}},
    exit: {x: -100, opacity: 0}
  }
}

export function AvatarPreview({path}: {path: string}) {
  const {resetField, getFieldState} = useFormContext<UserData>()
  const {invalid} = getFieldState('avatar')
  const isMounted = useMounted()

  const isPreviewOpen = path && !invalid

  const preview = () => {
    if (isPreviewOpen) return (
      <>
        <motion.div
          key='preview image'
          className='relative size-14 rounded-md overflow-hidden'
          {...generateMotionProps(true, 0)}
        >
          <Image
            src={path}
            alt='preview'
            fill
            className='object-cover'
          />
        </motion.div>
        <motion.div 
          key='buttons'
          className='flex gap-1.5 text-sm text-gray-light'
          {...generateMotionProps(true, 0.1)}
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
          tabIndex={-1}
          className='block p-2 rounded-lg bg-gray-dark border border-gray-medium-dark cursor-pointer'
          whileHover={{scale: 1.15}}
          whileTap={{scale: 0.85}}
          {...generateMotionProps(isMounted, 0)}
        >
          <UploadIcon/>
        </motion.label>
        <motion.p
          key='upload description' 
          className='text-gray-light text-lg'
          {...generateMotionProps(isMounted, 0.1)}
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
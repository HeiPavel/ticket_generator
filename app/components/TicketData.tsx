'use client'

import Image from 'next/image'
import { FormDataType } from './FormData'
import {ReactComponent as Logo} from '@/public/assets/icons/logo-mark.svg'
import {ReactComponent as GithubIcon} from '@/public/assets/icons/icon-github.svg'

export function TicketData({data}: {data: FormDataType}) {
  const {avatar, name, gitHubUsername, eventDate, ticketID} = data

  return (
    <>
      <div className='p-4 sm:p-5 tablet:p-6 grow-0 overflow-hidden basis-4/5 flex flex-col justify-between'>
        <div className='flex gap-4'>
          <div className='relative shrink-0 size-8 sm:size-10'>
            <Logo className='relative object-cover'/>
          </div>
          <div>
            <p className='text-white leading-6 text-2xl sm:text-3xl sm:leading-[30px] tablet:leading-9 tablet:text-4xl font-bold'>Coding Conf</p>
            <p className='mt-1 tablet:mt-3 text-gray-light text-sm sm:text-base tablet:text-lg'>{`${eventDate} / Austin, TX`}</p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='relative shrink-0 size-12 sm:size-16 tablet:size-20 rounded-md overflow-hidden'>
            <Image
              src={avatar}
              alt='User image'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative overflow-hidden'>
            <p className='text-lg sm:text-2xl tablet:text-[27px] text-white capitalize truncate'>{name}</p>
            <div className='flex gap-1 tablet:gap-2 items-center'>
              <div className='relative shrink-0 size-4 sm:size-5 tablet:size-6'>
                <GithubIcon className='relative object-cover'/>
              </div>
              <p className='text-gray-light text-sm sm:text-base tablet:text-lg truncate'>{gitHubUsername}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='basis-1/5 flex justify-center items-center'>
        <p className='writing-mode-vertical text-xl sm:text-2xl tablet:text-3xl font-bold text-gray-sharp'>{`#${ticketID}`}</p>
      </div>
    </>
  )
}
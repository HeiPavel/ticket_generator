'use client'

import Image from 'next/image'
import { useResponsive } from './hooks/useResponsive'
import desktop from '@/public/assets/images/background-desktop.png'
import tablet from '@/public/assets/images/background-tablet.png'
import mobile from '@/public/assets/images/background-mobile.png'
import topLine from '@/public/assets/icons/pattern-squiggly-line-top.svg'
import lines from '@/public/assets/icons/pattern-lines.svg'
import circle from '@/public/assets/icons/pattern-circle.svg'
import bottomLineDesktop from '@/public/assets/icons/pattern-squiggly-line-bottom-desktop.svg'
import bottomLineMobile from '@/public/assets/icons/pattern-squiggly-line-bottom-mobile-tablet.svg'

const breakpoints = [0, 480, 1024]

export function Background() {
  const index = useResponsive(breakpoints)

  return (
    <div className='absolute inset-0 z-0 overflow-hidden'>
      <Image
        src={index === 0 ? mobile : index === 1 ? tablet : desktop}
        alt='background image'
        className='object-cover'
        quality={100}
        fill
      />
      <Image
        src={lines}
        alt='lines svg'
        className='absolute object-cover object-left origin-left'
        fill
      />
      <Image
        src={topLine}
        alt='top line svg'
        width={100}
        height={100}
        className='absolute top-6 tablet:top-10 laptop:top-12 desktop:top-16 right-0 w-32 tablet:w-96 h-auto'
      />
      <Image
        src={circle}
        alt='circle top svg'
        width={100}
        height={100}
        className='absolute -top-4 -left-4 w-28 tablet:-top-20 tablet:left-10 tablet:w-60 h-auto'
      />
      <Image
        src={circle}
        alt='circle middle svg'
        width={100}
        height={100}
        className='absolute w-28 -right-12 top-[600px] tablet:w-60 h-auto desktop:right-60 tablet:top-96'
      />
      <Image
        src={index < 2 ? bottomLineMobile : bottomLineDesktop}
        alt='Bottom line svg'
        width={100}
        height={100}
        className='absolute left-0 bottom-0 w-80 tablet:w-[450px] laptop:w-4xl h-auto'
      />
    </div>
  )
}
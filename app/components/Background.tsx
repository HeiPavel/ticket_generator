'use client'

import Image from 'next/image'
import { useResponsive } from './hooks/useResponsive'
import desktop from '@/public/assets/images/background-desktop.png'
import tablet from '@/public/assets/images/background-tablet.png'
import mobile from '@/public/assets/images/background-mobile.png'
import {ReactComponent as TopLine} from '@/public/assets/icons/pattern-squiggly-line-top.svg'
import {ReactComponent as Lines} from '@/public/assets/icons/pattern-lines.svg'
import {ReactComponent as Circle} from '@/public/assets/icons/pattern-circle.svg'
import {ReactComponent as BottomLineDesktop} from '@/public/assets/icons/pattern-squiggly-line-bottom-desktop.svg'
import {ReactComponent as BottomLineMobile} from '@/public/assets/icons/pattern-squiggly-line-bottom-mobile-tablet.svg'

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
      <Lines className='absolute object-cover object-left origin-top-left scale-[300%] tablet:scale-200 laptop:scale-150 desktop:scale-100'/>
      <TopLine className='absolute top-6 tablet:top-10 laptop:top-12 desktop:top-16 right-0 w-32 tablet:w-96'/>
      <Circle className='absolute -top-4 -left-4 w-28 tablet:-top-20 tablet:left-10 tablet:w-60 h-auto'/>
      <Circle className='absolute w-28 -right-12 top-[600px] tablet:w-60 h-auto desktop:right-60 tablet:top-96'/>
      {
        index < 2 ? 
          <BottomLineMobile className='absolute left-0 bottom-0 w-80 tablet:w-[450px] h-auto'/> : 
          <BottomLineDesktop className='absolute left-0 bottom-0'/>
      }
    </div>
  )
}
import Image from 'next/image'
import logo from '@/public/assets/icons/logo-full.svg'

export function Header() {
  return (
    <header className='relative z-10 h-28 flex justify-center items-center'>
      <Image
        src={logo}
        alt='Logo svg'
      />
    </header>
  )
}
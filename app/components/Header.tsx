import {ReactComponent as Logo} from '@/public/assets/icons/logo-full.svg'

export function Header() {
  return (
    <header className='relative z-10 h-28 flex justify-center items-center'>
      <Logo/>
    </header>
  )
}
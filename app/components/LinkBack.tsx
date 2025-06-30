import Link from 'next/link'

export function LinkBack() {
  return (
    <Link 
      href='/'
      className='mt-16 h-12 px-6 w-full sm:w-auto flex items-center justify-center text-blue-dark bg-orange-light text-xl font-extrabold rounded-xl cursor-pointer
        border-2 border-transparent focus:border-blue-dark button-shadow-hover will-change-[filter] hover:border-blue-dark
        focus:outline-solid focus:outline-2 focus:outline-gray-medium transition-all duration-150 ease-linear animate-link-apear'
    >
      Generate New Ticket
    </Link>
  )
}
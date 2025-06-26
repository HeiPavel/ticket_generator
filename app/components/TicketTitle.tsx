'use client'

type Props = {
  name: string
  email: string
}

export function TicketTitle({name, email}: Props) {
  return (
    <div className='px-3 tablet:mt-3 tablet:max-w-[700px] laptop:max-w-4xl flex flex-col items-center text-center'>
      <h1 className='font-extrabold text-3xl leading-8 tablet:text-5xl tablet:leading-14 laptop:text-6xl laptop:leading-16 text-white laptop:text-balance'>
        Congrats,
        <span className='bg-clip-text bg-linear-to-r from-orange-gradient to-white text-transparent capitalize'>
          {` ${name}! `}
        </span>
        Your ticket is ready.
      </h1>
      <p className='mt-6 laptop:mt-10 max-w-[450px] laptop:max-w-[550px] text-xl tablet:text-xl leading-6 laptop:text-2xl text-gray-light'>
        We've emailed your ticket to 
        <span className='text-orange-medium'>
          {` ${email} `}
        </span>
        and will send updates in the run up to  the event.
      </p>
    </div>
  )
}
import {
  Html,
  Head, 
  Tailwind, 
  TailwindConfig, 
  pixelBasedPreset,
  Container,
  Section,
  Body,
  Text,
  Link 
} from '@react-email/components'
import { TextData } from './Form'
import { getEnvironmentParams } from '../util/getEnvironmentParams'

const config: TailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: {
          light: '#d2d1d6',
          medium: '#8784a4',
          mediumDark: '#4b486a',
          dark: '#342d56',
          sharp: '#8980ab',
        },
        blue: {
          default: '#07022c',
          dark: '#0c082b'
        },
        orange: {
          light: '#f57261',
          medium: '#e16151',
          gradient: '#f37362',
        }
      }
    }
  }
}

export function Email({name, gitHubUsername, eventDate, ticketID}: TextData) {
  const {protocol, baseURL} = getEnvironmentParams()
  const url = `${protocol}${baseURL}`

  return (
    <Html>
      <Head/>
        <Tailwind config={config}>
          <Body className='bg-blue-default font-sans'>
            <Container className='mx-auto pt-5 pb-12 px-2 max-w-[540px]'>
              <Text className='text-2xl text-white text-center'>
                <strong className='text-orange-light capitalize'>{name}</strong>, welcome to Coding Conf.
                <span className='block w-full text-center'>Your ticket is ready!</span>
              </Text>
              <Section 
                className='p-3 text-center'
                style={{
                  border: '2px solid #e16151',
                  borderRadius: '8px'
                }}
              >
                <Text className='inline-block'>
                  <strong className='capitalize text-3xl text-white'>Coding Conf</strong>
                </Text>
                <Text className='inline-block ml-5 text-lg text-gray-light'>
                  {`${eventDate} / Austin, TX`}
                </Text>
                <Text className='mt-2'>
                  <strong className='text-3xl text-orange-light capitalize'>{name}</strong>
                </Text>
                <Text className='text-xl text-gray-light'>
                  {gitHubUsername}
                </Text>
                <Text className='mt-4 text-3xl text-gray-sharp'>
                  {`#${ticketID}`}
                </Text>
              </Section>
              <Section className='mt-10 text-center'>
                <Link 
                  href={url}
                  className='block mx-auto w-fit py-3 px-6 bg-orange-light text-blue-dark font-bold cursor-pointer'
                  style={{
                    borderRadius: '4px'
                  }}
                >
                  Generate New Ticket
                </Link>
              </Section>
            </Container>
          </Body>
      </Tailwind>
    </Html>
  )
}
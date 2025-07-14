import { 
  Tailwind, 
  TailwindConfig, 
  pixelBasedPreset,
  Container,
  Body,
  Text 
} from '@react-email/components'
import { TextData } from './Form'

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

export function Email({name, email, gitHubUsername, eventDate, ticketID}: TextData) {
  return (
    <Tailwind config={config}>
      <Body className='px-4 py-10 bg-blue-default font-sans'>
        <Container className='p-5 border-2 border-white text-white'>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{gitHubUsername}</Text>
        </Container>
      </Body>
    </Tailwind>
  )
}
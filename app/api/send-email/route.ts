import { Resend } from 'resend'
import { FieldName, TextData } from '@/app/components/Form'
import { Email } from '@/app/components/Email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (request: Request) {
  const userData = {} as TextData, fieldNames: (FieldName | 'eventDate' | 'ticketID')[] = ['name', 'email', 'gitHubUsername', 'eventDate', 'ticketID']
  const formData = await request.formData()

  for (const field of fieldNames) {
    const value = formData.get(field)
    if (value) userData[field] = value as string
  }

  try {
    const {data, error} = await resend.emails.send({
      from: 'Ticket <eventticket@resend.dev>',
      to: userData.email,
      subject: 'Event ticket',
      react: Email({...userData})
    })

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch(error) {
    console.log('Catch', error)
    return Response.json({ error }, { status: 500 })
  }
}
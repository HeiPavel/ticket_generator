export function generateEventDate () {
  const timestamp = Date.now() + (86400 * 3000), date = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return date.toLocaleDateString('en-US', options)
}
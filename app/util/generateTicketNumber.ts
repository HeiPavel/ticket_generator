export function generateTicketNumber() {
  const number = `${Math.floor(Math.random() * 100000)}`
  return number.padStart(5, '0')
}
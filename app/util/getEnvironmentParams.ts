type DataType = {
  protocol: string
  baseURL: string
}

export function getEnvironmentParams(): DataType {
  const protocol = process.env.VERCEL_ENV === 'development' ? 'http://' : 'https://'
  const baseURL = process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_ENV === 'preview' ? process.env.VERCEL_BRANCH_URL : 'localhost:3000'

  return {
    protocol,
    baseURL: baseURL ?? ''
  }
}
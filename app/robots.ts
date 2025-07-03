import { MetadataRoute } from 'next'
import { getEnvironmentParams } from './util/getEnvironmentParams'

export default function robots(): MetadataRoute.Robots {
  const {protocol, baseURL} = getEnvironmentParams()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ticket'
    },
    sitemap: `${protocol}${baseURL}/sitemap.xml`
  }
}
import { MetadataRoute } from 'next'
import { getEnvironmentParams } from './util/getEnvironmentParams'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const {protocol, baseURL} = getEnvironmentParams()

  return [
    {
      url: `${protocol}${baseURL}`
    }
  ]
}
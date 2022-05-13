import sanityClient from '@sanity/client'
import config from './config'

export const client = sanityClient(config)

export default client

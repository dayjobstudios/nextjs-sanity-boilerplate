const SANITY_CONFIG = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-me',
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2022-05-05',
}

export default SANITY_CONFIG

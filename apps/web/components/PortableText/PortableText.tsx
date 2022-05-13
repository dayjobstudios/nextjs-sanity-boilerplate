import type { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  marks: {
    span: ({ children }) => <span className="inline-block">{children}</span>,
  },
}

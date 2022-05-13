import type { Rule } from '@sanity/types'
import { SpanRenderer } from '../components'

const pageSchema = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Heading', value: 'h2' },
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              {
                title: 'Span',
                value: 'span',
                blockEditor: {
                  render: SpanRenderer,
                },
              },
            ],
          },
        },
      ],
    },
  ],
}

export default pageSchema

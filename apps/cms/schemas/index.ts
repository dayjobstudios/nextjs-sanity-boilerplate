import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pageSchema from './page'

export const schema = createSchema({
  name: 'default',
  types: schemaTypes.concat([pageSchema]),
})

export default schema

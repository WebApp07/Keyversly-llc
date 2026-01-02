import { type SchemaTypeDefinition } from 'sanity'
import { addressType } from './addressType'
import { authorType } from './autorType'
import { blockContentType } from './blockContentType'
import { blogCategoryType } from './blogCategoryType'
import { blogType } from './blogType'
import { categoryType } from './categoryType'
import { productType } from './productType'
import { orderType } from './orderType'
import { brandType } from './brandTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [addressType, authorType, blockContentType, blogCategoryType, blogType, categoryType, productType, orderType, brandType],
}

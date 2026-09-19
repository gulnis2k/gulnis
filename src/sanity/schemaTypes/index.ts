import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { galleryType } from './galleryType'
import { testimonialType } from './testimonialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, galleryType, testimonialType],
}

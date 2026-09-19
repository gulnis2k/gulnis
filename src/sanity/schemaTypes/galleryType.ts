import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for this gallery (e.g. "Main Homepage Gallery")',
      initialValue: 'Main Homepage Gallery',
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(8).error('You can only add a maximum of 8 images to the gallery.'),
      description: 'Upload up to 8 images to display in the gallery section.',
    }),
  ],
})

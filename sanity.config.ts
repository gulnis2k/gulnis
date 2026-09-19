import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { projectId, dataset } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: '2024-01-01'}),
  ],
})

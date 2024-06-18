// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';

import { schemaTypes } from './schemas';

const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000';


export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: 'h8zbt27a',
  dataset: 'visual-editing',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

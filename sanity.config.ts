// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';

const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000';


export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: 'h8zbt27a',
  dataset: 'visual-editing',
  plugins: [
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
    structureTool(),
  ],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});

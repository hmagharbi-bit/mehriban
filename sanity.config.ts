import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './src/sanity/schema';

export default defineConfig({
    name: 'default',
    title: 'Mehribān STORE',
    projectId: 'o9mn0wmLF',
    dataset: 'production',
    basePath: '/studio',
    plugins: [deskTool()],
    schema: schema,
});
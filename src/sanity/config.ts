import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './schema';

export default defineConfig({
    name: 'default',
    title: 'Mehribān STORE',
    projectId: '24auu4zh',
    dataset: 'production',
    basePath: '/studio',
    plugins: [deskTool()],
    schema: schema,
});
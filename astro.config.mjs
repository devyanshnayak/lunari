import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	site: 'https://lunari.devyansh.site',
	redirects: {
		'/blog/welcome': '/blog/wellcome',
	},
	integrations: [
		sitemap(),
		robotsTxt(),
	],
});

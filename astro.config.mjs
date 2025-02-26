// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	// 根据您的部署环境设置基础路径
	// 如果部署在根目录，使用 '/'
	// 如果部署在子目录，使用 '/子目录名/'
	site: 'https://ceciliahome.com',
	base: '/',

	integrations: [react(), icon()],

	vite: {
		plugins: [tailwindcss()],
		build: {
			// 确保资源正确处理
			assetsInlineLimit: 0,
		},
	},
});

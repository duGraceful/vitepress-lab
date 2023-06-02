import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "随心记",
	description: "A VitePress Site",
	// 根路径
	base: '/vitepress-mondaylab/',
	themeConfig: {
		logo: "avatar.png",
		// https://vitepress.dev/reference/default-theme-config
		nav,
		// 右上角github图标
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/vuejs/vitepress'
			}
		],
		// 侧边栏
		sidebar,
		// 锚地定位
		outline: {
			// h2 - h6 的标题
			level: [2, 6],
			// 
			label: '目录'
		},
		// 本地搜索
		search: {
			provider: 'local'
		},
		// 国际化 i18n
		i18nRouting: true,
	}
})

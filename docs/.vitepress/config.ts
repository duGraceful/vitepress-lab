import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  // 根路径
  base: '/vitepress-mondaylab/',
  themeConfig: {
    logo: "../public/avatar.png",
    // https://vitepress.dev/reference/default-theme-config
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 右上角github图标
    ],
    sidebar,
    // 锚地定位
    outline: {
      level: [2, 6],
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

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "iKan影视",
  description: "全网最新影视剧在线观看",
  appearance: "dark",
  themeConfig: {
    logo: '/72x72.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '更新记录', link: '/windows' }
    ],

    sidebar: [
      {
        text: '客户端类型',
        items: [
          { text: 'Windows', link: '/windows' },
          { text: 'Android', link: '/android' }
        ]
      }
    ],
  }
})

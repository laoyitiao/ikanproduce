import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,
  title: "iKan影视",
  description: "全网最新影视剧在线观看",
  appearance: "dark",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
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

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Jun'
    }
  },
})

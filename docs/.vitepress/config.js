module.exports = {
  title: 'Cute',
  base: '/cute.github.io/',
  description: 'Just playing around',
  themeConfig: {
    siteTitle: "Cute",
    logo: "/logo.png",
    nav: [
      { text: 'Weekly', link: '/weekly/issue-247' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      { text: "baidu", link: "https://www.baidu.com" },
      { text: "ChatGPT", link: "https://chat.openai.com/chat" },
    ],

    sidebar: [
      {
        text: 'Weekly',
        collapsed: true,
        items: [
          { text: 'weekly', link: '/weekly/issue-247' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/guide1' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
}
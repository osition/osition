import {DefaultTheme, defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Osition",
  titleTemplate: "Osition Media Server",
  description: "A Free Software Media System",
  srcDir: 'src/',
  // base: "/",
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/osition.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/osition.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/osition/osition-server' }
    ],
    search: {
      provider: "local",
    },
    nav: nav(),
    sidebar: {
      '/guide/': { 'base': '/guide/', items: sidebarGuide() },
      '/config/': { 'base': '/config/', items: sidebarConfig() },
    },
    footer: {
      copyright: "Copyright © 2024-present Osition",
    },
  }
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: '/guide/what-is-osition/',
      activeMatch: '/guide/',
    },
    {
      text: "Config",
      link: '/config/',
      activeMatch: '/config/',
    },
    {
      text: "Repos",
      items: [
        { text: "Osition-Website", link: "https://github.com/osition/osition.github.io", target: "_blank" },
        { text: "Osition-Server", link: "https://github.com/osition/osition-server", target: "_blank" },
        { text: "Osition-Web", link: "https://github.com/osition/osition-web", target: "_blank" },
      ]
    }
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is Osition?", link: 'what-is-osition' },
        { text: "Getting Started", link: 'getting-started' },
      ],
    },
    { text: "Configuration", base: '/config/', link: ".", },
  ];
}

function sidebarConfig(): DefaultTheme.SidebarItem[] {
  return [];
}

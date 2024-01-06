import {DefaultTheme, defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Jarklin",
  titleTemplate: "Jarklin Media Server",
  description: "A Free Software Media System",
  srcDir: 'src/',
  // base: "/",
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/jarklin.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/jarklin.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jarklin/jarklin' }
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
      copyright: "Copyright © 2024-present Jarklin",
    },
  }
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: '/guide/what-is-jarklin',
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
        { text: "Jarklin-Website", link: "https://github.com/jarklin/jarklin.github.io", target: "_blank" },
        { text: "Jarklin-Server", link: "https://github.com/jarklin/jarklin", target: "_blank" },
        { text: "Jarklin-WebUI", link: "https://github.com/jarklin/jarklin-web", target: "_blank" },
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
        { text: "What is Jarklin?", link: 'what-is-jarklin' },
        { text: "Getting Started", link: 'getting-started' },
      ],
    },
    { text: "Configuration", base: '/config/', link: ".", },
  ];
}

function sidebarConfig(): DefaultTheme.SidebarItem[] {
  return [];
}

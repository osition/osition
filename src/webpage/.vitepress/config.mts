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
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/jarklin.svg'}],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/jarklin.svg',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/jarklin/jarklin#readme'}
        ],
        search: {
            provider: "local",
        },
        nav: nav(),
        sidebar: {
            '/guide/': {'base': '/guide/', items: sidebarGuide()},
            '/config/': {'base': '/config/', items: sidebarConfig()},
        },
        footer: {
            copyright: "Copyright © 2024-present Jarklin",
        },
    },
    // markdown: {
    //     toc: {
    //         level: [2, 3],
    //     }
    // }
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
            link: '/config/config-options',
            activeMatch: '/config/',
        },
        {
            text: "Repos",
            items: [
                {text: "Jarklin-Website", link: "https://github.com/jarklin/jarklin.github.io", target: "_blank"},
                {text: "Jarklin-Server", link: "https://github.com/jarklin/jarklin", target: "_blank"},
                {text: "Jarklin-WebUI", link: "https://github.com/jarklin/jarklin-web", target: "_blank"},
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
                {
                    text: "Installation",
                    //link: '/guide/installation/',
                    collapsed: false,
                    items: [
                        { text: "Info", link: "installation/" },
                        { text: "Archive", link: "installation/archive" },
                        { text: "Pip", link: "installation/pip" },
                        { text: "System Package", link: "installation/system-package" },
                        { text: "Docker", link: "installation/docker" },
                    ]
                },
                { text: "Wizard", link: "wizard/" },
            ],
        },
        {
            text: "Other",
            items: [
                { text: "Commands", link: "commands" },
                { text: "File-Structure", link: "file-structure/" },
            ]
        },
        { text: "Configuration", base: '/config/', link: "config-options" },
    ];
}

function sidebarConfig(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Config",
            collapsed: false,
            items: [
                { text: "Options", link: "config-options" },
                { text: "Example", link: "config.yaml" },
            ],
        },
        {
            text: "Behind a Proxy",
            collapsed: false,
            items: [
                { text: "Info", link: "behind-a-proxy/" },
                { text: "Nginx", link: "behind-a-proxy/nginx" },
            ]
        }
    ];
}

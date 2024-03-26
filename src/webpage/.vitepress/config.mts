import {defineConfig} from 'vitepress'
import nav from "./nav";
import sidebar from "./sidebar";

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
        // favicon
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
        nav: nav,
        sidebar: sidebar,
        footer: {
            copyright: "Copyright © 2024-present Jarklin",
        },
    },
    ignoreDeadLinks: "localhostLinks",
    // markdown: {
    //     toc: {
    //         level: [2, 3],
    //     }
    // }
});

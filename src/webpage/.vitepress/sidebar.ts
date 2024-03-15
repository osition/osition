import {DefaultTheme} from "vitepress";

const sidebarGuide: DefaultTheme.SidebarItem[] = [
    {
        text: "Introduction",
        items: [
            { text: "What is Jarklin?", link: 'what-is-jarklin' },
            {
                text: "Installation",
                link: 'installation/',
                items: [
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
]

const sidebarConfig: DefaultTheme.SidebarItem[] = [
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
]

export default <DefaultTheme.Sidebar>{
    '/guide/': {'base': '/guide/', items: sidebarGuide},
    '/config/': {'base': '/config/', items: sidebarConfig},
}

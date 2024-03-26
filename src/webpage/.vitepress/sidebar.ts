import {DefaultTheme} from "vitepress";

const sidebarGuide: DefaultTheme.SidebarItem[] = [
    {
        text: "Introduction",
        items: [
            { text: "What is Jarklin?", link: 'what-is-jarklin' },
            { text: "System Requirements", link: 'requirements' },
            { text: "External Dependencies", link: 'external-dependencies' },
            {
                text: "How does Jarklin work?",
                link: 'how-does-jarklin-work/',
                items: [
                    { text: "File-Structure", link: "how-does-jarklin-work/file-structure" },
                ]
            },
        ],
    },
    {
        text: "Installation",
        link: "installation/",
        items: [
            { text: "Wizard", link: "wizard/" },
            { text: "Archive", link: "installation/archive" },
            { text: "Docker", link: "installation/docker" },
            { text: "Pip", link: "installation/pip" },
            { text: "System Package", link: "installation/system-package" },
        ],
    },
    {
        text: "Other",
        items: [
            { text: "Commands", link: "commands" },
        ]
    },
    { text: "Configuration", base: '/config/', link: "config-options" },
]

const sidebarConfig: DefaultTheme.SidebarItem[] = [
    {
        text: "Config",
        link: "config/",
        items: [
            { text: "Options", link: "config/config-options" },
            { text: "Example", link: "config/config-yaml" },
        ],
    },
    {
        text: "Behind a Proxy",
        link: "behind-a-proxy/",
        items: [
            { text: "Nginx", link: "behind-a-proxy/nginx" },
        ]
    }
]

export default <DefaultTheme.Sidebar>{
    '/guide/': {'base': '/guide/', items: sidebarGuide},
    '/config/': {'base': '/config/', items: sidebarConfig},
}

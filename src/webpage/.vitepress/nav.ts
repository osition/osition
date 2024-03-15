import {DefaultTheme} from "vitepress";

export default <DefaultTheme.NavItem[]>[
    {
        text: "Screenshot",
        link: '/screenshot',
        activeMatch: '/screenshot',
    },
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
]

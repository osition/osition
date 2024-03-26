import {DefaultTheme} from "vitepress";

export default <DefaultTheme.NavItem[]>[
    {
        text: "Screenshots",
        link: '/screenshots',
        activeMatch: '/screenshots',
    },
    {
        text: "Quick Start",
        link: '/quick-start/',
        activeMatch: '/quick-start/',
    },
    {
        text: "Info",
        link: '/info/what-is-jarklin',
        activeMatch: '/info/',
    },
    {
        text: "Config",
        link: '/config/config/config-options',
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

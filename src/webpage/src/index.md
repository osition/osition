---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: false

hero:
  name: "Jarklin"
  text: "A Free Software Media System"
  tagline: Currently under Development and not available
  actions:
    - theme: brand
      text: Guide
      link: /guide/what-is-jarklin
    - theme: alt
      text: Config
      link: /config/
  image:
    src: /jarklin.svg
    width: 512
    height: 512

features:
  - title: Free
    icon: 💵
    details: This Software is open source which means you don't have to pay to use it.
        Jarklin would still appreciate if you could donate, but such a system is not available yet.
  - title: Protected
    icon: 🔒
    details: Media served with Jarklin is Protected with a user-system.
        This prevents unwanted access to your media.
  - title: Easy to Set-Up
    icon: ⚙️
    details: Hopefully soon Jarklin can be installed over docker or with a .deb package file.
---


<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'


const members = [
    {
        avatar: 'https://www.github.com/PlayerG9.png',
        name: 'PlayerG9',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/PlayerG9' },
        ]
    },
]
</script>

<!--
<div style="height: 25px;" />

<h1 style="text-align: center;">Team</h1>

<VPTeamMembers size="small" :members="members" />
-->

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Jarklin Team
    </template>
    <template #lead>
      The developers of Jarklin are proud to be part of the project.
      Members with exceptional contribution are featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: 'Documentation',
      children: [
        '/general.md',
      ],
    },
    {
      text: 'Changelog',
      children: [
        '/changelog/0.1.md',
      ],
    },
    {
      text: 'Legal',
      children: [
        '/privacy.md',
        '/terms.md',
      ],
    },
  ],
};

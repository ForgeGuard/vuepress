import { defaultTheme, defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import markdownItFootnote from 'markdown-it-footnote';
import { navbarEn } from './config/navbar/en';
import { sidebarEn } from './config/sidebar/en';
import { head } from './config/head';

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ForgeGuard',
      description: 'ForgeGuard is a security system service for Minecraft Forge Modifications.',
    }
  },
  theme: defaultTheme({
    contributors: false,
    docsDir: 'docs',
    lastUpdated: true,
    logo: '/logo.png',
    locales: {
      '/': {
        // sidebar: sidebarEn,
        navbar: navbarEn,
      },
    }
  }),
  plugins: [
    searchPlugin({
    }),
    shikiPlugin({
      theme: 'dark-plus',
    }),
  ],
  extendsMarkdown: (md) => {
    md.use(markdownItFootnote)
  }
});

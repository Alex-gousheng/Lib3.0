import { defineConfig } from 'vitepress';
import { nav } from './utils/nav';
import { sidebar } from './utils/sidebar';

/**
 * 更多配置项参考：https://vitepress.vuejs.org/config/app-configs.html
 */

const config = defineConfig({
  base: '/lib3.0/',
  title: 'Lib',
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Lib',
    logo: 'https://img.yipic.cn/thumb/42da8c3a/02394bd8/5769f7e1/6d185ec9/big_42da8c3a02394bd85769f7e16d185ec9.png',
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Alex-gousheng',
      },
    ],
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/Alex-gousheng/Lib3.0/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
  },
});

export default config;

/*
 * @Descripttion: 
 * @version: 3.x.x
 * @Author: canguang.liu
 * @Date: 2021-01-12 19:20:23
 * @LastEditors: canguang.liu
 * @LastEditTime: 2021-11-02 10:18:59
 */
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "BlueTone's blog",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  // base: '/zhiliangBlog/', // 格式：'/<仓库名>/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
};

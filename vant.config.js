module.exports = {
  name: 'mango-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/mango-ui/',
    },
  },
  site: {
    title: 'mango-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    hideSimulator: true, // 所有页面都不显示
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'button',
            title: '按钮',
          },
        ],
      },
    ],
  },
};

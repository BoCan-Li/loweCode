const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel:{
    // 支持装饰器模式语法
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }]
    ]
  }
};
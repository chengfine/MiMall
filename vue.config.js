module.exports = {  // 导出一个对象
    devServer: {    // 必须是devServer, 本地开发服务器相关的信息
        host: 'localhost',  // 主机
        port: 8095,     // 端口号
        proxy: {    // 代理
            '/api': {
                target: 'http://mall-pre.springboot.cn',    // 代理的目标
                changeOrigin: true,    // 是否将主机头的原点更改为目标的URL地址
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // publicPath: '/app',
    // outputDir: 'dist',
    // indexPath: 'index.html',
    // lintOnSave: false,
    productionSourceMap: true,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }

}
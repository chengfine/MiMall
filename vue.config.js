module.exports = {  // 导出一个对象
    devServer: {    // 必须是devServer
        host: 'localhost',  // 主机
        port: 8095,     // 端口号
        proxy: {    // 代理
            '/activity': {
                target: 'https://www.imooc.com',    // 代理的目标
                changeOrigin: false,    // 是否将主机头的原点更改为目标的URL地址
            }
        }
    }
}
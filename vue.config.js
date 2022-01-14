module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                //安装包的配置项
                nsis: {},
                asar: false,
                //下载更新的url
                publish: [{
                    "provider": "generic",
                    "url": "http://101.34.165.99:8088"
                }],
            }
        }
    }
}

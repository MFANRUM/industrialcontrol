module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                nsis: {},
                asar: false,
                publish: [{
                    "provider": "generic",
                    "url": "http://101.34.165.99:8088"
                }],
            }
        }
    }
}

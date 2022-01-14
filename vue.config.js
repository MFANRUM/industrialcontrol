module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                nsis: {},
                asar: false,
                publish: ['github'],
            }
        }
    }
}

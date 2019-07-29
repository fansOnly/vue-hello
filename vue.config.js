module.exports = {
	chainWebpack: config => {
		config.plugin('define').tap(args => {
			args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL);
			return args;
		})
	},
    baseUrl: './',
    outputDir: 'dist',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: true,
    transpileDependencies: [],
    productionSourceMap: false,
}

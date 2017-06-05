({
	appDir:"./",
	dir:"./dist/static",
	urlArgs: 'version=3',
	baseUrl:"./src/js/",
	mainConfigFile: './src/js/config.js',
	modules:[
		{
			name:"index",
			exclude:['zepto','underscore','swiper']
		},
		{
			name:"rank",
			exclude:['zepto','underscore']
		},
		{
			name:"myzone",
			exclude:['zepto','underscore']
		},
		{
			name:"detail",
			exclude:['zepto','underscore']
		},
	],
	keepBuildDir: true,//不会全部重新打包
	skipDirOptimize: true,	
	fileExclusionRegExp:/^(\.\s+|r.js|build.js|config.rb|server.js|\.?sass(-cache))/,
	optimizeCss:"standard",
	removeCombined:true,
	optimize:"uglify2",//如果none则不压缩
	findNestedDependencies: true
})
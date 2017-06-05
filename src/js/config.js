require.config({
	//指定目录
	// baseUrl:'../js',//baseUrl是基於.html也main的相對路徑
	//配置各种库的基本信息
	paths:{
		'underscore':'lib/underscore',
		'zepto':'lib/zepto',
		'swiper':'lib/swiper',
		'text':'text',
		'header':'header',
		'banner':'banner',
		'index-list':'index-list',
		'footer-nav':'footer-nav'
	},
	//配置输出
	shim:{
		zepto:{
			exports:"$"
		},
		underscore:{
			exports:"_"
		}
	}
})
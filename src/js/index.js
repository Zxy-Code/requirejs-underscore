
require(['zepto','header','banner','index-list','footer-nav'], function ($,header,banner,list,footer) {
	// require('../src/libs/jquery.min.js');
	// require('../src/libs/underscore-min.js');
	// var text = require('../src/libs/text.js');
	new header.headRender();

	//banner推荐位
	var ele = $('.banner');
	var url = '../../data/banner.json';
	new banner(ele,url);

	//list列表
	var ele = $('.content');
	var url = '../../data/list.json';
	new list(ele, url);

	//footer-nav
	new footer('movies');
})
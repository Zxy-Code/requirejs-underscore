define(['zepto','header','footer-nav','index-list'],function($,header,footer,list){

	//header头部渲染
	new header.headRender();

	//list列表
	var ele = $('.content');
	var url = '../../data/rank.json';
	new list(ele, url);

	//footer-nav
	new footer('sort');
})
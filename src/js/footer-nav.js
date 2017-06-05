define(['zepto','underscore','text!../components/footer-nav.tpl'],function($,_,footer){
	///////////
	//option参数说明
	//movies 电影页
	//sort 排行榜页
	//mine 个人中心页 //
	///////////
	var footerNav = function(option){
		this.ele = $('body');
		this.menu = option || 'movies';
		this.init();
	}

	footerNav.prototype.init = function(){
		// var href = location.pathname;
		// var reg = '/^\/[a-Z,1-9]+[\.]$/';
		// var hrefReg = new RegExp(reg);

		// var hrefName = s
		// 
		this.render();
	}

	footerNav.prototype.render = function(){
		var tpl = footer;
		tpl = _.template(tpl,{variable:'data'})({
			data:this.menu
		});
		this.ele.append(tpl);
	}

	return footerNav;
})
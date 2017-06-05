define(['zepto','text!../components/banner.tpl','swiper'],function($,banner_tpl,swiper){
	var banner = function (banner, url, type) {
		this.ele = banner;//要添加的轮播图的标签
		this.url = url;// 轮播图的接口请求地址
		this.type = type || 'get';//接口请求额方法类型
		this.fetch();
	}

	banner.prototype.init = function () {
		 var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction:false
        });
	}

	banner.prototype.fetch = function () {
		var that = this
		$.ajax({
			url:that.url,
			type:that.type,
			dataType:'json',
			success:function (data) {
				var _data = data;
				if (_data.success === 1) {
					that.render(_data.data);
				}
			}
		})
	}

	banner.prototype.render = function (data) {
		var tpl = banner_tpl;
		var _data = data;
		if (_data.length > 0) {
			var tpl = _.template(tpl)({
				data: _data
			})
			this.ele.html(tpl);
			this.init();
		}
	}

	return banner
})
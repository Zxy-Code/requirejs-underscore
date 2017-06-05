define(['underscore','zepto','text!../components/list.tpl'],function(_,$,list_tpl){
	var list = function(ele, url, data, type){
		this.ele = ele;
		this.url = url;
		this.data = data || '';
		this.type = type || 'get';
		this.init();
	}
	list.prototype.init = function(){
		$(document).on('click','.iLike',function(){
			console.log(2)
			console.log(this)
			$(this).toggleClass('active');
		})
		this.fetch();
	}

	list.prototype.fetch = function(){
		var that = this ;
		$.ajax({
			url: that.url,
			data: that.data,
			type: this.type,
			dataType: 'json',
			success: function(data) {
				var _data = data;
				if (_data.success === 1) {
					that.render(_data);
				}
			},
			error: function () {

			}
		})
	}

	list.prototype.render = function (data){
		var _data = data;
		var tpl = list_tpl;
		console.log(2)
		console.log(_data)
		var tpl = _.template(tpl, {variable: 'data'})({
			data:_data
		});
		this.ele.html(tpl);
	}

	return list;
})
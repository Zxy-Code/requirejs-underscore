define(['text','zepto','underscore','text!../components/header.tpl'],function(text,$,_,header_tpl){
	var headRender = function (){
		this.init();
	}
	headRender.prototype.init = function(){
		//初始化时需要将模板header.tpl作为参数加入，否则render函数取不到header_tpl
		// console.log(header_tpl)
		this.render(header_tpl);
	}
	headRender.prototype.render = function(header_tpl) {//如果不传入，直接在函数中取可以取的到，但是有_.template(header_tpl) 的存在，此时取header_tpl时header_tpl还没有被赋值（‘text!../components/header.tpl’是个异步）
		//初始化模板
		// console.log(header_tpl);
		var header_tpl = _.template(header_tpl)({
			person:{
				name:'Han MeiMei'
			}
		})
		$("header").html(header_tpl);
	}
	return {
		headRender:headRender
	};
})
define(['zepto','header','index-list'],function($,header,list){
	//header加载
	new header.headRender();

	//展示全部
	var showAllBool = false;
	var showAll = function(){
		if(showAllBool){
            showAllBool = false;
            $('.detail-content .content-main').css('max-height','132px');
            $('#content-arrow').css({
            	transform: "rotate(360deg)"
            })
            $('.content-main p').addClass('active');
        }else{
            showAllBool = true;
            $('.detail-content .content-main').css('max-height','none');
            $('#content-arrow').css({
            	transform: "rotate(180deg)"
            });
            $('.content-main p').removeClass('active');
        }
	}
	$('.arrow-icon,.content-main').on('click',showAll)

	//返回
	$('.titleNav .goback').on('tap',function(){
		location.href = history.go(-1);
	})

	//大家都在看
	var url = '../../data/detail.json';
	var ele = $('.other-movies');

	new list(ele,url);
});
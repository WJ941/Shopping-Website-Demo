$(function(){
	var slide_btns=$(".slide_button span");
	var slide_list=$(".slide_list");
	var prev=$("#prev");
	var next=$("#next");
	//下方按钮栏的hover功能
	slide_btns.hover(function(){
		showImg($(this).attr("index"));
	});
	function showImg(index){
		$(".slide_list img").eq(index).fadeIn()
			.siblings().fadeOut();
		$(".slide_button span").eq(index).addClass("on")
			.siblings().removeClass("on");
	}
	showImg(0);
	var setCarousel =function (){
		this.carousel=setInterval(displayLoop(),2000);	
	};
	setCarousel();
	function displayLoop(index){
		var i=index || 1;
		return function(){
			if(i===5){i=0;}
			showImg(i);
			i++;
		};
	};
	//左右箭头的前后功能
	prev.click(function(){

		var cur=$(".slide_button .on").attr("index");
		if(cur===0){
			cur=4;
		}else{
			cur--;
		}
		showImg(cur);
		
	});
	next.click(function(){
		clearInterval(carousel);
		var cur=$(".slide_button .on").attr("index");
		if(cur===4){
			cur=0;
		}else{
			cur++;
		}
		showImg(cur);
	});
})
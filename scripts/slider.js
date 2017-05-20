$(function(){
	var slide_btns=$(".slide_button span");
	var slide_list=$(".slide_list");
	var prev=$("#prev");
	var next=$("#next");
	//下方按钮栏的hover功能
	slide_btns.hover(function(){
		slide_btns.removeClass("on");
		$(this).addClass("on");
		var marginDistance=$(this).attr("index")*-550;
		slide_list.css("margin-left",function(){
			return marginDistance;
		});
	});
	//左右箭头的前后功能
	prev.click(function(){
		var curSpan=slide_btns.filter(".on");
		var curIndex=curSpan.attr("index");
		slide_btns.removeClass("on");
		if(curIndex==0){
			slide_btns.filter(":last").addClass("on");
			slide_list.css("margin-left","-2200px")
		}
		curSpan.prev().addClass("on");
		slide_list.css("margin-left",function(){
			return curSpan.prev().attr("index")*-550;
		});
	});
	next.click(function(){
		var curSpan=slide_btns.filter(".on");
		var curIndex=curSpan.attr("index");
		slide_btns.removeClass("on");
		if(curIndex==4){
			slide_btns.filter(":first").addClass("on");
			slide_list.css("margin-left","0px")
		}
		curSpan.next().addClass("on");
		slide_list.css("margin-left",function(){
			return curSpan.next().attr("index")*-550;
		});
	});
})
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
		var cur=slide_btns.eq(index);
		cur.addClass("on")
			.siblings().removeClass("on");
		slide_list.css("margin-left",function(){
			return index*-550;
		});
	}
	//自动轮播
	var carousel=setInterval(function(){
		var index=1;
		return function(){
			if(index===5){index=0;}
			showImg(index);
			index++;
		};
	}(),2000);
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
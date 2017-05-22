$(function(){
	var nav_anchor=$(".navigator li");
	nav_anchor.hover(function(){
		$(this).find("div.subitem").show();
	},function(){
		$(this).find("div.subitem").hide();
	});
	// nav_anchor.next().mouseover(function(){
	// 	$(this).show();
	// })
	$("#search_goods").focus(function(){
		if($(this).val()==="商品名称"){
			$(this).val("");
		}
	})
	.blur(function(){
		if($(this).val()===""){
			$(this).val("商品名称");
		}
	});

});
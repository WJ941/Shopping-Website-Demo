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
});
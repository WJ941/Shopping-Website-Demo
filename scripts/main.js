$(function(){
	var nav_anchor=$(".navigator li");
	nav_anchor.hover(function(){
		$(this).find("div.subitem").toggle();

	});
	// nav_anchor.next().mouseover(function(){
	// 	$(this).show();
	// })
})
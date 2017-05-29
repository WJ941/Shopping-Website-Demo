$(function(){
	var src=[];
	src=$("#goods_img img").attr("src").split("_");
	src.pop();
	src.push("big.jpg");
	src=src.join("_");
	$("#goods_img img").attr("data-zoom-image",src)
	.elevateZoom();
});
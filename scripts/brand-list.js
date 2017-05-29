$(function(){
	var categry=$("#cata_chos a");
	categry.click(function(){
		$("#cata_chos li").removeClass("tabOn");
		$(this).parent().addClass("tabOn");
		var index=$(this).attr("index");
		$("#brand_list").css("margin-left",function(){
			return index*-820; 
		});
		return true;
	});
});
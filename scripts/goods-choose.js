$(function(){
	var amount=$("#amount_select").val(),
		size="未选择",
		color="未选择",
		rating=0;
	$("#amount_select").click(function(){
		var that=this;
		amount=this.value;
		$("#total_price").text(amount*$(".promo-price").text());
	});
	$("#size-select li").click(function(){
		$(this).addClass("orange")
				.siblings().removeClass("orange");
		size=$(this).text();
		$(this).parent().parent().prev().text(size);
	});
	$("#color-select li").click(function(){
		$(this).css("border-color","orange")
				.siblings().css("border-color","rgba(160,160,160,0.6)");
		// 替换对应的大图
		var src=$(this).find("img").attr("src");
		var pro_color=src.split(".");
		$("#goods_img img").attr("src",function(){
			return pro_color[0]+"_one_small.jpg";
		});
		// 显示隐藏对应的thumb images
		var spec_color=pro_color[0].split("/").pop();
		$("#thumb_imgs li").filter(function(){
			return $(this).hasClass(spec_color);
		}).css("display","inline-block");
		$("#thumb_imgs li").filter(function(){
			return !$(this).hasClass(spec_color);
		}).hide();

		color=$(this).attr("color");
		$(this).parent().parent().prev().text(color);
	});
	$("#rating li").click(function(){
		rating=$(this).attr("index");
		var that=$(this);
		$(this).parent().css("background-position-y",function(){
			return that.attr("index")*-16;
		})
	})
	.mouseover(function(){
		var that=$(this);
		$(this).parent().css("background-position-y",function(){
			return that.attr("index")*-16-80;
		})
	})
	.mouseout(function(){
		var that=$(this);
		$(this).parent().css("background-position-y",function(){
			return rating*-16;
		})	
	});

	// 点击购买的模态窗口
	$("#addToCartBtn").click(function(){
		var $productname=$("#goods_choose h3:first").text();	
		$(".tips-line").html("您购买的产品是："+$productname+"; 尺寸是："+size+"; 颜色是："+color+
			"; 数量是："+amount+"；总价是："+$("#total_price").text());
		$("#addtoCart").modal();	
	});

	// click thumb_img to display corresponding small img
	$("#thumb_imgs a").click(function(){
		var src=$(this).find("img").attr("src").split(".").shift().concat("_small.jpg");
		$("#goods_img img").attr("src",src);
	});
	// 产品属性，产品尺码表，产品介绍切换 
	$("#detail_btns li").click(function(){
		var index=$("#detail_btns li").index(this);
		$(this).parent().next().find("li").eq(index).show().siblings().hide();
	});

	// 点击查看清晰图片
	$("#sharper_img a").click(function(){
		var src=[];
		src=$("#goods_img").find("img").attr("src").split("_");
		src.pop();
		src.push("big.jpg");
		src=src.join("_");
		$("#sharper-img-dialog").find("img").attr("src",src);
		$("#sharper-img-dialog").modal();
	});


})
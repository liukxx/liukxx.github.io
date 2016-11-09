//将所有子项隐藏
$(".baseUI>li>ul").slideUp(500);
//给夫项绑定点击事件
$(".baseUI>li>a").off("click");
$(".baseUI>li>a").on("click",function(){
	$(".baseUI>li>ul").slideUp(500);
	$(this).next().slideDown(500);
})
//模拟点击事件
$(".baseUI>li>a").eq(0).trigger("click");

//点击时变色
$(".baseUI>li>ul>li").on("click",function(){
		// alert("i");
	$(".baseUI>li>ul>li").removeAttr("class");
	$(this).attr("class","current");
})


$(function(){
	var offsetAmount = 180;

	$("body").foundation();
	
	$(".mltree-service").click(function(e){
		e.stopPropagation();
		$("html, body")
			.animate({scrollTop:$(this).parent().offset().top - offsetAmount});
		$(".focus").removeClass("focus");
		$(this).addClass("focus");
	});

	$(document).click(function(){
		$(".focus").removeClass("focus");
	});

	$("a[href^='#']").click(function(e){
		e.preventDefault();
		$("html, body")
			.animate({scrollTop:$($(this).attr("href")).offset().top - offsetAmount});
	});
});
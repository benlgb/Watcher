;(function(window, undefined){
	$(function(){
		$("#identity").delegate("li", "click", function(){
			$("#identity").find("li")
			.eq(0).html($(this).html());
		}).on("blur", function(){
			$(this).removeClass("hidden");
		}).click(function(){
			if($(this).hasClass("hidden")){
				$(this).removeClass("hidden");
			}else{
				$(this).addClass("hidden");
			}
		});
	});
})(window);
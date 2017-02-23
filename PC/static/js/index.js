;(function(window, undefined){
	$(function(){
		$("#search-button").click(function(){
			var name = $("#search-box").val();
			if(name == ""){
				alert("请输入学生姓名");
			}else{
				window.location.href = "search.html?name=" + name;
			}
		});
		$("#search-box").keypress(function(event){
			if(event.keyCode == 13 || event.keyCode == 108){
				$("#search-button").click();
			}
		});
	});
})(window);
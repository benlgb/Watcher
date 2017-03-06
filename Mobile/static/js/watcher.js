;(function(window, undefined){
	$(function(){
		new Vue({
			el: ".content",
			data: {
				alert: false,
				submit: false,
				name: ""
			},
			methods: {
				onSubmit: function(){
					if(this.alert){
						if(this.submit){
							location.href = "watcher_test.html";
						}
					}else{
						this.alert = true;
						$("#name").blur();
					}
				}
			}
		});
	});
})(window);
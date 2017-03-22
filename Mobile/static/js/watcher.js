;(function(window, undefined){
	var vm = new Vue({
		el: "#content",
		data: {
			name: "",
			alert: false,
			isAgree: false,
			radio: ""
		},
		computed: {
			isAgree: function(){
				return this.radio == "true";
			}
		},
		methods: {
			submit: function(){
				if(this.isAgree){
					
				}else{
					this.alert = true;
				}
			},
			closeAlert: function(){
				this.alert = false;
			}
		}
	})
	// $(function(){
	// 	new Vue({
	// 		el: ".content",
	// 		data: {
	// 			alert: false,
	// 			submit: false,
	// 			name: ""
	// 		},
	// 		methods: {
	// 			onSubmit: function(){
	// 				if(this.alert){
	// 					if(this.submit){
	// 						location.href = "watcher_test.html";
	// 					}
	// 				}else{
	// 					this.alert = true;
	// 					$("#name").blur();
	// 				}
	// 			}
	// 		}
	// 	});
	// });
})(window);
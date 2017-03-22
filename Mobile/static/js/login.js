;(function(window, undefined){
	var vm = new Vue({
		el: "#main",
		data: {
			identity: {
				isShow: false,
				index: 0,
				identities: [
					"学生", "教师", "家属", "医生",
					"辅导员", "中心咨询师", "学院书记",
					"其他教职工", "领导", "超级管理员"
				]
			}
		},
		computed: {
			selected: function(){
				var identity = this.identity,
					index = identity.index;
				if (index >= 0) {
					return identity.identities[index];
				} else {
					return "请选择身份";
				}
			},
			mode: function(){
				var mode = 0;
				switch(this.identity.index){
					case 0:
						mode = 0;
						break;
					case 4:
					case 5:
					case 6:
					case 8:
					case 9:
						mode = 1;
						break;
					case 1:
					case 2:
					case 3:
					case 7:
						mode = 2;
						break;
					default:
						mode = 0;
						break;
				}
				return mode;
			}
		},
		methods: {
			toggleIdentity: function(isShow){
				if(isShow !== true && isShow !== false){
					this.identity.isShow = !this.identity.isShow;
				} else {
					this.identity.isShow = isShow;
				}
			},
			changeIdentity: function(index){
				if (this.identity.isShow) {
					var identity = this.identity;
					this.$set(identity, 'index', index);
					this.identity.isShow = false;
				} else {
					this.identity.isShow = true;
				}
			},
			submit: function(event){
				var formdata = new FormData(event.target);
				for(var entry of formdata.entries()){
					if (entry[1] == ""){
						alert("Please enter " + entry[0]);
						return
					}
				}
				this.$http.post('/Index/user', formdata).then(function(response){
					var data = response.json();
					switch(data.status){
						case 1:
							location.href = "index.html";
							break;
						case -1:
							alert("密码错误");
							break;
						case -2:
							alert("不在认证微信登录");
							break;
						case -3:
							alert("参数错误");
							break;
						default:
							alert("出现异常");
							break;
					}
				}, function(response){
					console.log(response);
					alert('error');
				});
			}
		}
	});
})(window);
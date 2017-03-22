;(function(window, undefined){
	var vm = new Vue({
		el: "#main",
		data: {
			identity: {
				isShow: false,
				index: 0,
				identities: [
					"教师", "家属", "医生", "其他教职工"
				]
			},
			verify: 0,
			phone1: "",
			phone2: ""
		},
		computed: {
			verifyText: function(){
				if(this.verify == 0){
					return "获取验证码";
				} else {
					return this.verify + "s";
				}
			},
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
					case 1:
					case 2:
					case 3:
						mode = 1;
						break;
					default:
						mode = 0;
						break;
				}
				return mode;
			},
			index: function(){
				var index = 1;
				switch(this.identity.index){
					case 0:
						index = 1;
						break;
					case 1:
						index = 2;
						break;
					case 2:
						index = 3;
						break;
					case 3:
						index = 7;
						break;
					default:
						index = 1;
						break;
				}
				return index;
			},
			phone: function(){
				if(this.mode == 0){
					return this.phone1;
				}else{
					return this.phone2;
				}
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
			getVerify: function(event){
				this.$http.post('/Index/sendAuthCode', {
					phone: this.phone
				}, {
					before: function(){
						return this.phone != "";
					}.bind(this)
				}).then(function(response){
					var data = response.json(),
						timeout;
					if(data.status == 1){
						this.verify = 60;
						timeout = setInterval(function(){
							if(--this.verify <= 0){
								console.log(123);
								clearInterval(timeout);
							}
						}.bind(this), 1000);
					} else {
						alert("短信发送失败");
					}
				}.bind(this), function(response){
					console.log(response);
					alert('error');
				})
			},
			submit: function(event){
				var formdata = new FormData(event.target);
				for(var entry of formdata.entries()){
					if (entry[1] == ""){
						alert("Please enter " + entry[0]);
						return;
					}
				}
				if(formdata.get("pass") != formdata.get("repass")){
					alert("passwords are diffent");
					return;
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
			},
			back: function(){
				history.back();
			}
		}
	});
})(window);
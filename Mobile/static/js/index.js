;
(function(window, undefined) {
	var vm = new Vue({
		el: "#content",
		data: {
			bannerIndex: 0,
			showTest: {},
			isShowInformation: false,
			banner: [{
				"test_id": "1",
				"test_name": "正性负性情绪量表(PANAS)1",
				"test_pic": "../static/img/picture1.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}, {
				"test_id": "2",
				"test_name": "正性负性情绪量表(PANAS)2",
				"test_pic": "../static/img/picture2.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}, {
				"test_id": "1",
				"test_name": "正性负性情绪量表(PANAS)1",
				"test_pic": "../static/img/picture1.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}, {
				"test_id": "2",
				"test_name": "正性负性情绪量表(PANAS)2",
				"test_pic": "../static/img/picture2.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}, {
				"test_id": "1",
				"test_name": "正性负性情绪量表(PANAS)1",
				"test_pic": "../static/img/picture1.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}, {
				"test_id": "2",
				"test_name": "正性负性情绪量表(PANAS)2",
				"test_pic": "../static/img/picture2.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}],
			selected: [{
				"test_id": "3",
				"test_name": "正性负性情绪量表(PANAS)3",
				"test_pic": "../static/img/banner.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}, {
				"test_id": "4",
				"test_name": "正性负性情绪量表(PANAS)4",
				"test_pic": "../static/img/banner.png",
				"short_des": "这是场积极情绪和消极情绪的较量。",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
				"quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
			}]
		},
		computed: {
			bannerWidth: function() {
				return 100 * this.banner.length + "%";
			},
			slideWidth: function() {
				return 100 / this.banner.length + "%";
			},
			bannerRight: function() {
				return 100 * this.bannerIndex + "%";
			},
			testLink: function() {
				return "self_test.html?id=" + this.showTest.test_id;
			}
		},
		methods: {
			closeInformation: function(){
				this.isShowInformation = false;
			},
			runBanner: function(){
				setInterval(function(){
					if (this.bannerIndex + 1 == this.banner.length) {
						this.bannerIndex = 0;
					} else {
						this.bannerIndex += 1;
					}
				}.bind(this), 2000);
			},
			show: function(test){
				this.$set(this, "showTest", test);
				this.$set(this, "isShowInformation", true);
			}
		},
		created: function() {
			// this.$http.get('/Index/getMainPage').then(function(response) {
			// 	var data = response.json();
			// 	if (data.status == 1) {
			// 		this.$set(this, "banner", data.banner);
			// 		this.$set(this, "selected", data.selected);
					this.runBanner();
			// 	} else {
			// 		alert("获取信息失败");
			// 	}
			// }.bind(this), function(response) {
			// 	console.log(response);
			// 	alert('error');
			// }.bind(this));
		}
	});
})(window);

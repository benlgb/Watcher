;
(function(window, undefined) {
	var search = window.location.search,
		match = search.match(/\bq=(.*?)(&|$)/),
		testData = {
			search: undefined,
			keyword: undefined,
			alert: false
		};

	if(match && match[1]){
		testData.keyword = decodeURIComponent(match[1]);
	}else{
		window.location.href = "index.html";
		return;
	}
	
	var vm = new Vue({
		el: "#content",
		data: {
			bannerIndex: 0,
			showTest: {},
			isShowInformation: false,
			tests: [{
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
			}]
		},
		computed: {
			testLink: function() {
				return "self_test.html?id=" + this.showTest.test_id;
			}
		},
		methods: {
			closeInformation: function(){
				this.isShowInformation = false;
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
					// this.runBanner();
			// 	} else {
			// 		alert("获取信息失败");
			// 	}
			// }.bind(this), function(response) {
			// 	console.log(response);
			// 	alert('error');
			// }.bind(this));
		}
	});

	// $(function() {
	// 	function query(){
	// 		$("#search-text").blur();
	// 		testData.search = [];
	// 		var data = [{
	// 			"id": "1",
	// 			"testName": testData.keyword,
	// 			"testPic": "../static/img/picture1.png",
	// 			"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
	// 		}, {
	// 			"id": "3",
	// 			"testName": testData.keyword,
	// 			"testPic": "../static/img/picture1.png",
	// 			"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
	// 		}];

	// 		// $.get({
	// 		// 	url: "/index/search",
	// 		// 	dataType: "json",
	// 		// 	data: {
	// 		// 		keyword: testData.keyword
	// 		// 	}
	// 		// }).done(function(data){
	// 		setTimeout(function(){
	// 			testData.search = data;
	// 			window.history.pushState({
	// 				q: testData.keyword
	// 			}, "守望者", "?q=" + testData.keyword);
	// 		}, 1000);
	// 		// });
	// 	}

		

	// 	new Vue({
	// 		el: "#content",
	// 		data: testData,
	// 		methods: {
	// 			query: query
	// 		}
	// 	});

	// 	query();
	// });
})(window);

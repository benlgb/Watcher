;
(function(window, undefined) {
	Vue.http.options.emulateJSON = true;

	Vue.http.interceptors.push(function(request, next){
		if(request.isAbort !== true){
			next();
		}
	});

	Vue.component("test-question", {
		props: ["question"],
		template: "#question",
		computed: {
			answers: function() {
				return this.question.answers
			}
		},
		methods: {
			chooseAnswer: function(index){
				this.$set(this.question, "answer", index);
			},
			on: function(index) {
				return index == this.question.answer;
			}
		}
	});

	var vm = new Vue({
		el: "#content",
		data: {
			status: 0,
			test_name: "",
			detail: []
		},
		methods: {
			submit: function(){
				this.$http.post("/Index/selfTest", {}, {
					isAbort: (function() {
						for(var i = 0; i < this.detail.length; i++){
							if(this.detail[i].answer === undefined) {
								alert("还有题目未完成");
								return true;
							}
						}
					}).bind(this)()
				}).then(function(){
					console.log("success");
				}, function(){
					console.log("error");
				});
			}
		},
		created: function(){
			var search = window.location.search,
				match = search.match(/\bid=(\d*?)(&|$)/);

			if(match && match[1]){
				var id = decodeURIComponent(match[1]);
			}else{
				window.location.href = "index.html";
				return;
			}

			setTimeout(function(){
				var data = {
					status: 1,
					test_id: "1",
					test_name: "正性负性情绪量表(PANAS)",
					test_pic: "../static/img/picture1.png",
					short_des: "这是场积极情绪和消极情绪的较量。",
					desciption: "情绪在心理学研究中占据重要地位，研究者经常把情绪作为......",
					quiz_warn: "请仔细阅读每一道题并根据自己实际情况进行作答：每一......",
					detail: [{
						"id": "1",
						"question": "感兴趣的",
						"answers": [
							"几乎没有",
							"比较少",
							"中等程度",
							"比较多",
							"极其多",
						]
					}, {
						"id": "2",
						"question": "心烦的",
						"answers": [
							"几乎没有",
							"比较少",
							"中等程度",
							"比较多",
							"极其多",
						]
					}]
				};
				for(var key in data){
					this.$set(this, key, data[key]);	
				}
			}.bind(this), 2000);

			// this.$http.get("/Index/selfTest", {
			// 	params: {
			// 		action: "getTest",
			// 		testId: id,
			// 		detail: true
			// 	}
			// }).then(function(response){

			// }, function(response){

			// })
		}
	});
	// $(function() {
		

	// 	Vue.component("test-question", {
	// 		props: ["index", "question"],
	// 		template: "#question"
	// 	});

		

	// var data = {
	// 	"id": "1",
	// 	"testName": "正性负性情绪量表(PANAS)",
	// 	"testPic": "",
	// 	"desciption": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。",
	// 	"detail": [{
	// 		"question": "感兴趣的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "心烦的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "精神活力高的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "心神不宁的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "劲头足的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "内疚的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "恐惧的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "敌意的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "热情的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "自豪的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "易怒的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "警觉性高的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "害羞的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "备受鼓舞的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "紧张的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "意志坚定的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "注意力集中的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "坐立不安的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "有活力的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}, {
	// 		"question": "害怕的",
	// 		"answers": [
	// 			"几乎没有",
	// 			"比较少",
	// 			"中等程度",
	// 			"比较多",
	// 			"极其多"
	// 		]
	// 	}]
	// };

	// 	// $.get({
	// 	// 	url: "/Index/getTest",
	// 	// 	dataType: "json",
	// 	// 	data: {
	// 	// 		testId: id,
	// 	// 		detail: true,
	// 	// 	}
	// 	// }).done(function(data){
	// 		data.detail = data.detail.map(function(question){
	// 			question.selected = -1
	// 			return question;
	// 		});
	// 		new Vue({
	// 			el: "#content",
	// 			data: data
	// 		});
	// 	// });
	// });
})(window);

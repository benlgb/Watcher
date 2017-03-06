;
(function(window, undefined) {
	$(function() {
		var search = window.location.search,
			match = search.match(/\bid=(\d*?)(&|$)/);

		if(match && match[1]){
			var id = decodeURIComponent(match[1]);
		}else{
			window.location.href = "index.html";
			return;
		}

		Vue.component("test-question", {
			props: ["index", "question"],
			template: "#question"
		});

		Vue.component("test-answer", {
			props: ["answer", "question", "index"],
			template: "#answer",
			methods: {
				select: function(){
					this.question.selected = this.index;
				}
			},
			computed: {
				on: function(){
					var selected = this.question.selected;
					return selected === this.index;
				}
			}
		});

		var data = {
			"id": "1",
			"testName": "正性负性情绪量表(PANAS)",
			"testPic": "",
			"desciption": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。",
			"detail": [{
				"question": "感兴趣的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "心烦的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "精神活力高的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "心神不宁的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "劲头足的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "内疚的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "恐惧的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "敌意的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "热情的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "自豪的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "易怒的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "警觉性高的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "害羞的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "备受鼓舞的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "紧张的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "意志坚定的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "注意力集中的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "坐立不安的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "有活力的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}, {
				"question": "害怕的",
				"answers": [
					"几乎没有",
					"比较少",
					"中等程度",
					"比较多",
					"极其多"
				]
			}]
		};

		// $.get({
		// 	url: "/Index/getTest",
		// 	dataType: "json",
		// 	data: {
		// 		testId: id,
		// 		detail: true,
		// 	}
		// }).done(function(data){
			data.detail = data.detail.map(function(question){
				question.selected = -1
				return question;
			});
			new Vue({
				el: "#content",
				data: data
			});
		// });
	});
})(window);

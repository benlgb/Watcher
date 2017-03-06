;
(function(window, undefined) {
	$(function() {
		function query(){
			$("#search-text").blur();
			testData.search = [];
			var data = [{
				"id": "1",
				"testName": testData.keyword,
				"testPic": "../static/img/picture1.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}, {
				"id": "3",
				"testName": testData.keyword,
				"testPic": "../static/img/picture1.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}];

			// $.get({
			// 	url: "/index/search",
			// 	dataType: "json",
			// 	data: {
			// 		keyword: testData.keyword
			// 	}
			// }).done(function(data){
			setTimeout(function(){
				testData.search = data;
				window.history.pushState({
					q: testData.keyword
				}, "守望者", "?q=" + testData.keyword);
			}, 1000);
			// });
		}

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

		new Vue({
			el: "#content",
			data: testData,
			methods: {
				query: query
			}
		});

		query();
	});
})(window);

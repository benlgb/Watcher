;
(function(window, undefined) {
	$(function() {
		var data = {
			"banner": [{
				"id": "1",
				"testName": "正性负性情绪量表(PANAS)",
				"testPic": "../static/img/banner.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}, {
				"id": "1",
				"testName": "正性负性情绪量表(PANAS)",
				"testPic": "../static/img/banner.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}, {
				"id": "1",
				"testName": "正性负性情绪量表(PANAS)",
				"testPic": "../static/img/banner.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}],
			"selected": [{
				"id": "2",
				"testName": "正性负性情绪量表(PANAS)",
				"testPic": "../static/img/picture1.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}, {
				"id": "3",
				"testName": "正性负性情绪量表(PANAS)",
				"testPic": "../static/img/picture1.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}, {
				"id": "4",
				"testName": "正性负性情绪量表(PANAS)",
				"testPic": "../static/img/picture1.png",
				"description": "请仔细阅读每一道题并根据自己实际情况进行作答：每一道题包含5个选项即A.几乎没有 b.比较少 C.中等程度 D.比较多 E.极其多,请从其中选择一个更适合你的答案。在作答过程中不得漏题，在同一题上不要斟酌太多时间，要根据看完题后的第一反应进行回答。"
			}]
		};

		// $.get({
		// 	url: "/index/getMainPage",
		// 	dataType: "json"
		// }).done(function(data){
		// setTimeout(function(){
			data.banner.push(data.banner[0]);
			var bannerWidth = data.banner.length * 100;
			var template = new Vue({
				el: "#content",
				data: {
					bannerSelected: 0,
					left: "auto",
					right: 0,
					indexData: data,
					alert: false,
					banner: data.banner.slice(0, -1),
					bannerWidth: bannerWidth + "%",
					bannerPicWidth: 10000.0 / bannerWidth + "%"
				},
				methods: {
					query: function(){
						$("#search-text").blur();
					}
				}
			});
			setInterval(function(){
				length = data.banner.length - 2;
				if(template.right == 0){
					template.left = "auto";
				}else if(template.right == length * 100){
					template.bannerSelected = -1;
					setTimeout(function(){
						template.left = "0%";
						template.right = 0;
					}, 500);
				}
				template.right += 100;
				template.bannerSelected ++;
			}, 5000);
		// }, 1000);
		// })
	});
})(window);

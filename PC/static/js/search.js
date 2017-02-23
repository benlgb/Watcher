;(function(window, undefined){
	// 处理查询信息
	function searchQuery(){
		var search = window.location.search;
			search_args = {
				name: search.match(/\bname=(.*?)(&|$)/),
				schoolId: search.match(/\bschoolId=(.*?)(&|$)/),
				college: search.match(/\bcollege=(.*?)(&|$)/),
				major: search.match(/\bmajor=(.*?)(&|$)/),
				classname: search.match(/\bclass=(.*?)(&|$)/)
			},
			isSearch = false;
		for(let key in search_args){
			if(search_args[key]){
				isSearch = true;
				search_args[key] = decodeURI(search_args[key][1]);
				$("#" + key).val(search_args[key]);
			}
		}
		if(isSearch)query(search_args);
	}

	// HTML转码
	function parseHTML(html) {
		if (typeof(html) == "string") {
			return html.replace(/[<>&" ]/g, function(c) {
				return {
					"<": "&lt;", ">": "&gt;",
					"&": "&amp;", "\"": "&quot;",
					" ": "&nbsp"
				}[c];
			});
		} else {
			return html;
		}
	}

	// 模板生成
	function template(template, kwargs) {
		var matches = template.match(/{{.+?}}/g);
		if (matches) {
			for (let i = 0; i < matches.length; i++) {
				let key = matches[i].match(/{{\s*([^\s]+)\s*}}/);
				if (key && kwargs[key[1]]) {
					template = template.replace(key[0], parseHTML(kwargs[key[1]]));
				} else if (key) {
					template = template.replace(key[0], key[1]);
				}
			}
		}
		return template;
	}

	// 进行查询
	function query(search_args, offset){
		query_args = search_args;
		$("#notice").attr("type", "loading");
		search_args["offset"] = offset || 0;
		var data = {
			status: 1,
			students: [{
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, {
				avatar: "../static/img/avatar.jpg",
				name: "郭小洁",
				college: "思科信息学院",
				classname: "软件工程1501",
				schoolId: "20151001234",
				phone: "110"
			}, ]
		}
		// $.post({
		// 	url: "search",
		// 	data: search_args,
		// 	dataType: "json",
		// }).done(function(data){
		setTimeout(function(){
			if(data.status == 1){
				$("#notice").attr("type", "more");
				var people = $("#people").html();
				$(data.students).each(function(index, student){
					$("#result").append(template(people, student));
				});
			}else{
				$("#notice").attr("type", "error");
			}
		}, 2000);
		// }).fail(function(){
		// 	$("#notice").attr("type", "error");
		// });
	}

	var query_args;

	$(function(){
		// 模拟下拉框
		$(".query").delegate("li", "click", function(){
			$(this).parents().filter(".select")
			.find("input").focus()
			.val(this.textContent);
		}).find(".arrow").click(function(){
			$(this).parent()
			.find("input").addClass("selecting").end()
			.find("ul").append([
				"<li>1学院</li>",
				"<li>2学院</li>",
				"<li>3学院</li>",
			].join("")).focus().blur(function(){
				$(this).html("").parent()
				.find("input").removeClass("selecting");
			});
		});

		searchQuery();

		$(".search-button").click(function(){
			$("#result").html("");
			query({
				name: $("#name").val(),
				schoolId: $("#schoolId").val(),
				college: $("#college").val(),
				major: $("#major").val(),
				classname: $("#classname").val()
			});
		});

		$("#more-button").click(function(){
			query(query_args, $(".people").length);
		});
	});
})(window);
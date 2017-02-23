;
(function(window, undefined) {
	// Cookie控制器
	var cookieController = {
		submit: function(remember, username, password) {
			if (remember == "remember") {
				this.set(username, password);
			} else {
				this.del();
			}
		},
		set: function(username, password) {
			document.cookie = "username=" + username;
			document.cookie = "password=" + password;
		},
		del: function() {
			var date = new Date().toGMTString();
			document.cookie = "username=; expires=" + date;
			document.cookie = "username=; expires=" + date;
		},
		check: function() {
			var cookie = document.cookie,
				username = cookie.match(/\busername=([\w_]*)\b/),
				password = cookie.match(/\bpassword=([\w_]*)\b/);
			if (username && password) {
				$("#username").val(username[1]);
				$("#password").val(password[1]);
				$("#remember").click();
			}
		}
	}

	$(function() {
		// 控制自定义单选框显示
		$("#remember").click(function(event) {
			event.preventDefault();
			var i = $(this).find(".radio"),
				radio = $(this).find("input");
			if (i.hasClass("on")) {
				i.removeClass("on");
				radio.attr("checked", false);
			} else {
				i.addClass("on");
				radio.attr("checked", true);
			}
		});

		cookieController.check();

		// 异步提交
		$("#login").submit(function() {
			var formData = new FormData($("#login")[0]),
				username = formData.get("username"),
				password = formData.get("password"),
				remember = formData.get("remember");
			if (username == "") {
				$("#remark").html("请输入账号");
				$("#username").focus();
			} else if (/[^\w_]/.test(username)) {
				$("#remark").html("账号由字母数字和下划线组成");
				$("#username").select();
			} else if (password == "") {
				$("#remark").html("请输入密码");
				$("#password").focus();
			} else if(/[^\w_]/.test(password)) {
				$("#remark").html("密码由字母数字和下划线组成");
				$("#password").select();
			} else {
				cookieController.submit(remember, username, password);
				$("#remark").html("登录中。。。");
				var data = { status: 1 };
				// $.post({
				// 	url: "",
				// 	data: formData,
				// 	dataType: "json",
				// 	contentType: false,
				// 	processData: false,
				// }).done(function(data) {
					if (data.status == 1) {
						window.location.href = "index.html";
					} else {
						$("#remark").html("账号或密码有误，请重新登陆");
					}
				// }).fail(function(error) {
				// 	$("remark").html("链接服务器错误");
				// });
			}
			return false;
		});
	});
})(window);

;
(function(window, undefined) {
    $(function() {
        var data = {
            select: [{
                bigTitle: "测试一",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目三",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试二",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试三",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试四",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试五",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试六",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试七",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试八",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }, {
                bigTitle: "测试九",
                quiz: [{
                    title: "题目一",
                    pic: "../static/img/testPic.jpg"
                }, {
                    title: "题目二",
                    pic: "../static/img/testPic.jpg"
                }]
            }],
            mark: "备注"
        };

        // $.get({
        // 	url: "/OtherScore/getTest",
        // 	dataType: "json"
        // }).done(function(data){
        new Vue({
            el: "#content",
            data: {
                data: data,
                test_index: 0,
                question_index: 0,
                show: false,
                couldAnswer: false
            },
            methods: {
                showTest: function(index) {
                    this.test_index = index;
                    this.question_index = 0;
                    this.show = true;
                },
                previous: function() {
                    if (this.question_index > 0) {
                        this.question_index--;
                    }
                },
                next: function() {
                    setTimeout(function() {
                        if (this.question_index + 1 < this.test.quiz.length) {
                            this.question_index++;
                        } else {
                            this.show = false;
                            var test = this.test;
                            for (let i = 0; i < test.quiz.length; i++) {
                                let question = test.quiz[i];
                                if (question.answer !== 0 && question.answer !== 1) {
                                    Vue.set(test, "finish", false);
                                    return;
                                }
                            }
                            Vue.set(test, "finish", true);
                        }
                    }.bind(this), 300);

                },
                setAnswer: function(answer) {
                    Vue.set(this.question, "answer", answer);
                    this.next();
                },
                finish: function(index) {
                    var test = this.data.select[index];
                    for (let i = 0; i < test.quiz.length; i++) {
                        let question = test.quiz[i];
                        if (question.answer !== 0 || question.answer !== 1) {
                            return false;
                        }
                    }
                    return true;
                }
            },
            computed: {
                test: function() {
                    return this.data.select[this.test_index];
                },
                question: function() {
                    return this.test.quiz[this.question_index];
                },
                questionTitle: function() {
                    return this.question.title;
                },
                answer: function() {
                    return this.question.answer;
                }
            }
        });
        // });
    });
})(window);

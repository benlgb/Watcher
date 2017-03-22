# Watcher 接口文档 #

- [一、重点备注](#一重点备注)
  - [1. 预警通知](#1-预警通知)
  - [2. 登录注册方式](#2-登录注册方式)
  - [3. 用户身份标识](#3-用户身份标识)
- [二、登录注册](#二登录注册)
  - [1. 登录接口](#1-登录接口)
  - [2. 注册接口](#2-注册接口)
  - [3. 发送验证码](#3-发送验证码)
  - [4. 验证验证码](#4-验证验证码)
- [三、自我成长](#三自我成长)
  - [1. 首页信息](#1-首页信息)
  - [2. 搜索测试](#2-搜索测试)
  - [3. 自评测试信息](#3-自评测试信息)
  - [4. 提交自评测试答案](#4-提交自评测试答案)
  - [5. 获取尚未处理的通知](#5-获取尚未处理的通知)
- [四、守望者](#四守望者)
  - [1. 查询用户](#1-查询用户)
  - [2. 获取他评问题](#2-获取他评问题)
  - [3. 提交他评答案](#2-获取他评问题)
- [五、心灵的港湾](#五心灵的港湾)
- [六、我的](#六我的)
  - [1. 获取我的测试](#1-获取我的测试)
  - [2. 修改名字](#2-修改名字)
  - [3. 修改手机号](#3-修改手机号)
  - [4. 修改密码](#4-修改密码)
  - [5. 修改头像](#5-修改头像)
  - [6. 获取所有通知](#6-获取所有通知)
  - [7. 通知上级](#7-通知上级)
  - [8. 修改评级](#8-修改评级)
  - [9. 读取通知](#9-读取通知)
- [七、守望者小组](#七守望者小组)
  - [1. 获取当前用户建立的守望者小组](#1-获取当前用户建立的守望者小组)
  - [2. 获取学院专业班级信息](#2-获取学院专业班级信息)
  - [3. 守望者小组基本信息](#3-守望者小组基本信息)
  - [4. 创建守望者小组](#4-创建守望者小组)
  - [5. 添加守望者成员](#5-添加守望者成员)
  - [6. 删除守望者成员](#6-删除守望者成员)
  - [7. 解散守望小组](#7-解散守望小组)

## 一、重点备注 ##

##### 1. 预警通知 #####
| 预警类型 | 通知人        |
| ---- | ---------- |
| 一级预警 | 辅导员、书记、咨询师 |
| 二级预警 | 辅导员、书记     |
| 三级预警 | 辅导员        |

##### 2. 登录注册方式 #####

| 用户类型                    | 登录注册方式            |
| ----------------------- | ----------------- |
| 学生                      | 通过学号、姓名、密码登录，无需注册 |
| 辅导员、学校书记、中心咨询师、领导和超级管理员 | 通过账号和密码登录，无需注册    |
|教师、家属、医生和其他教职工|通过手机号和密码登录，通过姓名、手机号、密码和验证码注册|

##### 3.用户身份标识 #####
|用户类型|标识码|备注|
|----|-----|----|
|学生|0|NULL|
|教师|1|拥有工号|
|家属|2|NULL|
|医生|3|他评选择题可以选填|
|辅导员|4|拥有查看/创建/删除/更改守望小组，查看数据可视化，通知上级，修改预警等级的权限|
|中心咨询师|5|拥有通知上级，修改预警等级，查看数据可视化的权限|
|书记|6|拥有查看数据可视化的权限|
|其他教职工|7|NULL|
|领导|8|只拥有查看数据可视化的权限|
|超级管理员|9|全局权限|

`此标识码全局通用`

## 二、登录注册 ##
##### 1. 登录接口 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|---|
|action|string|true|必须为"login"|
|type|int|true|[身份标识码](#3-用户身份标识)|
|sid|string|false|学生学号|
|account|string|true|用户名／学生名称|
|pass|string|true|密码|



```json
{
      "type": "0" // 学生
      "username": "用户名",
      "password": "密码",
}
```
- 返回数据：
```json
{
      "status": 1 // 登录正常
}
```
- 备注：
返回参数status：
    - 1: 登录正常
    - -1: 密码错误
    - -2: 不在认证微信登录
    - -3: 参数错误

##### 2. 注册接口 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|"必须为register"|
|type|int|true|[身份标识码](#3-用户身份标识)|
|name|string|true|姓名|
|school_id|string|false|工号（教师必选）|
|pass|string|true|密码|
|phone|string|true|手机|


- 返回数据：
```json
{
      "status": 1 // 注册正常
}
```
- 备注：
- 用于其他用户的注册（教师、家属、医生、其他教职工）
- 返回参数status：
    - 1: 注册正常
    - -1: 手机号已被注册
    - -2: 参数错误

##### 3. 发送验证码 #####
- 请求地址：`/Index/sendAuthCode`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|phone|string|true|手机号|

- 返回数据：
```json
{
      "status": 1 // 短信发送成功
}
```
- 备注：
手机格式与过频访问请在前端控制（恶意请求在后台另有限制）
- 返回参数status：
    - 1: 短信发送成功
    - -1: 短信发送失败

##### 4.验证验证码 #####
- 请求地址: `/Index/verify`
- 请求方法: `POST`
- 请求参数:

|参数名|类型|必选|备注|
|---|---|---|---|
|authCode|string|true|验证码|

- 返回数据：
```json
{
	"status":1 //验证码正确
}
```
- 备注
- 返回参数status：
 - 1:验证码正确
 - 2:验证码错误

## 三、自我成长 ##
##### 1. 首页信息 #####
- 请求地址：`/Index/getMainPage`
- 请求方法：`GET`
- 请求参数：无
- 返回数据：
```json
{
      "status": 1, // 获取成功
      “banner”: [{
            "test_id": "1",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_des": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "test_id": "2",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_pes": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }],
      "selected": [{
            "test_id": "3",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_des": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "test_id": "4",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_des": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "test_id": "5",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_des": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }]
}
```
- 备注：
- 获取首页banner和精选测试的内容
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 2. 搜索测试 #####
- 请求地址：`/Index/selfTest`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"search"|
|keyword|string|true|关键字|

- 返回数据：
```json
{
      "status": 1, // 搜索成功
      “tests”: [{
            "id": "1",
            "testName": "正性负性情绪量表(PANAS)",
            "testPic": "../static/img/banner.png",
            "shortDes": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quizWarn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "id": "2",
            "testName": "正性负性情绪量表(PANAS)",
            "testPic": "../static/img/banner.png",
            "shortDes": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quizWarn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }]
}
```
- 备注：
- 根据搜索关键词搜索自评测试
- 返回参数status：
    - 1: 搜索成功
    - -1: 搜索失败（不是没有）

##### 3. 自评测试信息 #####
- 请求地址：`/Index/selfTest`
- 请求方法：`GET`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|aciton|string|true|必须为"getTest"|
|testId|int|true|测试Id(注意参数名称大小写)|
|detail|boolean|false|是否获取题目详细,后台默认不获取|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      "test_id": "1",
      "test_name": "正性负性情绪量表(PANAS)",
      "test_pic": "./PUBLIC/quiz/1/cover.png",
      "short_des": "这是场积极情绪和消极情绪的较量。",
      "desciption": "情绪在心理学研究中占据重要地位，研究者经常把情绪作为......",
      "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      “detail”: [{
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
}
```
- 备注：
- 获取自评测试内容
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 4. 提交自评测试答案 #####
- 请求地址：`/Index/selfTest`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"submit"|
|testId|int|true|测试id|
|answers|array|true|答案,格式如下json|

```json
{
      "testId": "1",
      "answers": [{
            "id": "1",
            "answer": 0 // 答案的index
      }, {
            "id": "2",
            "answer": 4 // 答案的index
      }]
}
```

- 返回数据：
```json
{
      "status": 1 // 提交成功
}
```
- 备注：
- 获取自评测试内容
- 返回参数status：
    - 1: 提交成功
    - -1: 提交失败（不是没有）

##### 5. 获取尚未处理的通知 #####
- 请求地址：`/Index/note`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"getUnhandledGroupNote"|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      "unhandledGroupNote": [{
            "student_id": "1",
            "name": "姓名",
            "avatar": "头像地址"
      }, {
            “student_id”: "2",
            "name": "姓名",
            "avatar": "头像地址"
      }, ]
}
```
- 备注：
- 获取尚未处理的守望小组通知
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 6.已读通知 #####
- 请求地址: `/Index/note`
- 请求方法: `POST`
- 请求参数:

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"readNote"|
|noteId|string|true|通知id|

- 返回数据:
```json
{
	"status" : 1 //提交成功
}
```

- 备注：
- 返回参数status：
	- 1:提交成功
	- -1:提交失败（不是没有）

## 四、守望者 ##
##### 1. 查询用户 #####
- 请求地址：`/Index/user
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"searchUser"|
|self|boolean|true|是否查询当前用户|
|type|int|false|用户标识码|
|college|string|false|学院|
|major|string|false|专业|
|class|string|false|班级|
|studentId|string|false|学号|
|schoolId|string|false|工号|
|name|string|false|姓名|
|phone|string|false|手机|

- 返回数据(当self为false)：
```json
{
      "status": 1, // 查询成功
      “users”: [{
            "id": "1",
            "type": "0",
            "name": "姓名",
            "school": "学院",
            "major": "专业",
            "class": "班级",
            "phone": "手机号",
            "avatar": "头像地址"
      }, {
            "id": "2",
            "type": "1"
            "name": "姓名",
            "phone": "手机号",
            "avatar": "头像地址"
      }]
}
```
- 返回数据(当self为true)：
```
{
      "status": 1, // 查询成功
      "users": [{
            "id": "1",
            "type": "1", // 用户类型（跟登录时一样）
            "name": "姓名",
            "phone": "手机号",
            "avatar": "头像地址",
            "notice_num": 2, // ** 新 ** 通知数量
      }]
}
```
- 备注：
- 查询用户基本信息（没有的信息用空字符串代替）
- self为true时返回当前用户信息
- self为false时name,type参数为必选参数
- 返回参数status：
    - 1: 查询成功
    - -1: 查询失败（不是没有）

##### 2. 获取他评问题 #####
- 请求地址：`/Index/otherTest`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"getTest"|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      “select”: [{
            "id": "1",
            "quiz": [{
                  "id": "1",
                  "title": "题目一",
                  "pic": "题目图片"
            }, {
                  "id": "2",
                  "title": "题目一",
                  "pic": "题目图片"
            }]
      }, {
            "id": "21",
            "quiz": [{
                  "id": "1",
                  "title": "题目一",
                  "pic": "题目图片"
            }, {
                  "id": "2",
                  "title": "题目一",
                  "pic": "题目图片"
            }]
      }],
      "mark": "主观题备注"//不同用户返回不同
}
```
- 备注：
- select包含有8个主题，每个主题多个题目
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 3. 提交他评答案 #####
- 请求地址：`/Index/otherTest`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"submit"|
|to_whom|int|true|被评价的学生id|
|select|array|true|选择题答案json格式如下|
|mark|string|true|主观题答案|


```json
{
      “select”: [{
            "id": "1",
            "answers": [{
                  "id": "1",
                  "answer": true
            }, {
                  "id": "2",
                  "answer": false
            }]
      }, {
            "id": "2",
            "answers": [{
                  "id": "1",
                  "answer": true
            }, {
                  "id": "2",
                  "answer": false
            }]
      }],
      "mark": "主观题"
}
```

- 返回数据：
```json
{
      "status": 1 // 提交成功
}
```
- 备注：
- select包含有8个主题，每个主题多个答案
- 返回参数status：
    - 1: 提交成功
    - -1: 提交失败（不是没有）

## 五、心灵的港湾 ##
无

## 六、我的 ##
##### 1. 获取我的测试 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"selfTest"|
|limit|int|false|获取数量,默认获取全部|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      “tests”: [{
            "test_id": "1",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_des": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "test_id": "2",
            "test_name": "正性负性情绪量表(PANAS)",
            "test_pic": "../static/img/banner.png",
            "short_des": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quiz_warn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }]
}
```
- 备注：
- 没有limit时返回全部测试
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）。

##### 2. 修改名字 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"changeName"|
|name|string|true|新名字|

- 返回数据：
```
{
      "status": 1 // 修改成功
}
```
- 备注：
- 此接口只供除学生，//TODO 之外的人员使用
- 返回参数status：
    - 1: 修改成功
    - -1: 修改失败(不是没有)

##### 3. 修改手机号 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"changePhone|"
|phone|string|true|新手机号|

- 返回数据：
```json
{
      "status": 1 // 修改成功
}
```
- 备注：
- 验证码请在前端控制验证
- 返回参数status：
    - 1: 修改成功
    - -1: 修改失败

##### 4. 修改密码 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"changePass"|
|oldPass|string|true|旧密码|
|newPass|string|true|新密码|

- 返回数据：
```
{
      "status": 1 // 修改成功
}
```
- 备注：
- 返回参数status：
    - 1: 修改成功
    - -1: 修改失败

##### 5. 修改头像 #####
- 请求地址：`/Index/user`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"changeAvatar"|
|avatar|FILE|true|formData类型传值|

- 返回数据：
```json
{
      "status": 1 // 修改成功
	  "avatar": "新头像地址"
}
```

- 备注：
- 请在前端限制大小最大为5M
- 返回参数status：
    - 1: 修改成功
    - -1: 修改失败

##### 6. 获取所有通知 #####
- 请求地址：`/Index/note`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"getNote"|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      "notices": [{
            "id": "1",
            "type": 1, // 通知类型（用户被拉入守望小组）
            "read": false, // 是否已被读
            "title": "辅导员邀请您帮助郭小洁进行他评",
            "content": "辅导员已经将您拉入关大饼的守望对象用户组啦，快去帮您的守护对象进行测评吧",
            "time": "2017.02.21 18:30",
            "watcheder": { // 被守望者信息
                  "student_id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            }
      }, {
            "id": "2",
            "type": 2, // 通知类型（用户被踢出守望小组）
            "read": true, // 是否已被读
            "title": "辅导员把您踢出郭小洁的守望小组",
            "content": "辅导员已经将您踢出关大饼的守望对象用户组，感谢您对守望者工作的支持与鼓励",
            "time": "2017.02.21 18:30"
      }, {
            "id": "3",
            "type": 3, // 通知类型（向辅导员和上级发出预警信号）
            "read": false, // 是否已被读
            "title": "关大饼同学被评为二级预警",
            "warnings": [0, 1, 3, 4, 2], // 前五个预警信号
            "warning": 4, // 最终预警信号
            "time": "2017.02.21 18:30",
            "watcheder": { // 预警同学信息
                  "student_id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            }
      }]
}
```
- 备注：
- type通知类型：1（用户被拉入守望小组），2（用户被踢出守望小组），3（向辅导员和上级发出预警信号）
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 7. 通知上级 #####
- 请求地址：`/Index/warn
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"informSup"|
|noticeId|int|true|通知id|

- 返回数据：
```json
{
      "status": 1 // 通知成功
}
```
- 备注：
- 返回参数status：
    - 1: 通知成功
    - -1: 通知失败(不是没有)

##### 8. 修改评级 #####
- 请求地址：`/Index/warn`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"changeLevel"|
|noticeId|int|true|通知ID|
|warning|int|true|新评级|
|remark|string|false|备注|

- 返回数据：
```json
{
      "status": 1 // 修改成功
}
```
- 备注：
- 返回参数status：
    - 1: 修改成功
    - -1: 修改失败(不是没有)


## 七、守望者小组 ##
##### 1. 获取当前用户建立的守望者小组 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"getGroup"|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      "watcherGroups": [{
            "id": "1",
            "watchersCount": 11,
            "finishedCount": 9,
            "watcheder": { // 被守望者信息
                  "student_id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            }
      }]
}
```
- 备注：
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败(不是没有)

##### 2. 获取学院专业班级信息 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"getMajor"|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      "school": [{
            "name": "思科信息学院",
            "major": [{
                  "name": "软件工程",
                  "class": [{
                        "name": "软件工程1501"
                  }, {
                        "name": "软件工程1502"
                  }, {
                        "name": "软件工程1503"
                  }],
            }]
      }]
}
```
- 备注：
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败(不是没有)

##### 3. 守望者小组基本信息 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须是"getInfo"|
|id|int|true|小组id|

- 返回数据：
```json
{
      "status": 1, // 获取成功
      "watcherGroup": {
            "id": "1",
            "watchersCount": 11,
            "finishedCount": 9,
            "watcheder": { // 被守望者个人信息
                  "student_id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            },
            "watchers": [{ // 守望者个人信息
                  "student_id": "1",
                  "type": "0",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址",
				  "result":"这个人相当有问题"
            }, {
                  "student_id": "2",
                  "type": "1"
                  "name": "姓名",
                  "phone": "手机号",
                  "avatar": "头像地址"
            }],
            "warnings": [0, 4, 2, 3, 1],
            "warning": 4,
      }
}
```
- 备注：
- 返回参数status：
    - 1: 获取成功
    - -1: 获取失败(不是没有)

##### 4. 创建守望者小组 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"createGroup"|
|watchederId|int|true|被守望者id|
|watcherIds|array|true|守望者Id|

- 返回数据：
```json
{
      "status": 1, // 创建成功
      "watcherGroup": {
            "id": "1",
            "watchersCount": 11,
            "finishedCount": 9,
            "watcheder": { // 被守望者个人信息
                  "student_id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            }
      }
}
```
- 备注：
- DEMO里面创建成功是直接返回很多个守望小组的页面，所以不用返回守望者信息
- 返回参数status：
    - 1: 创建成功
    - -1: 创建失败（不是没有）

##### 5. 添加守望者成员 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"addMember"|
|id|int|true|守望小组id|
|watcherIds|array|true|守望者id|

- 返回数据：
```json
{
      "status": 1, // 添加成功
      "watcherGroup": {
            "id": "1",
            "watchersCount": 11,
            "finishedCount": 9,
            "watcheder": { // 被守望者个人信息
                  "id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            },
            "watchers": [{ // 守望者个人信息
                  "id": "1",
                  "type": "0",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址",
				  "result":"这个人有问题"
            }, {
                  "id": "2",
                  "type": "1"
                  "name": "姓名",
                  "phone": "手机号",
                  "avatar": "头像地址",
				  "result":NULL
            }],
            "warnings": [0, 4, 2, 3, 1],
            "warning": 4
      }
}
```
- 备注：
- 返回参数status：
    - 1: 添加成功
    - -1: 添加失败

##### 6. 删除守望者成员 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"delMember"|
|id|int|true|守望小组id|
|watcherIds|array|true|被删除的守望者id|

- 返回数据：
```json
{
      "status": 1, // 删除成功
      "watcherGroup": {
            "id": "1",
            "watchersCount": 11,
            "finishedCount": 9,
            "watcheder": { // 被守望者个人信息
                  "student_id": "1",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址"
            },
            "watchers": [{ // 守望者个人信息
                  "student_id": "1",
                  "type": "0",
                  "name": "姓名",
                  "school": "学院",
                  "major": "专业",
                  "class": "班级",
                  "phone": "手机号",
                  "avatar": "头像地址",
				  "result":"这个人有问题"
            }, {
                  "student_id": "2",
                  "type": "1"
                  "name": "姓名",
                  "phone": "手机号",
                  "avatar": "头像地址",
				  "result":NULL
            }],
            "warnings": [0, 4, 2, 3, 1],
            "warning": 4
      }
}
```
- 备注：
- 返回参数status：
    - 1: 删除成功
    - -1: 删除失败

##### 7. 解散守望小组 #####
- 请求地址：`/Index/group`
- 请求方法：`POST`
- 请求参数：

|参数名|类型|必选|备注|
|---|---|---|---|
|action|string|true|必须为"delGroup"|
|id|int|true|守望小组id|

- 返回数据：
```json
{
      "status": 1, // 删除成功
}
```
- 备注：
- 返回参数status：
    - 1: 删除成功
    - -1: 删除失败（不是没有）
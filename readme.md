# Watcher 接口文档 #

- [一、重点备注](#一重点备注)
  - [1. 预警通知](#1-预警通知)
  - [2. 登录注册方式](#2-登录注册方式)
- [二、登录注册](#二登录注册)
  - [1. 登录接口](#1-登录接口)
  - [2. 注册接口](#2-注册接口)
  - [3. 验证码](#3-验证码)
- [三、自我成长](#三自我成长)
  - [1. 首页信息](#1-首页信息)
  - [2. 搜索测试](#2-搜索测试)
  - [3. 自评测试信息](#3-自评测试信息)
  - [4. 提交自评测试答案](#4-提交自评测试答案)
  - [5. 获取首次守望者小组未显示过的任务](#4-提交自评测试答案)
- [四、守望者](#四守望者)
  - [1. 查询学生](#1-查询学生)
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

## 一、重点备注 ##
##### 1. 预警通知 #####
|预警类型|通知人|
| ---------- | -------- |
|一级预警|辅导员、书记、咨询师|
|二级预警|辅导员、书记|
|三级预警|疏导员|

##### 2. 登录注册方式 ####
|用户类型|登录注册方式|
| ---------- | ----------- |
|学生|通过学号、姓名、密码登录，无需注册|
|辅导员、学校书记、中心咨询师、领导和超级管理员|通过账号和密码登录，无需注册|
|教师、家属、医生和其他教职工|通过手机号和密码登录，通过姓名、手机号、密码和验证码注册

## 二、登录注册 ##
##### 1. 登录接口 #####
- 请求地址：`/login`
- 请求方法：`POST`
- 请求参数：
```
{
      "username": "用户名",
      "password": "密码",
      "type": "1" // 辅导员（管理员）
}
```
- 返回数据：
```
{
      "status": 1 // 登录正常
}
```
- 备注：
 - 请求参数type：（按照功能不同区分，学生和其他的参数不同）
    - 0: 学生（其他参数为`username(string)` `studentId(string)` `password(string)`）
    - 1: 辅导员
    - 2: 学校书记
    - 3: 中心咨询师
    - 4: 领导
    - 5: 超级管理员
    - 6: 其他（教师、家属、医生、其他教职工）
（其他参数为`phone(string)` `password(string)`）  
 - 返回参数status：
    - 1: 登录正常
    - -1: 密码错误
    - -2: 不在认证微信登录
    - -3: 参数错误

##### 2. 注册接口 #####
- 请求地址：`/register`
- 请求方法：`POST`
- 请求参数：
```
{
      "name": "姓名",
      "phone": "手机号",
      "password": "密码",
      “verity”: "验证码"
}
```
- 返回数据：
```
{
      "status": 1 // 注册正常
}
```
- 备注：
 - 用于其他用户的注册（教师、家属、医生、其他教职工）
 - 返回参数status：
    - 1: 注册正常
    - -1: 手机号已被注册
    - -2: 验证码错误
    - -3: 不在认证微信注册
    - -4: 参数错误

##### 3. 验证码 #####
- 请求地址：`/verify`
- 请求方法：`POST`
- 请求参数：
```
{
      "phone": "手机号"
}
```
- 返回数据：
```
{
      "status": 1 // 短信发送成功
}
```
- 备注：
 - 返回参数status：
    - 1: 短信发送成功
    - -1: 手机号错误
    - -2: 短信发送失败
    - -3: 过频访问（对于一个微信号而言离上一次请求小于60s）
     （返回其他参数`timeRemaining(int)`（距离下次请求的剩余时间））

## 三、自我成长 ##
#####1. 首页信息#####
- 请求地址：`/Index/getMainPage`
- 请求方法：`GET`
- 请求参数：无
- 返回数据：
```
{
      "status": 1, // 获取成功
      “banner”: [{
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
      }],
      "selected": [{
            "id": "3",
            "testName": "正性负性情绪量表(PANAS)",
            "testPic": "../static/img/banner.png",
            "shortDes": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quizWarn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "id": "4",
            "testName": "正性负性情绪量表(PANAS)",
            "testPic": "../static/img/banner.png",
            "shortDes": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quizWarn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }, {
            "id": "5",
            "testName": "正性负性情绪量表(PANAS)",
            "testPic": "../static/img/banner.png",
            "shortDes": "这是场积极情绪和消极情绪的较量。",
            "description": "请仔细阅读每一道题并根据自己实际情况进行作答：......",
            "quizWarn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
      }]
}
```
- 备注：
 - 获取首页banner和精选测试的内容
 - 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 2. 搜索测试 #####
- 请求地址：`/Index/search`
- 请求方法：`GET`
- 请求参数：
```
{
      "keyword": "搜索关键词"
}
```
- 返回数据：
```
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
- 请求地址：`/Index/getTest`
- 请求方法：`GET`
- 请求参数：
```
{
      "testId": "1"
}
```
- 返回数据：
```
{
      "status": 1, // 获取成功
      "id": "1",
      "testName": "正性负性情绪量表(PANAS)",
      "testPic": "./PUBLIC/quiz/1/cover.png",
      "shortDes": "这是场积极情绪和消极情绪的较量。",
      "desciption": "情绪在心理学研究中占据重要地位，研究者经常把情绪作为......",
      "quizWarn": "请仔细阅读每一道题并根据自己实际情况进行作答：每一......"
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
- 请求地址：`/SelfScore/submit`
- 请求方法：`POST`
- 请求参数：
```
{
      "testId": "1",
      "answers": [{
            "id": "1",
            "question": "感兴趣的",
            "answer": 0 // 答案的index
      }, {
            "id": "2",
            "question": "心烦的",
            "answer": 4 // 答案的index
      }]
}
```
- 返回数据：
```
{
      "status": 1, // 获取成功
      "id": "1",
      "testName": "正性负性情绪量表(PANAS)",
      "testPic": "./PUBLIC/quiz/1/cover.png",
      "shortDes": "这是场积极情绪和消极情绪的较量。",
      "desciption": "情绪在心理学研究中占据重要地位，研究者经常把情绪作为......",
      “result”: “个体精力旺盛，能全神贯注和快乐的情绪状况，镇定”
}
```
- 备注：
 - 获取自评测试内容
 - 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 5. 获取首次守望者小组未显示过的任务 #####
- 请求地址：`/Index/unshowedWatcherGroups`
- 请求方法：`GET`
- 请求参数：无
- 返回数据：
```
{
      "status": 1, // 获取成功
      "unfinishWatcherGroups": [{
            “id”: "1", // 
            "name": "姓名",
            "avatar": "头像地址"
      }, {
            “id”: "2",
            "name": "姓名",
            "avatar": "头像地址"
      }, ]
}
```
- 备注：
 - 获取新的守望者小组的信息（未显示过的）
 - 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

## 四、守望者 ##
##### 1. 查询学生 #####
- 请求地址：`/Student/info`
- 请求方法：`POST`
- 请求参数：
```
{
      "sid": “学号”,
      "name": “姓名”,
      "school": “学院”,
      "major": “专业”,
      "class": “班级”,
      "phone": “手机号”
}
```
- 返回数据：
```
{
      "status": 1, // 查询成功
      “students”: [{
            "id": "1",
            "name": "姓名",
            "school": "学院",
            "major": "专业",
            "class": "班级",
            "phone": "手机号",
            "avatar": "头像地址"
      }, {
            "id": "2",
            "name": "姓名",
            "school": "学院",
            "major": "专业",
            "class": "班级",
            "phone": "手机号",
            "avatar": "头像地址"
      }]
}
```
- 返回数据（无参数时）：
```
{
      "status": 1, // 查询成功
      “person”: {
            "id": "1",
            "type": "1", // 用户类型（跟登录时一样）
            "name": "姓名",
            "phone": "手机号",
            "avatar": "头像地址",
            "notice": true, // 是否有新的通知
      }
}
```
- 备注：
 - 查询学生基本信息（没有的信息用空字符串代替）
 - 查询条件没有时返回当前用户信息
 - 返回参数status：
    - 1: 查询成功
    - -1: 查询失败（不是没有）

##### 2. 获取他评问题 #####
- 请求地址：`/OtherScore/getTest`
- 请求方法：`GET`
- 请求参数：无
- 返回数据：
```
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
      "mark": "主观题备注"
}
```
- 备注：
 - select包含有8个主题，每个主题多个题目
 - 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）

##### 3. 提交他评答案 #####
- 请求地址：`/OtherScore/submit`
- 请求方法：`GET`
- 请求参数：
```
{
      "studentId": “评价对象id”,
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
```
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
- 请求地址：`/myTest`
- 请求方法：`POST`
- 请求参数：
```
{
      "limit": 2 // 限制个数
}
```
- 返回数据：
```
{
      "status": 1, // 获取成功
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
 - 没有limit时返回全部测试
 - 返回参数status：
    - 1: 获取成功
    - -1: 获取失败（不是没有）。

##### 2. 修改名字 #####
- 请求地址：`/Index/changeName`
- 请求方法：`POST`
- 请求参数：
```
{
      "name": "新名字"
}
```
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

##### 3. 修改手机号 #####
- 请求地址：`/Index/changePhone`
- 请求方法：`POST`
- 请求参数：
```
{
      "phone": "新手机号",
      "verify": "验证码"
}
```
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

##### 4. 修改密码 #####
- 请求地址：`/Index/changePassword`
- 请求方法：`POST`
- 请求参数：
```
{
      "oldPassword": "旧密码",
      "newPassword": "新密码"
}
```
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
- 请求地址：`/Index/changeAvatar`
- 请求方法：`POST`
- 请求参数：
```
{
      "avatar": "头像" // formdata传值，图片文件
}
```
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

##### 6. 获取所有通知 #####
- 请求地址：`/notice`
- 请求方法：`POST`
- 请求参数：无
- 返回数据：
```
{
      "status": 1, // 获取成功
      "notices": [{
            "id": "1",
            "type": 1, // 通知类型（用户被拉入守望小组）
            "read": false, // 是否已被读
            "title": "辅导员邀请您帮助郭小洁进行他评",
            "content": "辅导员已经将您拉入关大饼的守望对象用户组啦，快去帮您的守护对象进行测评吧",
            "time": "2017.02.21 18:30",
            "watcher": { // 被守望者信息
                  "id": "1",
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
            "watcher": { // 预警同学信息
                  "id": "1",
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
    - 1: 修改成功
    - -1: 修改失败

##### 7. 通知上级 #####
- 请求地址：`/informSuperior`
- 请求方法：`POST`
- 请求参数：
```
{
      "noticeId": "1" // 通知id
}
```
- 返回数据：
```
{
      "status": 1 // 通知成功
}
```
- 备注：
 - 返回参数status：
    - 1: 通知成功
    - -1: 通知失败

##### 8. 修改评级 #####
- 请求地址：`/modifyWarning`
- 请求方法：`POST`
- 请求参数：
```
{
      "noticeId": "1", // 通知id
      "warning": 1 // 修改的评级
      "remark": "备注"
}
```
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
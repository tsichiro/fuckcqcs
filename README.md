# RoadofVaccine
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

疫苗作为舆论热点已经过去，我们国家太大，每天都有新的事情吸引眼球。

而你，有权利了解你和家人**注射了什么疫苗，来自于哪里**。
请看看“[疫苗之路](http://www.tangsan.name/vaccinenoharm)”吧。

![](screenshot/vaccine.gif)


## 数据可视化
- [x] **各厂商疫苗流转**
- [x] **各省市疫苗种类对比**
- [x] **各省市疫苗种类详情**
- [x] **导出图片**


## 数据来源
[fuckcqcs](https://github.com/fuckcqcs/fuckcqcs)


##  原理
- 前端：**echarts**
- 后端：**nodeJS**
- 数据库：**Mongodb**


## 使用教程
1. 服务器安装node和Mongodb（若需要路由，请安装Nginx）
2. 获取源码：`git@github.com:tsichiro/roadofvaccine.git`
3. 导入疫苗数据到Mongodb，数据在[csv](csv)中，操作详见[src/import.sh](src/import.sh)
4. 启动服务，`node vaccine.js`。若想修改查询逻辑，详见[src/vaccine.js](src/vaccine.js)。
5. 使用浏览器查看效果。若想修改产商和展示效果，修改 [src/vaccine.html](src/vaccine.html)中的companies等。

欢迎 Star 和 Fork ~

如果你有什么问题，欢迎关注我的微信公众号留言，我都会一一解答

![](screenshot/qrcode_tsichiro11.jpg)



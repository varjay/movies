基于Node.js+MongoDB+Express搭建的电影网站
==========================================

简介:
---------------
本项目电影是由Node.js完成，项目的controller、models、schemas、views进行了重写，提高了阅读性和维护性，增加了微信公众账号的后台，后期将整合微信项目和电影项目，以下内容可供参考:

**1. 项目后端搭建:**
  * 使用`NodeJs的express和koa`框架完成电影网站后端搭建;
  * 使用`mongodb`完成数据存储,通过`mongoose`模块完成对`mongodb`数据的构建;
  * 使用`jade`与`ejs`模板引擎完成页面创建渲染;
  * 使用`Moment.js`格式化电影存储时间;

**2. 项目前端搭建:**
  * 使用`jQuery`和`Bootsrap`完成网站前端JS脚本和样式处理;

**3. 网站整体功能:**
  * 豆瓣电影数据整合;
  * 具有用户注册登录及管理;
  * 电影电影院信息录入和搜索;
  * 电影分类添加;
  * 电影图片海报等数据的同步;
  * 列表分页处理;

运行环境及Node版本:
-------
目前在Mac下的node 4.2.x版本运行正常

安装:
----
- 安装mongodb(https://www.mongodb.org/downloads#production)完成相关配置;
- 在当前项目目录中使用npm install命令安装相关模块(<a href="http://npm.taobao.org/" target="\_blank">如果模块下载速度慢可考虑使用淘宝cnpm镜像进行下载</a>);

后期完善:
-------
1. 整合微信账号与电影网站;
2. 增加电影影人详情页;
3. 分类扩展;

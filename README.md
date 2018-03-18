个人实战Vue项目:
day01:
需要自己记住的
  (1)、main.js中import语句要与下方new Vue相对应的大小写一致。否则会报错无法执行。
  (2)、项目开启,先搭建路由(在src/pages下创建4个路由(也就是最直观看到的最下方的4个选项，
  分别是首页、分类、购物车、我的e宠))
  (3)、创建router文件,在router文件下创建index.js文件,也就是路由器模块.

自己的不足:
  (1)、布局生疏
  当前的这种项目,在狗狗搜索栏这里今天试了很多遍都没有试出结果。浪费了很多时间。

解决方案:
    像当前的这种项目,在狗狗搜索栏这里解决这种样式问题。需要知道一些知识点。
  (1)你用stylus你就必须把元素之间的层级关系搞好。不能弄乱，否则非常容易出错。
  (2)像今天这种左边是狗狗|重庆(还有个倒三角),中间搜索框与icon-search放大镜,右边icon-msg消息盒子这种。
   在布局上，应该先将左侧的"狗狗|重庆(还有个倒三角)"放在一个div盒子里，中间的搜索框与放大镜放在同一个div盒子里。
   右侧的icon-msg放在一个div里。这样最起码，无论你之后又用float浮动布局，还是用flex伸缩盒模型去布局。这样都易于
   设计。所以，以后多种类似的，可参考今天的这种布局方案。
  (3)今天的这个项目用的是flex伸缩盒模型做的布局。如何做的？
     1、给父元素设置display:flex。然后，
      在处理input标签的时候，套input的div父元素的高度要与input的行高一样。同时，给input标签设置怪异盒模型
      box-sizing:border-box。为什么这么做。因为当input标签与父元素div高度同样时。因为input标签本身自带一定的
      内边距。所以。此时设置"box-sizing:border-box",目的就是为了让其向内收缩。记住这个套路。
     2、父元素开启flex伸缩盒模型，其子元素可以设置百分比来占据合适的像素。同时，根据上面这一条，我们可以给父元素
      设置好例如高度行高这些性质后，其子元素想继承父元素的高度可设置inherit。例如今天input标签的height:inherit。
      这样他就可继承父元素的相对属性
     3、在设置今天导航栏属性的伪元素，尤其是其位置是。可以通过给父元素开启相对定位，给子元素开启绝对定位这种方式。
      在处理狗狗城市最右侧的三角的时候，可以通过伪元素的形式，像如下代码。content为空，设置绝对定位(因为其父元素已
      开启相对定位)。并且border-color设置相对位置的颜色(如下代码所示)。就能设置指定方位的三角样式
      &::before
                content ''
                position absolute
                border 5px solid;
                border-color:red transparent transparent;
                right 7px
                top 5px
     4、还有，如果碰到像今天这种放大镜无法呈现出在搜索框内的这种效果。那么，可以给其共同的父元素设置背景颜色。这样
      就可以达到一定的“以假乱真”的效果。
     5、要记住stlyus的正确使用方式
当前进度:
    只完成了首页的4个路由组件，剩下页面写的不好

遗留问题:
	速度慢，要加快速度


day02:
	(1)刚刚做完分类栏，基本效果已出。但是滑动效果还未处理。
	(2)今天在艰难的在同学的帮忙下做完了swiper轮播之后，又遇到了新的问题:即轮播下面的图查完之后，拖动这个页面
	上方导航栏要么消失，要么显示。

	遗留问题:
	  导航分类栏滑动未处理。


	需要注意的问题
	  (1)编写代码的时候要足够细心。不然写错或是多写了之类都会出错。要细心写代码
	  (2)在用Swiper写轮播图的时候，因为自己的样式处理的不好以及粗心。出现了拉弹簧效果。
	  (3)写完轮播图后，写下面的图片时。要记得去App.vue组件里设置图片样式
	  (4)在搞完头部导航栏，下面的轮播图及其图片后。拖动整个页面上滑会显示出头部导航栏”不稳定(显示或隐藏)“的问题。
	  给头部导航栏设置一个z-index:100即可解决这种层级问题。
	  (5)在做到拉弹簧效果时，出现了丑陋的“消失”bug。究其原因，是因为我在处理第一个轮播图时用的类名和第二个相同
	  冲突了(因为swiper的原因，每个轮播都需要带swiper-container这么个类名)。所以记住。再用swiper写轮播的时候。
	  每个轮播之间的类名不要用同一个
	  (6)多练习。争取有进步

  当前进度
    目前在做首页每日疯抢那一块，有点浮动问题暂时未处理，争取今天把首页搞完
    animation: myAnimation 1s 2s linear normal infinite;
    animation-name
    animation-duration
    animation-delay
    animation-timing-function  steps()
    animation-iteration-count (次数)
    *animation-direction
    *animation-fill-mode
    *animation-play-state


day03:
    当前进度:
      首页与第二页静态页面基本搞完

    不足:
      感觉布局还是有点不熟练。不过今天该实现的效果基本都实现了

    需要记住:
      (1)有时候有些实现过的效果再看时出现异常。极有可能出现“丢包”这个故障。这个时候把原来残留的swiper包
      卸载掉。重新下载。或许可以解决
      (2)有时候从后台引入数据到前台显示。但是没有显示。看vuex插件或是显示undefined。那么此时极有可能
      出现非常Low的错误。就是入口文件那里你没有引入Mockjs(或是相关文件)。要足够细心。
      (3)sometimes you need to throw something(What include you should know it)
      有些命令需要记住:
      npm install --save vuex 下载vuex
      npm install mockjs --save 引入mockjs
      npm install --save axios  引入axios用来前后台交互ajax
      卸载包
      npm r 报名例如:
      npm r swiper


day04:
    今天遇到的问题:
    (1)轮播处理不当。在v-for遍历数据的时候。要清楚数据的一个“整体结构”。比如刚刚碰到的轮播。最开始的
    时候。你在div里v-for只写了v-for="(pics,index) in dog_banner"。请记住,data.json里对应的
    对象名称叫homepage。像第二行的这种写法。你没有个homepage(homepage.dog_banner)。绝对是错误的
    所以,记住。下次有类似情况。引用数据一定要"引齐"。
    (2)Vue中基本的前后端交互流程。前台动态获取数据，发送ajax请求，action异步获取数据,commit到mutations。
    更新state中相对应的数据。最后通过mapState获取Vuex Store中更新好的state数据。然后任何一个组建中获得
    state中更新好的数据。即可数据读取

    (3)有关首页10个服务(图片)的数据遍历。你需要知道(其实第一个轮播图片的时候你就应该知道)。除了第(1)
    条提到的(这也算是对第(1)条进行完善),你在v-for遍历之后,你需要在(在有的情况下)图片链接处(将src变成
    :src,这点必须做。这叫动态链接):src处写上v-for中相对应的"数据"。比如
    v-for="(pics,index) in homepage.dog_banner"中的图片链接,你需要写<img :src="pics" >
    v-for="(value,index) in homepage.menu_list"中的图片链接,你需要写<img :src="value" >
    (4)说一下首页那几个轮播实现的原理。因为那几个轮播(或是拉弹簧)都是用的swiper,

<div class="all">
              <img src="../pinpai/all.png" alt="">
            </div>


day05
  当前进度:
    因为昨天第二页页面机构出问题，所以第二页的数据交互拖到了day05.第二页在组长的帮助下快完成了

    不足:页面布局，数据交互

    进度:
    在组长的帮助下布局已完成，第二页的数据交互今天也即将完成




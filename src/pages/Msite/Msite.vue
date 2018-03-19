<template>
  <div class="app" ref="all">
    <div class="xiazaiapp" ref="high">
      <!--广告图片-->
      <div class="appImage">
        <span class="ggClose" @click="hide" v-if="chazi">
          <img src="./image/close2.png" alt="">
        </span>
      <span class="ggRight" v-if="openTheDoor">
        <img src="./image/guanggao.jpg">
      </span>
      </div>

      <!--导航-->
      <div class="guide">

        <!--左侧地理位置-->
        <div class="petcity">
          <span class="wenzi">狗狗</span>
          <span class="wenzi">|</span>
          <span class="wenzi">重庆</span>
        </div>

        <!--中间搜索框-->
        <div class="searchs">
          <input type="text" disabled="disabled" placeholder="搜索商品和品牌">
          <i class="searchInput iconfont icon-search"></i>
        </div>

        <!--右侧icon消息-->
        <div class="msg-box">
          <i class="iconfont icon-msg"></i>
        </div>
      </div>

      <!--搜索框下的分类导航栏-->
      <div class="serviceType swiper-container">
        <div class="swiper-wrapper">
          <div class="serviceItem swiper-slide" v-for="(menu,index) in homepage.menus" :key="index">
            <span class="text move " >{{menu.menu_name}}</span>
          </div>
        </div>
      </div>
    </div>

    <!--轮播-->
    <div class="special swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(pics,index) in homepage.dog_banner" :key="index">
          <img :src="pics" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!--紧贴轮播的静态图-->
    <div class="kpMoving">
      <img :src="homepage.dog_img" alt="">
    </div>

    <!--10个分功能-->
    <div class="ten">
      <!--上面5张图-->
      <div class="front">
        <div class="frontImg" v-for="(value,index) in homepage.menu_list">
          <img :src="value" alt="">
        </div>
      </div>
    </div>

    <!--秒杀图片1-->
    <div class="mKill">
      <img :src="homepage.miaosha" alt="">
    </div>

    <!--倒计时秒杀图片与文字-->
    <div class="crazyShopMarket">
      <!--左侧图片每日疯抢-->
      <div class="crazyShop">
        <img src="./image/crazyShop.png" alt="">
      </div>

      <!--右侧倒计时-->
      <div class="limit">
        下一场开始
        <span class="hour">16</span>
        <span>:</span>
        <span class="minute">00</span>
      </div>

      <!--更多-->
      <div class="more">
        <img src="./image/more.png" alt="">
      </div>
    </div>

    <!--倒计时秒杀商品-->
    <div class="fastKill swiper-container">

      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./image/goods01.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap">省8.91</span>
        </div>

        <div class="swiper-slide">
          <img src="./image/goods02.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap">省8.91</span>
        </div>

        <div class="swiper-slide">
          <img src="./image/goods03.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap">省8.91</span>
        </div>

        <div class="swiper-slide">
          <img src="./image/goods04.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap"> 省8.91</span>
        </div>

        <div class="swiper-slide">
          <img src="./image/goods05.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap">省8.91</span>
        </div>

        <div class="swiper-slide">
          <img src="./image/goods06.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap">省8.91</span>
        </div>

        <div class="swiper-slide">
          <img src="./image/goods07.jpg" alt="">
          <span class="price">￥0.99</span>
          <span class="cheap">省8.91</span>
        </div>
      </div>
    </div>

    <!--品牌力量-->
    <div class="power">
      <img :src="homepage.brand_power" alt="">
    </div>

    <!--多人动态图-->
    <div class="people">
      <img :src="homepage.gif" alt="">
    </div>

    <!--vip-->
    <div class="vip">
      <img :src="homepage.vip" alt="">
    </div>

    <!--综合服务-->
    <div class="serviceArea">
      <div class="areaUp" v-for="(area,index) in homepage.vip_services">
        <div class="areaUpPics"><img :src="area" alt=""></div>
      </div>
    </div>

    <!--大牌1折-->
    <div class="dapai01">
      <img :src="homepage.dapaituan" alt="">
    </div>

    <!--大牌轮播-->
    <div class="dpLunbo swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(dapai,index) in homepage.dapaituan_list">
          <img :src="dapai" alt="">
        </div>
      </div>
    </div>

    <!--大牌好货-->
    <div class="dpGoods">
      <img :src="homepage.haohuo" >
    </div>

    <!--many pictures-->
    <div class="picsArea">
      <div class="picsF">
        <div class="fourtyPics" v-for="(many,index) in homepage.haohuo_list" :key="index">
          <img :src="many">
        </div>
        <!--<div class="fourtyPics" v-for="(each) in many.right">
          <img :src="each" alt="" class="pics">
        </div>-->
      </div>
    </div>

    <!--最惨奖-->
    <div class="zuican">
      <img :src="homepage.zuican" alt="">
    </div>

    <!--dog-->
    <div class="dog">
      <img :src="homepage.zuican_content" alt="">
    </div>

    <!--特别星球-->
    <div class="tese">
      <img :src="homepage.special" alt="">
    </div>

    <div class="chaopin">
      <div class="cpSell" v-for="(star,index) in homepage.special_list">
        <img :src="star" alt="">
      </div>
    </div>

    <!--栏目-->
    <div class="lanmu">
      <img :src="homepage.lanmu" alt="">
    </div>

    <!--colorful-->
    <div class="colorful">
      <div class="stair01" v-for="(list,index) in homepage.lanmu_list">
        <div class="stairsPics"><img :src="list" alt=""></div>
      </div>
    </div>

    <!--HeaderFinal-->
    <footer>
      <div class="nav ">
        <span class="on">触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
        <span>&#169wap.epet.com 版权:</span>
        <span>重庆易宠科技有限公司</span>
      </div>
    </footer>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
          openTheDoor:true,
          chazi:true
      }
    },

    mounted(){

      this.$store.dispatch('getHomepage',() =>{

          this.$nextTick( () =>{

            //首页第一个轮播
            new Swiper('.special',{
              loop:true,
              autoplay:true,
              delay:300,
              pagination:{
                el:'.swiper-pagination',
                clickable:true
              }

            });

            //第一个分类导航
            new Swiper('.serviceType', {
              slidesPerView: 'auto',
              spaceBetween: 10,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            })

            //秒杀拉弹簧
            new Swiper('.fastKill', {
              slidesPerView:3.5,
              spaceBetween:30,
            })

            //大牌轮播
            new Swiper('.dpLunbo', {
              loop:true,
              autoplay:true,
              delay:300,
              pagination:{
                el:'.swiper-pagination',
                clickable:true
              }
            })

            //（1）前台页面动态获取数据，发送ajax请求、然后action异步获取数据,接着commit到mutations。更新state中
            //相对应的数据。在任何一个组建中获得state中更新好的数据。然后进行数据读取

          })
      })

    },
    computed:{
      ...mapState(['homepage'])
    },

    methods:{
        hide(){
          this.openTheDoor = false
          this.chazi = false
          this.$refs.all.style.marginTop = -60 + 'px'
          this.$refs.high.style.height = 77 + 'px'
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"
  #app
    width 100%
    height 100%
    background #ffffff
    .xiazaiapp
      background #ffffff
      height 137px
      width 100%
      position fixed
      left 0
      right 0
      top 0
      z-index 100
      .appImage
        width 100%
        .ggClose
          width 5%
          height 5%
          position absolute
          top 19px
          left 14px
          >img
            width 20px
            height 20px
            background transparent
            border-radius 50%
            border 1px solid #f6f1f1
        .ggRight
          display block
          width 100%
          >img
            width 100%
      .guide
        color #898989
        background-color #ffffff
        font-size 14px
        width 100%
        margin-top 10px
        display flex
        justify-content space-around
        height 25px
        line-height 25px
        .petcity
          flex 25%
          position relative
          &::before
            content ''
            position absolute
            border 5px solid;
            border-color:red transparent transparent;
            right 7px
            top 5px
        .searchs
          flex 60%
          background #E9E9E9
          position relative
          &::before
            position relative
            right -20px
          input
            box-sizing border-box
            background #E9E9E9
            height inherit
        .msg-box
          padding-left 15px
          flex 15%
          .icon-msg
            font-size 25px
            margin-left 5px


      .serviceType
        display flex
        margin-top 20px
        width 100%
        .swiper-wrapper
          .serviceItem
            flex 1
            display flex
            justify-content center
            white-space nowrap
            margin-left 23px
            span
              color #666666
              height 20px
              padding-bottom 5px
              &.current
                color #6AB15E
                height 200px
                padding 0

    .special
      margin-top 137px
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          >img
            display block
            width 100%
            height 100%

    .kPmoving
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .ten
      width 100%
      height 100%
      .front
        width 100%
        height 100%
        .frontImg
          width 20%
          height 100%
          float left
        >img
          width 100%
          height 100%
          display block
      .behind
        width 100%
        height 100%
        .behindImg
          width 20%
          height 100%
          float left
    .mKill
      width 100%
      height 100%
      >img
        display block
        width 100%
        height 100%
    .crazyShopMarket
      height 24px
      line-height 24px
      padding-top 10px
      background #ffffff
      clearFix()
      .crazyShop
        float left
        width 24%
      .limit
        float left
        width 45%
        text-align right
        margin-left 13%
        font-size 13px
        .hour
          border 1px solid
        .minute
          border 1px solid
      .more
        float left
        width 18%
      img
        vertical-align middle
    .fastKill
      padding-bottom 10px
      background #ffffff
      width 100%
      .swiper-wrapper
        .swiper-slide
          text-align center
          .price
            display block
            color red
          .cheap
            font-size 13px
            color: #aaa
    .partGoods
      width 100%
      height 100%
      .goods
        width 84px
        height 130px
        float left
        .swiper-slide
          width 100%
          height 100%
        >img
          width 100%
          height 100%


    .power
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .people
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .vip
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .serviceArea
      width 100%
      height 100%
      .areaUp
        width 100%
        height 100%
        .areaUpPics
          width 50%
          height 100%
          float left
          >img
            width 100%
            height 100%
            display block
      .areaDown
        width 100%
        height 100%
        .areaDownPics
          width 50%
          height 100%
          float left
          >img
            width 100%
            height 100%
            display block


    .dapai01
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .dpLunbo
      width 100%
      .swiper-wrapper
        .swiper-slide
          text-align center
    .dpGoods
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block

    .picsArea
      width 100%
      height 100%
      .picsF
        width 100%
        height 100%
        overflow hidden
        .fourtyPics
          width 50%
          float left
          height 225px
          box-sizing border-box
          >img
            width 100%
            height 100%
            display block

    .zuican
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .dog
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .tese
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .chaopin
      width 100%
      height 100%
      .cpSell
        width 50%
        height 100%
        float left
        >img
          width 100%
          height 100%
      .huoDong
        width 50%
        height 100%
        float right
        >img
          width 100%
          height 100%
    .lanmu
      width 100%
      height 100%
      >img
        width 100%
        height 100%
        display block
    .colorful
      width 100%
      height 100%
      overflow hidden
      padding-bottom 46px
      .stair01
        width 100%
        height 100%
        .stairsPics
          float left
          width 50%
          height 100%
          >img
            width 100%
            height 118px
            display block
    footer
      padding-bottom 35px
      position relative
      bottom 46px
      overflow hidden
      background #ffffff
      .nav
        text-align center
        vertical-align middle
        position relative
        top 18px
        line-height 22px
        &::on
          color red


</style>

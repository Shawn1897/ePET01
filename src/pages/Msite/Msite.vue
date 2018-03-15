<template>
    <div>
      <div class="xiazaiapp">
        <!--广告图片-->
        <div class="appImage">
      <span class="ggRight">
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
        <div class="serviceType">
          <div class="serviceItem"><span class="text move">首页</span></div>
          <div class="serviceItem"><span class="text">狗狗主粮</span></div>
          <div class="serviceItem"><span class="text">服饰城</span></div>
          <div class="serviceItem"><span class="text">医疗保健</span></div>
          <div class="serviceItem"><span class="text">零食玩具</span></div>
          <div class="serviceItem"><span class="text">日用外出</span></div>
          <div class="serviceItem"><span class="text">美容香波</span></div>
        </div>
      </div>

      <!--轮播-->
      <div class="special swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./image/swiper01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./image/swiper02.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./image/swiper03.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./image/swiper04.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./image/swiper05.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./image/swiper06.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!--紧贴轮播的静态图-->
      <div class="kpMoving">
        <img src="./image/keepmoving.jpg" alt="">
      </div>

      <!--10个分功能-->
      <div class="ten">
        <!--上面5张图-->
        <div class="front">
          <div class="frontImg"><img src="./image/ePet01.jpg" alt=""></div>
          <div class="frontImg"><img src="./image/ePet02.jpg" alt=""></div>
          <div class="frontImg"><img src="./image/ePet03.jpg" alt=""></div>
          <div class="frontImg"><img src="./image/ePet04.jpg" alt=""></div>
          <div class="frontImg"><img src="./image/ePet05.jpg" alt=""></div>
        </div>

        <!--下面5张图-->
        <div class="behind">
          <div class="behindImg"><img src="./image/ePet06.jpg" alt=""></div>
          <div class="behindImg"><img src="./image/ePet07.jpg" alt=""></div>
          <div class="behindImg"><img src="./image/ePet08.jpg" alt=""></div>
          <div class="behindImg"><img src="./image/ePet09.jpg" alt=""></div>
          <div class="behindImg"><img src="./image/ePet10.jpg" alt=""></div>
        </div>
      </div>

      <!--秒杀图片1-->
      <div class="mKill">
        <img src="./image/miaosha.jpg" alt="">
      </div>

      <!--倒计时秒杀图片与文字-->
      <div class="crazyShopMarket">
        <!--左侧图片每日疯抢-->
        <div class="crazyShop">
          <img src="./image/crazyShop.png" alt="">
        </div>

        <!--右侧倒计时-->
        <div class="limit">
          <span>下一场开始 16:00</span>
          <img src="./image/more.png" alt="">
        </div>
      </div>

      <!--倒计时秒杀商品-->
      <div class="partGoods">
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
            <p>省8.91</p>
        </div>
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
          <p>省8.91</p>
        </div>
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
          <p>省8.91</p>
        </div>
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
          <p>省8.91</p>
        </div>
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
          <p>省8.91</p>
        </div>
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
          <p>省8.91</p>
        </div>
        <div class="goods">
          <div class="goodsPic">
            <img src="./image/goods01.jpg" alt="">
          </div>
          <div class="price">
            <span>￥0.99</span>
          </div>
          <p>省8.91</p>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default{
        mounted(){
          new Swiper('.swiper-container',{
            loop:true,
            autoplay:true,
            delay:300,
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            }

          })
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

    .swiper-container
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
      //display flex
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
      clearFix()
      .crazyShop
        width 24%
        float left
        >img
          display block
          width 85px
          height 19px
      .limit
        float right
        span
          display block
          float left
          color black
          width 100%
          height 100%
        img
          display block
          float left
          width 68px
          height 34px
    .partGoods
      width 100%
      .goods
        float left
        width 84px
        height 84px
</style>

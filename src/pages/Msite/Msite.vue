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
        <img src="./image/power.jpg" alt="">
      </div>

      <!--多人动态图-->
      <div class="people">
        <img src="./image/people.gif" alt="">
      </div>

      <!--vip-->
      <div class="vip">
        <img src="./image/vip.jpg" alt="">
      </div>

      <!--综合服务-->
      <div class="serviceArea">
        <div class="areaUp">
          <div class="areaUpPics"><img src="./image/service/vstar.jpg" alt=""></div>
          <div class="areaUpPics"><img src="./image/service/hospital.jpg" alt=""></div>
        </div>
        <div class="areaDown">
          <div class="areaDownPics"><img src="./image/service/around.jpg" alt=""></div>
          <div class="areaDownPics"><img src="./image/service/treat.jpg" alt=""></div>
        </div>
      </div>

      <!--大牌1折-->
      <div class="dapai01">
        <img src="./image/dpLunbo/dapai01.jpg" alt="">
      </div>

      <!--大牌轮播-->
      <div class="dpLunbo swiper-container">

        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./image/dpLunbo/dp01.jpg" alt="">
          </div>

          <div class="swiper-slide">
            <img src="./image/dpLunbo/dp02.jpg" alt="">
          </div>

          <div class="swiper-slide">
            <img src="./image/dpLunbo/dp03.jpg" alt="">
          </div>

          <div class="swiper-slide">
            <img src="./image/dpLunbo/dp04.jpg" alt="">
          </div>

          <div class="swiper-slide">
            <img src="./image/dpLunbo/dp05.jpg" alt="">
          </div>

          <div class="swiper-slide">
            <img src="./image/dpLunbo/dp06.jpg" alt="">
          </div>
        </div>
      </div>

      <!--大牌好货-->
      <div class="dpGoods">
        <img src="./image/dpLunbo/dapai02.jpg" alt="">
      </div>

      <!--many pictures-->
      <div class="picsArea">
        <div class="picsF">
          <div class="fourtyPics">
            <img src="./image/fourty/fourty01.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty02.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty03.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty04.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty18.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty06.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty07.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty08.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty09.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty10.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty11.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty12.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty13.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty14.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty15.jpg" alt="" class="pics">
          </div>
          <div class="fourtyPics">
            <img src="./image/fourty/fourty17.jpg" alt="" class="pics">
          </div>
        </div>
      </div>

      <!--最惨奖-->
      <div class="zuican">
        <img src="./image/end/zuican.jpg" alt="">
      </div>

      <!--dog-->
      <div class="dog">
        <img src="./image/end/liedog.jpg" alt="">
      </div>

      <!--特色-->
      <div class="tese">
        <img src="./image/end/xingqiu.jpg" alt="">
      </div>

      <div class="chaopin">
        <div class="cpSell">
          <img src="./image/end/aroundSell.jpg" alt="">
        </div>
        <div class="huoDong">
          <img src="./image/end/cpVideo.jpg" alt="">
          <img src="./image/end/mzlm.jpg" alt="">
        </div>
      </div>

      <!--栏目-->
      <div class="lanmu">
        <img src="./image/end/tese.jpg" alt="">
      </div>

      <!--colorful-->
      <div class="colorful">
        <div class="stair01">
          <div class="stairsPics"><img src="./image/stairs/stairs01.jpg" alt=""></div>
          <div class="stairsPics"><img src="./image/stairs/stairs02.jpg" alt=""></div>
          <div class="stairsPics"><img src="./image/stairs/stairs03.jpg" alt=""></div>
          <div class="stairsPics"><img src="./image/stairs/stairs04.jpg" alt=""></div>
          <div class="stairsPics"><img src="./image/stairs/stairs05.jpg" alt=""></div>
          <div class="stairsPics"><img src="./image/stairs/stairs06.jpg" alt=""></div>
        </div>
      </div>

      <!--HeaderFinal-->
      <footer>
        <div class="nav on">
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
    export default{
        mounted(){
          new Swiper('.special',{
            loop:true,
            autoplay:true,
            delay:300,
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            }

          });

          new Swiper('.fastKill', {
            slidesPerView:3.5,
            spaceBetween:30,
          })

          new Swiper('.dpLunbo', {
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
        .fourtyPics
          width 50%
          height 100%
          float left
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
      .stair01
        width 100%
        height 100%
        .stairsPics
          float left
          width 50%
          height 100%
          >img
            width 100%
            height 100%
            display block
    footer
      padding 80px 0
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

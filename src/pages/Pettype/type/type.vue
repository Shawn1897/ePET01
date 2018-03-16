<template>
    <div class="type">

      <!--左侧分类-->
      <div class="menu-Wrapper">
        <ul >

          <li class="menu-item current">
          <span class="text bottom-border-1px">
            为您推荐
          </span>
          </li>
          <li class="menu-item ">
          <span class="text bottom-border-1px">
            狗狗主粮
          </span>
          </li>
          <li class="menu-item ">
          <span class="text bottom-border-1px">
            狗狗零食
          </span>
          </li>
          <li class="menu-item ">
          <span class="text bottom-border-1px">
            狗狗服饰
          </span>
          </li>
        </ul>
      </div>

      <!--右侧商品-->
      <div class="foods-Wrapper">
        <ul class="foods-WrapperUl">
          <h1 class="hotType">热门分类</h1>
          <li class="food-list food-list-hook">
            <img src="../pinpai/food01.jpg" alt="">
            <p>进口狗粮</p>
          </li>
          <li class="food-list food-list-hook">
            <img src="../pinpai/food01.jpg" alt="">
            <p>进口狗粮</p>
          </li>
          <li class="food-list food-list-hook">
            <img src="../pinpai/food01.jpg" alt="">
            <p>进口狗粮</p>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .type
    display: flex
    position: absolute
    top: 42px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-Wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 30px
        width: 66px
        padding: 12px 12px
        line-height: 29px
        background #ffffff
        &.current
          position relative
          top 1px
          z-index 10
          margin-top -1px
          background #f3f4f5
          color: red
          font-weight: 700
    .foods-Wrapper
      width 80%
      height 100%
      margin-left 13px
      background #ffffff
      .foods-WrapperUl
        .food-list
          float left
          display block
          width 32%
          height 100%
          text-align center
</style>

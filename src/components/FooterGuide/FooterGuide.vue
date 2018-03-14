<template>
  <div class="footer_guide border-1px">
    <span class="guide_item" @click="goto('/msite')" :class="{on: $route.path == '/msite'}">
      <span class="item_icon">
        <i class="iconfont icon-shangcheng"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" @click="goto('/pettype')" :class="{on: $route.path == '/pettype'}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" @click="goto('/shopcar')" :class="{on: $route.path == '/shopcar'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="goto('/mine')" :class="{on: $route.path == '/mine'}">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的e宠</span>
    </span>
  </div>
</template>

<script>
    export default{
      methods:{
        goto(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 46px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #81BE75
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

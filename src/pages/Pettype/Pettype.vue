<template>
    <div>
      <div class="tab" >
        <div class="tab-item" >
          <router-link tag="span" to="/pettype/type" replace >分类</router-link>
        </div>
        <div class="tab-item">
          <router-link tap="span" to="/pettype/brand" replace >品牌</router-link>
        </div>
      </div>
      <router-view />
    </div>
</template>

<script>

    export default{
      data(){
          return {
              currentIndex:0
          }
      },
      methods:{
          getCurrentIndex(index){
              this.currentIndex = index
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .tab
    width 100%
    height 40px
    line-height 40px
    background #ffffff
    display flex
    justify-content center
    position fixed
    z-index 100
    .tab-item
      margin 0 20px
      .span
        font-size 13px
</style>

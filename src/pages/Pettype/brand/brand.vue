<template>
    <div class="brand">

      <div class="header01" v-for="(pinpai,index) in brand" :key="index">
        <div class="headerTitle">
          <span class="title">——{{pinpai.title}}—</span>
        </div>

        <div class="tj01" v-for="(list,index) in pinpai.list">
          <div class="tjpics">
            <img :src="list.logo" alt="">
            <p class="p1">{{list.name}}</p>
            <p class="p2">{{list.address}}</p>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default{
      mounted(){
          this.$store.dispatch('getBrand')
      },

      computed:{
        ...mapState(['brand'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brand
  width 100%
  height 100%
  background #ffffff
  .header01
    width 100%
    height 100%
    background #ffffff
    box-sizing border-box
    overflow hidden
    border-top 5px solid #f3f4f5
    .headerTitle
      width 100%
      height 100%
      text-align center
      margin-top 35px
      padding-top 15px
      padding-bottom 15px
    .tj01
      width 100%
      height 100%
      .tjpics
        width 30%
        height 100%
        margin-left 10px
        margin-bottom 15px
        float left
        >img
          display block
          border 1px solid #EAEAEA
        .p1
          text-align center
          font-size 13px
          line-height 15px
        .p2
          text-align center
          font-size 12px
          line-height 15px
          color #999999
  .header02
    width 100%
    height 100%
    background #ffffff
    box-sizing border-box
    border-top 10px solid #f3f4f5
    overflow hidden
    .headerTitle
      width 100%
      height 100%
      text-align center
      margin-top 6px
      padding-top 15px
      padding-bottom 15px
    .tj01
      width 100%
      height 100%
      .tjpics
        width 30%
        height 100%
        margin-left 10px
        margin-bottom 15px
        float left
        >img
          display block
          border 1px solid #EAEAEA
        .p1
          text-align center
          font-size 13px
          line-height 15px
        .p2
          text-align center
          font-size 12px
          line-height 15px
          color #999999
  .header03
    width 100%
    height 100%
    background #ffffff
    box-sizing border-box
    border-top 10px solid #f3f4f5
    overflow hidden
    .headerTitle
      width 100%
      height 100%
      text-align center
      margin-top 6px
      padding-top 15px
      padding-bottom 15px
    .tj01
      width 100%
      height 100%
      .tjpics
        width 30%
        height 100%
        margin-left 10px
        margin-bottom 15px
        float left
        >img
          display block
          border 1px solid #EAEAEA
        .p1
          text-align center
          font-size 13px
          line-height 15px
        .p2
          text-align center
          font-size 12px
          line-height 15px
          color #999999
  .header04
    width 100%
    height 100%
    background #ffffff
    box-sizing border-box
    border-top 10px solid #f3f4f5
    overflow hidden
    .headerTitle
      width 100%
      height 100%
      text-align center
      margin-top 6px
      padding-top 15px
      padding-bottom 15px
    .tj01
      width 100%
      height 100%
      .tjpics
        width 30%
        height 100%
        margin-left 10px
        margin-bottom 15px
        float left
        >img
          display block
          border 1px solid #EAEAEA
        .p1
          text-align center
          font-size 13px
          line-height 15px
        .p2
          text-align center
          font-size 12px
          line-height 15px
          color #999999
  .header05
    width 100%
    height 100%
    background #ffffff
    box-sizing border-box
    border-top 10px solid #f3f4f5
    overflow hidden
    .headerTitle
      width 100%
      height 100%
      text-align center
      margin-top 6px
      padding-top 15px
      padding-bottom 15px
    .tj01
      width 100%
      height 100%
      .tjpics
        width 30%
        height 100%
        margin-left 10px
        margin-bottom 15px
        float left
        >img
          display block
          border 1px solid #EAEAEA
        .p1
          text-align center
          font-size 13px
          line-height 15px
        .p2
          text-align center
          font-size 12px
          line-height 15px
          color #999999
  .header06
    width 100%
    height 100%
    background #ffffff
    box-sizing border-box
    border-top 10px solid #f3f4f5
    overflow hidden
    .headerTitle
      width 100%
      height 100%
      text-align center
      margin-top 6px
      padding-top 15px
      padding-bottom 15px
    .tj01
      width 100%
      height 100%
      .tjpics
        width 30%
        height 100%
        margin-left 10px
        margin-bottom 15px
        float left
        >img
          display block
          border 1px solid #EAEAEA
        .p1
          text-align center
          font-size 13px
          line-height 15px
        .p2
          text-align center
          font-size 12px
          line-height 15px
          color #999999
</style>

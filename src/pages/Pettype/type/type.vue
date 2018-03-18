<template>
    <div class="type">
      <!--左侧-->
      <div class="leftContent bottom-border-1px">
        <div class="leftList">
          <ul class="titleWrapper">
            <li class="titleItem" :class="{on: index === currentIndex}" v-for="(tap,index) in category" :key="index"
                @click="getCurrentIndex(index)">
              {{tap.name}}
            </li>
          </ul>
        </div>
      </div>

      <!--右侧商品-->
      <div class="brandContainer">
        <div class="brandList" v-for="(tap,index) in category" :key="index"
        v-if="currentIndex === index">
          <!--主粮3列-->
          <div class="mainFood">
            <div class="title">
              <span>{{tap.cate_list[0].title}}</span>
              <a class="lint-to">
                <span><i class="iconfont icon-quanbu"></i></span>
              </a>
            </div>
            <ul class="mainUl">
              <li class="mainList" v-for="(coca,index) in tap.cate_list[0].list">
                <img :src="coca.photo" >
                <span>{{coca.name}}</span>
              </li>
            </ul>
          </div>

       <!--热门2列-->
          <div class="popularFood">
            <p class="popularTitle">热门品牌</p>
            <ul class="popularUl">
              <li class="popularLi">
                <img src="../pinpai/food02.jpg" alt="">
                <span>天衡宝(原雪山)</span>
              </li>

            </ul>
          </div>-->
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default{
      data(){

        return{
            currentIndex:0
        }
      },
      mounted(){
          this.$store.dispatch('getCategory',() =>{

          })
      },

      computed:{
        ...mapState(['category'])
      },

      methods:{
          getCurrentIndex(index){
              this.currentIndex = index
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixins.styl"
  .type
    width 100%
    height 100%
    background #f5f5f5
    .leftContent
      width 100%
      height 100%
      padding-top 40px
      box-sizing border-box
      font-size 14px
      display flex
      .leftList
        width 20%
        height 100%
        .titleWrapper
          width 100%
          text-align center
          background #ffffff
          padding-bottom 50px
          display flex
          flex-direction column
          .titleItem
            padding 20px 0
            width 100%
            height 100%
            border-bottom 1px solid #f5f5f5
            &.on
              background #f5f5f5

    .brandContainer
      width 80%
      height 100%
      margin 5px 0 0 6px
      position absolute
      top 0
      right 0
      .brandList
        width 100%
        background #ffffff
        box-sizing border-box
        padding 10px 10px
        .mainFood
          bottom-border-1px(#f5f5f5)
          width 100%
          margin 10px 0
          .title
            width 100%
            display flex
            justify-content space-between
            margin-top 45px
            .link-to
              display block
              margin-left 140px
              font-size 10px

          .mainUl
            width 100%
            display flex
            justify-content flex-start
            text-align center
            padding-bottom 10px
            flex-wrap wrap //多余出来的自动换行
            .mainList
              width 33.333%
              margin 10px 0
              >img
                width 87px
                height 87px
                display block
                margin-bottom 10px

        .popularFood
          width 100%
          margin 30px 0
          .popularTitle
            color #999
            text-align left
          .popularUl
            width 100%
            display flex
            flex-wrap wrap
            justify-content space-between
            margin-left 11px
            .popularLi
              width 48%
              height 100px
              text-align center
              font-size 14px
              margin-bottom 45px
              >img
                display block
                width 80%
                border 1px solid #ddd
                paddng 5px 10px
</style>

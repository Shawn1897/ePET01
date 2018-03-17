<template>
    <div class="type">

      <!--左侧分类-->
      <div class="menu-Wrapper">
        <ul >
          <li class="menu-item current" v-for="(names,index) in category" :key="index">
          <span class="text bottom-border-1px">
            {{names.name}}
          </span>
          </li>
        </ul>
        <div class="empty">

        </div>
      </div>

      <!--右侧商品-->
      <!--<div class="foods-Wrapper" v-for="(obj,index) in category" :key="index">-->
        <!--<ul class="foods-WrapperUl" v-for="(cate,index) in obj.cate_list">-->
          <!--<a>{{cate.title}}</a>-->
          <!--<li class="food-list food-list-hook" v-for="(list,index) in cate">-->
            <!--<img :src="list.photo || list.logo" alt="">-->
            <!--<p>{{list.name}}</p>-->
          <!--</li>-->

        <!--</ul>-->
      <!--</div>-->
      <div class="foods-Wrapper">

        <!-- 放三列的 -->
        <div>
          <!-- 上方文字 -->
          <div>

          </div>

          <!-- 下方图片 -->
          <div>
            <!-- 包裹图片和描述 -->
              <div>
                <div>
                  <img src="" alt="">
                </div>
                <p></p>
              </div>
          </div>

        </div>

        <!-- 放两列的 -->
        <div>

        </div>
      </div>

    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default{
      mounted(){
          this.$store.dispatch('getCategory',() =>{

          })
      },

      computed:{
        ...mapState(['category'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .type
    display: flex
    top: 42px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-Wrapper
      width:20%
      background: #f3f5f7
      >div
        height 46px
        width 100%
      .menu-item
        width 100%
        height: 30px
        padding: 12px 12px
        line-height: 29px
        background #ffffff
        &.current
          margin-top -1px
          background #f3f4f5
          color: red
          font-weight 700
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
          .foods-WrapperUlItemThree
            >a
              display block
              .food-item
                .imgBox
                  float left
                  >img
                    display block


</style>

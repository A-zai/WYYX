<template>
  <div class="things-container">
    <!-- 头部 -->
    <div class="hdTop border-1px">
      <div class="hd">
        <i class="iconfont iconshouye" @click="goHome()"></i>
        <div class="header-content">
          <div  @click="isFond=true;$router.replace('/things/find')">
            <span class="font" :class="{active:isFond}">发现</span>
          </div>
          <div @click="isFond=false;$router.replace('/things/ordershow')">
            <span class="font" :class="{active:!isFond}">甄选家</span>
          </div>
        </div>
        <div class="icons">
          <i class="iconfont iconicon" @click="goSearch()"></i>
          <i class="iconfont iconaui-icon-cart" @click="goShopCart()"></i>
        </div>
      </div>
    </div>
    <!--推荐好物  -->
    <div class="TJul border-1px">
      <Recommend/>
    </div>
    
    <!-- 主要内容 -->
    <div class="things_content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Recommend from './Recommend/Recommend'
  export default {
    data() {
      return {
        isFond:true
      }
    },
    methods: {
      goHome(){
        this.$router.replace('/home')
      },
      goSearch(){
        this.$router.push('/search')
      },
      goShopCart(){
        this.$router.replace('/shopCart')
      }
    },
    components:{
      Recommend,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .things-container
    width 100%
    display flex
    flex-direction column
    .hdTop
      display flex
      width 100%
      height 60px
      background-color #fafafa
      bottom-border-1px(#333)
      z-index 99
      .hd
        display flex
        justify-content space-between
        align-items center
        width 100%
        padding 0 9px 0 6px
        .iconfont
          font-size 30px
        .iconshouye
          width 15%
          height 100%
          line-height 60px
          text-align center
        /*发现与甄选家  */
        .header-content
          display flex
          justify-content space-around
          line-height 65px
        .font
          padding 0 10px 0 10px
          font-size 20px
          color #7F7F7F
          &.active 
            font-weight bold
            font-size 28px
            color #b4282d
        .icons
          display flex
          justify-content space-around
          width 20%
          height 100%
          line-height 60px
          .iconaui-icon-cart
            font-size 40px
    .TJul
      display flex
      width 100%
      height 50px
      bottom-border-1px(#333)
      z-index 99
      background-color #fff
    //   .TJul-list
    //     display flex
    //     align-items center
    //     flex-wrap nowrap
    //     padding-bottom 8px
    //     height 50px
    //     .TJul-item
    //       height 50px
    //       line-height 50px
    //       padding 0 2px 0 2px
    //       margin 0 8px 0 8px
    //       box-sizing border-box
    //       font-size 20px
    //       color #7f7f7f
    //       vertical-align middle //设置元素垂直对齐方式 该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高
    //       &.active 
    //         color $red
    //         border-bottom 3px solid $red
    .things_content
      width 100%
      // height 1000px
      min-height 911px
      box-sizing border-box
      padding 0 0 75px 0
</style>

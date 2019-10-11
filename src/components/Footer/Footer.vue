<template>
   <footer id="footer_box">
    <ul class="footer_nav" border-1px>
      <li class="footer-item" :class="{active: $route.path === '/home'}" v-on:click="$router.replace('/')">
        <i class="u-icon" :class="$route.path === '/home' ? 'u-icon-tabBar-index-active' : 'u-icon-tabBar-index'"></i>
        <span class="txt">首页</span>
      </li>
      <li class="footer-item" :class="{active: $route.path.includes('/classify')}" v-on:click="$router.replace('/classify')">
        <i class="u-icon" :class="$route.path.includes('/classify') ? 'u-icon-tabBar-cate-active' : 'u-icon-tabBar-cate'"></i>
        <span class="txt">分类</span>
      </li>
      <li class="footer-item" :class="{active: $route.path.includes('/things')}" v-on:click="$router.replace('/things/find/tuijian')">
        <i class="u-icon" :class="$route.path.includes('/things') ? 'u-icon-tabBar-topic-active' : 'u-icon-tabBar-topic'"></i>
        <span class="txt">识物</span>
      </li>
      <li class="footer-item" :class="{active: $route.path === '/shopCart'}" v-on:click="$router.replace('/shopCart')">
        <i class="u-icon" :class="$route.path === '/shopCart' ? 'u-icon-tabBar-cart-active' : 'u-icon-tabBar-cart'"></i>
        <span class="txt">购物车</span>
      </li>
      <li class="footer-item" v-on:click="$router.replace('/profile')">
        <i class="u-icon" :class="$route.path === '/profile' ? 'u-icon-tabBar-ucenter-active' : 'u-icon-tabBar-ucenter'"></i>
        <span class="txt">个人</span>
      </li>
    </ul>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  /* 底部导航 */
  #footer_box
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    bottom: 0
    width 100%
    height: 75px
    z-index 99
    background-color #fafafa
    .footer_nav
      display flex
      width 100%
      height: 100% 
      justify-content space-around
      align-items center
      .footer-item
        display flex
        flex-direction column
        text-align center
        &.active
          color $red
        .u-icon
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
      
        .u-icon-tabBar-index
          background-position: 0 -250px
      
        .u-icon-tabBar-index-active
          background-position: 0 -200px
      
        .u-icon-tabBar-cate
          background-position: 0 -150px
      
        .u-icon-tabBar-cate-active
          background-position: 0 -100px
      
        .u-icon-tabBar-topic
          background-position: 0 -350px
      
        .u-icon-tabBar-topic-active
          background-position: 0 -300px
  
        .u-icon-tabBar-cart-active
          background-position: 0 0
          
        .u-icon-tabBar-cart
          background-position: 0 -50px
          
        .u-icon-tabBar-ucenter
          background-position: 0 -450px
  
        .u-icon-tabBar-ucenter-active
          background-position: 0 -400px
      
          .txt
            display block
            font-size 14px
            margin-top 7px
            color #666
</style>

<template>
  <div class="TJul border-1px">
    <ul class="TJul-list">
      <li class="TJul-item" :class="{active:'/things/find/tuijian' === $route.path}">
        <span class="text"
          @click="goTo('/things/find/tuijian')"
        >推荐</span>
      </li>
      <li class="TJul-item" :class="{active:'/things/find/good' === $route.path}">
        <span class="text" @click="goGood('/things/find/good')">好货内部价</span>
      </li>
      <li class="TJul-item" :class="{active:'/things/find/shaiD' === $route.path}">
        <span class="text" @click="goShaiD('/things/find/shaiD')">晒单</span>
      </li>
      <li class="TJul-item" :class="{active:'/things/find/xuangou' === $route.path}">
        <span class="text"  @click="goXuanG('/things/find/xuangou')">选购指南</span>
      </li>
      <li class="TJul-item" :class="{active:'/things/find/huigo' === $route.path}">
        <span class="text"  @click="goHuiG('/things/find/huigo')">回购榜</span>
      </li>
      <li class="TJul-item" :class="{active:'/things/find/daren' === $route.path}">
        <span class="text"  @click="goDaR('/things/find/daren')">达人</span>
      </li>
      <li class="TJul-item" :class="{active:'/things/find/home' === $route.path}">
        <span class="text"  @click="goHOME('/things/find/home')">HOME</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goTo(path){
        this.$router.push(path)
      },
      goGood(path){
        this.$router.push(path)
      },
      goShaiD(path){
        this.$router.push(path)
      },
      goXuanG(path){
        this.$router.push(path)
      },
      goHuiG(path){
        this.$router.push(path)
      },
      goDaR(path){
        this.$router.push(path)
      },
      goHOME(path){
        this.$router.push(path)
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .TJul
    display flex
    width 100%
    height 50px
    bottom-border-1px(#333)
    .TJul-list
      display flex
      align-items center
      flex-wrap nowrap
      padding-bottom 8px
      height 50px
      .TJul-item
        height 50px
        line-height 50px
        padding 0 2px 0 2px
        margin 0 8px 0 8px
        box-sizing border-box
        font-size 20px
        color #7f7f7f
        vertical-align middle //设置元素垂直对齐方式 该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高
        &.active 
          color $red
          border-bottom 4px solid $red
 
</style>

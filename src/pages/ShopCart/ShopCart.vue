<template>
  <div class="container">
    <!-- 购物车头部 -->
    <div class="header">
      <span class="car">购物车</span>
      <span class="ticket">领券</span>
    </div>
    <!-- 主体部分 -->
    <div class="body">
      <div class="condition">
        <span>30天无忧退货</span>
        <span>48小时无忧退款</span>
        <span>满88元免邮费</span>
      </div>
      <div class="login">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        <span class="add">去添加点什么吧</span>
        <button @click="toLogin()">登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Shopping-cart',
    methods: {
      toLogin () {
        this.$router.push('/profile')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    width 100%
    height 100%
    background-color #f4f4f4
    .header
      display fixed
      top 88px
      left 0
      height 88px
      line-height 88px
      justify-content space-around
      background-color #fff
      text-align center
      .car
        font-size 28px
      .ticket
        position absolute
        right 5%
        top 0
        font-size 28px
        color #b4282d
    .body
      .condition
        display flex
        justify-content space-around
        padding-top 20px
        span
          font-size 20px
          color #666
      .login
        display flex
        align-items center
        flex-direction column
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        img 
          width 190px
          height 190px
        .add
          font-size 20px
          color #999
        button
          width 380px
          height 72px
          color #fff
          background-color #b4282d
          border 1px solid transparent  //自定义边框
          outline none
          border-radius 5px
          font-size 30px
          margin-top 50px
        

 
</style>
<template>
  <div class="Email-container">
    <div class="img">
      <span class="txt">邮箱账号注册</span>
    </div>
    <div class="Email-number">
      <input type="text" placeholder="请输入邮箱">
    </div>
    <div class="Email-code">
      <input type="text" placeholder="请输入密码">
    </div>
    <div class="Email-code">
      <input type="text" placeholder="请确认密码">
    </div>
    <div class="Btn">
      <span class="login active">注册</span>
    </div>
    <div class="stipulation">
      <input type="checkbox">
      <span>我同意</span>
      <span>《网易服务条款》</span>
      <span>和</span>
      <span>《网易隐私政策》</span>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      toRegisteredEmail () {
        this.$router.replace('/profile/registeredEmail')
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Email-container
    display flex
    flex-direction column
    // width 100%
    padding 30px
    // padding-top 88px
    .img 
      // height 50px
      text-align center
      margin 55px auto 0
      .txt 
        height 50px
        font-size 28px
    .Email-number
      width 100%
      margin 120px auto 0
      input 
        width 100%
        height 60px
        line-height 45px
        border none  //自定义边框
        border-bottom 1px solid #bdbdbd
        outline none
      input::placeholder 
        padding-left 15px
        color #8b8b8b
        font-size 24px
    .Email-code
      width 100%
      display flex
      flex-wrap nowrap
      margin 40px auto 0
      position relative
      input
        margin 0 auto
        width 100%
        height 60px
        line-height 45px
        border none  //自定义边框
        border-bottom 1px solid #bdbdbd
        outline none
      input::placeholder 
        padding-left 15px
        color #8b8b8b
        font-size 24px
    .Btn 
      display flex
      flex-direction column
      .login
        height 50px 
        font-size 24px
        border 1px solid #DD1A21
        border-radius 4px
        margin-top 32px
        text-align center
        line-height 50px
        color #DD1A21
        &.active
          color #fff
          background-color #b4282d
    .stipulation
      width 100%
      margin 20px auto 30px
      input
        width 20px
        height 20px
        margin-right 10px
        vertical-align middle
      span 
        font-size 20px
        vertical-align middle
        &:nth-child(3)
          color #007aff
        &:nth-child(5)
          color #007aff
</style>

<template>
  <div class="Email-container">
    <div class="img">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="网易严选">
    </div>
    <div class="Email-number">
      <input type="text" placeholder="请输入手机号">
    </div>
    <div class="Email-code">
      <input type="text" placeholder="请输入手机验证码">
      <button>获取验证码</button>
    </div>
    <div class="question">
      <span>遇到问题?</span>
      <span>使用密码验证登录</span>
    </div>
    <div class="Btn">
      <span class="login active">登录</span>
      <span class="login" @click="toLogin()">其他登陆方式</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      toLogin(){
        this.$router.replace('/profile')
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
      img 
        height 50px
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
      button 
        position absolute
        right 0
        bottom 0
        width 134px
        height 44px
        border 1px solid #b3b3b3  //自定义边框
        outline none    //消除默认点击蓝色边框效果
        border-radius 4px
        background-color #fff
        font-size 22px
    .question
      display flex
      justify-content space-between
      width 100%
      height 30px
      margin 20px auto 34px
      span
        font-size 22px
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
      .oneLogin
        margin-top 20px
        border none
        color #333
        

</style>

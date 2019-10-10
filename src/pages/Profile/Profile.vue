<template>
  <div class="profile-container">
    <div class="hdWrap">
      <!-- 登录入口头部 -->
      <div class="hdTop border-1px">
        <div class="hd">
          <i class="iconfont iconshouye" @click="goHome()"></i>
          <span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
          </span>
          <div class="icons">
            <i class="iconfont iconicon" @click="goSearch()"></i>
            <i class="iconfont iconaui-icon-cart" @click="goShopCart()"></i>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <!-- 登录入口主体 -->
      <div class="profile-content" v-if="$route.path === '/profile'">
        <div class="profile-main">
          <!-- 主体上部 -->
          <div class="mainTop">
            <div class="mainLogin">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="严选">
            </div>
            <div class="mainBtn">
              <div class="BtnTop active" @click="goPhone()">
                <i class="iconfont iconshouji"></i>
                <span>手机号快捷登录</span>
              </div>
              <div class="BtnTop" @click="goEmail()">
                <i class="iconfont iconyouxiang1"></i>
                <span>邮箱账号快速登陆</span>
              </div>
            </div>
          </div>
          <!-- 主体下部 -->
          <div class="mainBon" v-show="this.isShow">
            <div class="mainItem">
              <span class="item">
                <i class="iconfont iconweixin"></i>
                <span class="name">微信</span>
              </span>
            </div>
            <div class="mainItem">
              <span class="item">
                <i class="iconfont iconFill"></i>
                <span class="name">QQ</span>
              </span>
            </div>
            <div class="mainItem ItemThree">
              <span class="item">
                <i class="iconfont iconweibo"></i>
                <span class="name">微博</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isShow:true, //显示微信微博QQ
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
      },
      goEmail(){
        // this.isShow=!this.isShow
        this.$router.replace('/profile/emaillogin')
      },
      goPhone(){
        // this.isShow=!thisShow
        this.$router.replace('/profile/phonelogin')
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile-container
    width 100%
    .hdWrap
      display flex
      flex-direction column
      .hdTop
        display flex
        width 100%
        height 60px
        background-color #fafafa
        bottom-border-1px(#333)
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
            // font-size 26px
          .icons
            display flex
            justify-content space-around
            width 20%
            height 100%
            line-height 60px
            .iconaui-icon-cart
              font-size 40px
      .profile-content
        width 100% 
        height 960px
        display flex
        .profile-main
          width 100% 
          height 100%
          display flex
          flex-direction column
          justify-content space-around
          .mainTop
            height 70%
            display flex
            flex-direction column
            .mainLogin
              padding 150px 0 160px 0
              text-align center
              img 
                width 190px 
                height 70px
            .mainBtn
              display flex
              flex-direction column
              text-align center
              align-items center
              padding 0 25px 0 25px
              margin-bottom  98px
              .BtnTop
                width 100%
                height 68px
                line-height 68px
                background-color #ffffff
                margin-bottom  20px
                border 1px solid #DD1A21
                border-radius 2px
                color #DD1A21
                .iconfont
                  color #DD1A21
                  font-size 28px
                  margin-right 10px
                span 
                  font-size 24px
                &.active
                  background-color #DD1A21
                  color #fff
                  .iconfont
                    color #fff
          .mainBon
            // height 10%
            display flex
            justify-content center
            color #7f7f7f
            .mainItem
              // height 20px
              padding 0 18px 0 18px
              border-right 1px solid #979797
              .item
                .iconfont
                  font-size 24px
                .name
                  font-size 24px  
                  margin-left 8px
            .ItemThree
             border none 
</style>


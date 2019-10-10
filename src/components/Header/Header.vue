<template>
  <div class="head">
    <header class="header-box border-1px">
      <!-- 头部搜索 -->
      <div class="header-search">
        <span class="logo"></span>
        <div class="search">
          <span class="iconfont iconicon"></span>
          <span class="placeholder searchIpt" @click="$router.push('/search')">搜索商品，共23084款好物</span>
          <!-- <input class="searchIpt" type="text" placeholder="搜索商品，共23084款好物"> -->
        </div>
        <span class="loginBtn">登录</span>
      </div>
      <!-- 推荐 -->
      <div class="topWrap">
        <header class="inner" v-show="!isShow">
          <div class="Wraplist-left" ref="slide">
            <ul class="Wraplist">
              <li class="Wrapitem one  active">
                <span class="text ">推荐</span>
              </li>
              <li class="Wrapitem">
                <span class="text" >家居生活</span>
              </li>
              <li class="Wrapitem">
                <span class="text" >服饰鞋包</span>
              </li>
              <li class="Wrapitem">
                <span class="text">美食酒水</span>
              </li>
              <li class="Wrapitem">
                <span class="text">个护清洁</span>
              </li>
              <li class="Wrapitem">
                <span class="text">母婴亲子</span>
              </li>
              <li class="Wrapitem">
                <span class="text">运动旅行</span>
              </li>
              <li class="Wrapitem">
                <span class="text">数码家电</span>
              </li>
              <li class="Wrapitem">
                <span class="text">全球特色</span>
              </li>
            </ul>
          </div>
        </header>
        <!-- 右图标 -->
        <div class="TabWrap-right" @click="isShow = !isShow">
          <div class="TabImg">
            <i class="iconfont icondown-hollow"></i>
            <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt=""> -->
          </div>
        </div>
        <!-- 遮罩 -->
        <div class="hide" v-show="isShow">
          <div class="top">
            <h3 class="title">全部频道</h3>
            <div class="TabWrap-right ">
              <div class="TabImg" @click="isShow = !isShow">
                <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt=""> -->
                <i class="iconfont iconxiala"></i>
              </div>
            </div>
          </div>
          <nav class="list">
            <div class="text active">推荐</div>
            <div class="text">家居生活</div>
            <div class="text">服饰鞋包</div>
            <div class="text">美食酒水</div>
            <div class="text">个护清洁</div>
            <div class="text">母婴亲子</div>
            <div class="text">运动旅行</div>
            <div class="text">数码家电</div>
            <div class="text">全球特色</div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShow:true, //显示隐藏
      }
    },
    methods: {
      // 点击显示隐藏
      // hide(){
      //   this.isShow = this.isShow ? false:true
      // }
    },
    mounted() {
      this.$nextTick( () =>{
        if (!this.BScroll) {
          this.BScroll = new BScroll(this.$refs.slide,{
            click:true,
            scrollX:true
          })
        }
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .head
    .header-box
      // bottom-border-1px(#e4e4e4)
      width 100%
      .header-search
        display flex
        justify-content space-around
        align-items center
        flex-flow row nowrap
        background #fff
        padding 12px 24px
        .logo
          width 20%
          height 31px
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
          background-repeat no-repeat
          background-position center
        .search
          display flex
          align-items center
          justify-content center
          flex-flow row nowrap
          width 62%
          height 43px
          background-color #ededed
          border-radius 5px
          .iconfont
            width 28px
            height 28px
            text-align center
            line-height 28px
            font-size 24px
            margin-right 4px
          .searchIpt
            font-size 22px
            color #666
            background-color #ededed
            outline none 
        .loginBtn
          width 10%
          height 29px
          text-align center
          line-height 29px
          color $red
          border 1px solid $red
          border-radius 4px
          margin-left 10px
      // 推荐
    .topWrap
      display flex
      width 100%
      position relative
      .inner
        width 476px
        // width 100%
        padding-right 100px
        .Wraplist-left
          width 100%
          .Wraplist
            width 1100px
            height 49px
            display flex
            flex-flow nowrap 
            padding 0 0 0 23px
            overflow hidden
            .Wrapitem
              display flex
              height 46px
              margin-left 16px
              line-height 46px
              flex-shrink 0
              &.active
                color $red 
                border-bottom 4px solid  $red
              .text
                font-size 22px
                padding 0 12px 
                // color #333
            .one
              margin 0
      .TabWrap-right
        display flex
        flex-grow 0
        justify-content center
        align-items center
        position absolute
        top 0
        right 0
        width 101px
        height 49px
        background-color #fff
        .iconfont
          font-size 30px
      //遮罩
      .hide
        position absolute
        top 0
        width 100%
        color #333
        background #fff
        // z-index 2
        .top
          .title 
            height 46px
            line-height 46px
            font-size 24px
            margin-left 30px
        .list
          display flex
          flex-wrap wrap
          padding-top 24px
          margin-left 30px
          .text
            width 100px
            height 34px
            // padding 0 12px
            margin-left 24px
            margin-bottom  26px
            line-height 34px
            text-align center
            font-size 21px
            color #333
            border 1px solid #999
            border-radius 4px 
            &.active 
              color $red
              border 1px solid $red
</style>

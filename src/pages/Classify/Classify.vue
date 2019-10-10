<template>
  <div class="classify-container border-1px">
    <!-- 分类头部 -->
    <div class="classify-top">
      <div class="top-head">
        <div class="top-search">
          <i class="iconfont iconicon"></i>
          <span class="placeholder searchIpt" @click="$router.push('/search')">搜索商品，共23069款好物</span>
        </div>
      </div>
    </div>
    <!-- 分类内容 -->
    <div class="classify-content">
      <!-- 左 -->
      <div class="content-left">
        <div class="left">
          <ul class="left-list">
            <li class="left-item item-one active">推荐专区</li>
            <li class="left-item">秋冬好物</li>
            <li class="left-item">爆品专区</li>
            <li class="left-item">新品专区</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
            <li class="left-item">居家生活</li>
          </ul>
        </div>
      </div>
      <!-- 右 -->
      <div class="content-right">
        <div class="right">
         <div class="RT">
          <div class="List-swiper">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg" alt="超值专区">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg" alt="金秋美食截">
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="List-cate">
            <ul class="cateList">
              <li class="cateItem">
                <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="明星商品">
                <span class="txt">明星商品</span>
              </li>
              <li class="cateItem">
                <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="明星商品">
                <span class="txt">明星商品</span>
              </li>
              <li class="cateItem">
                <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="明星商品">
                <span class="txt">明星商品</span>
              </li>
              <li class="cateItem">
                <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="明星商品">
                <span class="txt">明星商品</span>
              </li>
              <li class="cateItem">
                <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="明星商品">
                <span class="txt">明星商品</span>
              </li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/css/swiper.min.css'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      // swiper
      new Swiper('.swiper-container',{
        autoplay:true,
        loop:true,
        pagination:{
          el:'.swiper-pagination',
          type:'custom',
          renderCustom:function (swiper,current,total) {
            var customPaginationHtml = "";
            for (let i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === current - 1) {
                customPaginationHtml +=
                '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
              }else{
                customPaginationHtml +=
                '<span class="swiper-pagination-customs"></span>'
              }
            }
            return customPaginationHtml;
          }
        }
      })
      //滑动
      this.$nextTick(() => {
        if (!this.BScroll) {
          this.BScroll = new BScroll('.left',{
            click:true,
            scrollY:true
          }),
          this.BScroll = new BScroll('.right',{
            click:true,
            scrollY:true
          })
        }else{
          this.BScroll.refresh()
        }
      })
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .classify-container
    height 100%
    .classify-top
      width 100%
      bottom-border-1px(#333)
      z-index 2
      .top-head
        display flex
        align-items center
        height 68px 
        padding 0 23px
        background-color #fff
        .top-search
          width 100%
          height 43px
          display flex
          justify-content center
          align-items center
          background-color #ededed
          font-size 22px
          border-radius 4px
          .iconfont
            width 21px
            height 21px
            margin 0 8px 0 0 
            font-size 20px
          .searchIpt
            color #666
    .classify-content
      width 100%
      display flex
      justify-content space-between
      .content-left
        width 24%
        .left
          height 820px
          padding 31px 0
          .left-list
            height 900px
            .left-item
              width 100%
              height 39px
              font-size 24px
              text-align center
              line-height 39px
              margin-top 30px
              color #333
              &.active
                color $red
                border-left 3px solid $red
            .item-one
              margin 0
      .content-right
        width 75%
        height 100%
        padding 23px
        .right
          height 560px
          .RT
            height 620px
          .List-swiper
            width 100%
            margin-bottom 25px
            .swiper-container
              width 405px
              height 147px
              img 
                width 100%
                height 100%
              .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction
                width 100%
                height 4px
                bottom 50px
                .swiper-pagination-customs
                  width 40px
                  height 4PX
                  display inline-block
                  margin-right 10px
                  background-color rgba(255,255,255,.5)
                  /* 激活 */
                .swiper-pagination-customs-active
                  width 40px 
                  height 4px
                  opacity 1
                  border-radius 2px
                  background-color $red
          .List-cate
            display flex
            .cateList
              display flex
              flex-wrap wrap
              .cateItem
                width 109px
                height 165px
                margin-right 26px
                text-align center
                img 
                  width 109px
                  height 109px
                .txt
                  width 100% 
                  font-size 20px
                  color #333
</style>

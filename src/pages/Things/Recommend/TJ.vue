<template>
  <div class="main">
    <div class="containerList" ref="goods">
      <div class="reco-goods">
        <ul>
          <li>
            <div class="style-LR">
              <div class="style-left">
                <span class="user-info">
                  <img class="Img" src="https://yanxuan.nosdn.127.net/0f7bd95440a3b445fabe1d4923593950.png" alt="avatar">
                  <span>网易员工精选</span>
                </span>
                <p class="title">今年双十一，不多花一分冤枉钱</p>
                <p class="desc">回馈金卡限量发售，买11元得33元</p>
                <span class="view-count">
                  <i class="iconfont iconyanjing"></i>
                  <span>13k人看过</span>
                </span>
              </div>
              <div class="style-right">
                <img class="Img1" src="https://yanxuan.nosdn.127.net/79198f7552b43e77a136d16f23e0c45b.jpg" alt="mainImg">
              </div>
            </div>
            <div class="split"></div>
            <div class="style-TB">
              <div class="user-info">
                <img class="Img" src="https://yanxuan.nosdn.127.net/cd53b3b4d49d369b3fb9be5b4db2494a.png" alt="avatar">
                <span>选妹</span>
              </div>
              <p class="title">献礼祖国70周年华诞，严选品类好货大盘点</p>
              <img src="https://yanxuan.nosdn.127.net/ba99757f28e54fa2882b67e35b644361.jpg" alt="mainImg" class="main-img">
              <span class="view-count">
                <i class="iconfont iconyanjing"></i>
                <span>14k人看过</span>
              </span>
            </div>
            <div class="split"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(() => {
        if (!this.BScroll) {
          this.BScroll = new BScroll(this.$refs.goods,{
            click:true,
            scrollY:true
          })
        }else{
          this.BScroll.refresh()
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .main 
    .containerList
      overflow hidden
      height 900px  //短
      .reco-goods
        height 1100px //长
        ul
          display flex
          flex-direction column
          li
            width 100%
            .style-LR
              display flex
              justify-content space-between
              margin 12px 0
              padding 25px 23px
              .style-left
                width 55%
                display flex
                flex-direction column
                .user-info
                  display flex
                  align-items center
                  .Img
                    width 40px
                    border-radius 50%
                .title
                  line-height 30px
                  margin-top 16px
                  font-size 24px
                .desc
                  line-height 26px
                  font-size 20px
                  color #999
                .view-count
                  display flex
                  margin-top 31px
                  color #999 
                  font-size 18px 
                  .iconfont
                    margin 0 8px 
                    font-size 14px
                    line-height 20px
              .style-right
                width 40%
                display flex
                align-items center
                .Img1
                  width 100%
                  height 200px
            .style-TB
              display flex
              flex-direction column
              margin 12px 0
              padding 25px 23px
              .user-info
                display flex
                align-items center
                .Img
                  width 40px
                  border-radius 50%
              .title
                line-height 30px
                margin-top 16px
                font-size 26px
              .main-img
                width 100%
                margin-top 16px
              .view-count
                display flex
                margin-top 31px
                color #999 
                font-size 18px 
                .iconfont
                  margin 0 8px 
                  font-size 14px
                  line-height 20px
            .split
              width 100%
              height 10px
              background-color #f3f5f7 
</style>

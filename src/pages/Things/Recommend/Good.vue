<template>
  <div class="good_stuff_container">
    <!-- 好货内部价 -->
    <div class="content" ref="content">
      <div class="content-box">
        <div class="content-item">
          <span class="item-text">让生活更好的N种方式</span>
          <span class="item-text2">可爱值max的严选萌物</span>
          <div ref="img" class="name">
            <ul class="item-img">
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              
              <li>
                <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2acd26c2045e897283844052a1ec906e.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/1248aaf381a42d419376ac5a5470d017.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/af6885b9ea3ee1f5910f03d3c36fa34f.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/ce77482c57088c10ef8817a7fcbcce10.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/ce77482c57088c10ef8817a7fcbcce10.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/ce77482c57088c10ef8817a7fcbcce10.jpg" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="content-item2">
          <div class="item2-title">TA们的严选生活</div>
          <div class="item-tab">
            <span class="active">最新</span>
            <span>本月最热</span>
            <span>晒单合辑</span>
          </div>
          <ul class="item2-details">
            <li>
              <img class="item2-img" src="https://yanxuan.nosdn.127.net/be1adcb32793b4b5d22473f25fa85625.jpg" alt="">
              <span class="item2-comment">挺好的，简约，加了个智能插座，连上小度音箱，小度小度开灯，小度小度关灯，挺方便</span>
              <div class="item2-bottom">
                <img class="item2-img2" src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="">
                <span class="item2-author">y****g</span>
                <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
                <span>0</span>
              </div>
            </li>
          </ul>
          <ul class="item2-details">
            <li>
              <img class="item2-img" src="https://yanxuan.nosdn.127.net/911ad3f5f8b3367934c3afd9a8b1b2c3.jpg" alt="">
              <span class="item2-comment">很好看的颜色，炖东西不错，小火炖不会益锅，这个尺寸两个人用足够了，炖肉煮小火锅之类的都ok，毕竟不是不粘锅，炒东西的话是容易粘的，另外质量不轻。</span>
              <div class="item2-bottom">
                <img class="item2-img2" src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="">
                <span class="item2-author">y****g</span>
                <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
                <span>0</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(()=>{
        if (!this.BScroll) {
          this.BScroll = new BScroll(this.$refs.content,{
            click:true,
            scrollY:true
          }),
          this.BScroll = new BScroll(this.$refs.img,{
            click:true,
            scrollY:true
          })
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .good_stuff_container
    .content
      width 100%
      height 800px
      .content-box
        display flex
        flex-direction column
        .content-item
          display flex
          flex-direction column
          border-bottom 20px solid #f4f4f4
          .item-text
            font-size 28px
            color #7f7f7f
            text-align center
            margin-top 30px
          .item-text2
            font-size 32px
            color #333
            text-align center
            margin 30px
          .name
            overflow hidden
            height 240px
          .item-img
            display flex
            float left
            margin-bottom 30px
            li
              width 240px
              height 240px
              img
                width 100%
                height 100%
                border-radius 10px
        .content-item2
          .item2-title
            margin-top 60px
            font-size 32px
            text-align center
            font-weight bold
          .item-tab
            margin 35px 0 35px
            display flex
            justify-content space-around
            font-size 28px
            span
              display flex
              align-items center
              background-color #f4f4f4
              border-radius 10px
              padding 10px 30px
              &.active
                background-color #ffe4af
                color #b0955f
                font-weight bold
        .item2-details
          display flex
          width 49% 
          margin 0  
          float left
          li
            width 345px
            margin 20px
            border 3px solid #cacaca
            border-radius 20px
            .item2-img   
              width 100% 
              border-radius 20px
            .item2-comment
              font-size 24px
              line-height 34px
              overflow hidden
              text-overflow ellipsis
            .item2-bottom
              display flex
              align-items center
              margin 30px 0 20px
              .item2-img2
                width 48px
                height 48px
                margin  0 18px 0 18px
              .item2-author
                font-size 24px
              .icon-changyongtubiao-xianxingdaochu-zhuanqu-
                font-size 16px
                margin 0 20px 0 100px
            &:last-child
              font-size 28px
              margin-right 20px

            

</style>
<template>
  <div class="ShaiD">
    <div class="container" ref="content">
      <!-- 晒单 -->
      <div class="container-list" >
        <!-- 上 -->
        <div class="container-head">
          <div class="main-top">
            <span class="text">让生活更美好</span>
          </div>
          <div class="main-center">
            <span class="text">秒杀国际大牌品牌</span>
          </div>
          <!-- 图片 -->
          <div class="main" ref="img">
            <ul class="list">
              <li class="item">
                <img src="https://yanxuan.nosdn.127.net/d02161618cf2c68645c4161964b7c7ba.jpg" alt="gai">
              </li>
              <li class="item">
                <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg" alt="gai">
              </li>
              <li class="item">
                <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg" alt="gai">
              </li>
              <li class="item">
                <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg" alt="gai">
              </li>
            </ul>
          </div>
        </div>
        <!-- 中 -->
        <div class="container-content">
          <div class="content-life">
            <p>TA们的严选生活</p>
          </div>
          <div class="content-new">
            <ul class="newThing">
              <li class="tabItem active">
                <span class="txt">最新</span>
              </li>
              <li class="tabItem">
                <span class="txt">本月最热</span>
              </li>
              <li class="tabItem">
                <span class="txt">晒单合辑</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 下 -->
        <div class="container-foot">
          <!-- 左 -->
          <div class="foot-left">
            <ul class="leftList">
              <li class="leftItem">
                <div class="every">
                  <div class="img">
                    <img src="https://yanxuan.nosdn.127.net/be1adcb32793b4b5d22473f25fa85625.jpg" alt="家具评价">
                  </div>
                  <span>挺好的，简约，加了个智能插座，连上小度音箱，小度小度开灯，小度小度关灯，挺方便</span>
                  <div class="BOM">
                    <div class="one">
                      <img src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="人头像">
                      <span>y****g</span>
                    </div>
                    <div class="tow">
                      <i class="iconfont iconzan1"></i>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 右 -->
          <div class="foot-left">
            <ul class="leftList">
              <li class="leftItem">
                <div class="every">
                  <div class="img">
                    <img src="https://yanxuan.nosdn.127.net/911ad3f5f8b3367934c3afd9a8b1b2c3.jpg" alt="家具评价">
                  </div>
                  <span>很好看的颜色，炖东西不错，小火炖不会益锅，这个尺寸两个人用足够了，炖肉煮小火锅之类的都ok，毕竟不是不粘锅，炒东西的话是容易粘的，另外质量不轻。</span>
                  <div class="BOM">
                    <div class="one">
                      <img src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="人头像">
                      <span>y****g</span>
                    </div>
                    <div class="tow">
                      <i class="iconfont iconzan1"></i>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() { 
      // 这个会报错，该函数没有定义 Error in nextTick: "TypeError: cb.call is not a function"
      /* this.$nextTick(
        new BScroll(this.$refs.content,{
          click:true,
          scrollY:true
        }),
        new BScroll(this.$refs.img,{
          click:true,
          scrollX:true
        })
      ) */
      this.$nextTick( () =>{
        if (!this.BScroll) {
          this.BScroll = new BScroll(this.$refs.content,{
            click:true,
            scrollY:true
          }),
          this.BScroll = new BScroll(this.$refs.img,{
            click:true,
            scrollX:true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .ShaiD
    .container
      width 100%
      height 900px
      display flex
      .container-list
        width 100%
        height 1200px
        display flex
        flex-direction column
        align-items center
        flex-wrap nowrap
        padding-top 30px
        .container-head
          width 100%
          display flex
          flex-direction column
          flex-wrap nowrap
          flex-shrink 0
          box-sizing border-box
          // padding 11px 0 16px 0
          margin-bottom 4px
          border-bottom 10px solid #fafafa
          .main-top
            font-size 22px
            color #7f7f7f
            flex-direction row
            text-align center
          .main-center
            font-size 28px
            color #333
            flex-direction row
            text-align center
            margin-top 30px
          .main
            display flex
            flex-shrink 0
            width 100%
            margin 30px 0 30px 0
            overflow hidden
            .list
              display flex
              flex-shrink 0
              flex-wrap nowrap
              .item
                margin 0 5px 0 10px
                img 
                  width 184px
                  height 184px
        .container-content
          display flex
          width 100%
          flex-direction column
          // flex-wrap nowrap
          box-sizing border-box
          padding-top 28px
          .content-life
            margin-bottom 10px
            flex-direction row
            font-size 26px
            text-align center
            p 
              height 30px
              margin 0 8px
              color #333
          .content-new
            display flex
            // width 100%
            padding-top 16px
            border none 
            .newThing
              width 100%
              height 60px
              display flex
              justify-content space-around
              padding 0 8px
              .tabItem
                width 120px
                height 35px
                padding 14px 0
                margin 0 10px
                text-align center
                line-height 35px
                boder 1px solid #f4f4f4
                border-radius 4px 
                color #333
                background-color #f4f4f4
                &.active 
                  background-color #ffe4af
                  color #b0955f
                  font-weight 700 
                .txt
                  font-size 22px
        .container-foot
          width 95%
          display flex
          flex-direction row   
          margin-top 20px   
          .foot-left
            width 50%
            display flex
            flex-direction column
            align-items center
            flex-wrap nowrap
            .leftList
              width 94%
              overflow hidden
              margin-bottom 10px
              .every
                display flex
                flex-direction column
                width 100%
                .img
                  width 100%
                  img 
                    width 100%
                    // height 400px
                span 
                  display flex
                  width 100%
                  line-height 20px
                  padding 6px 5px 0 5px
                  font-size 18px 
                  color #333
                  flex-wrap wrap
                  // overflow hidden
                  // text-overflow ellipsis
                .BOM
                  display flex
                  justify-content space-between
                  flex-wrap nowrap
                  .one 
                    width 70%
                    display flex
                  .tow
                    display flex
                    height 30px
                    // justify-content space-between
                    align-items center
                    // line-height 30px
                    .iconfont
                      font-size 20px
                      text-align center
                      
                    span 
                      width 40px
</style>

<template>
  <div class="search-container">
    <!-- 搜索头部 -->
    <div class="search-top border-1px">
      <div class="top-head">
        <div class="top-search">
          <i class="iconfont iconicon"></i>
          <span class="placeholder searchIpt">搜索商品，共23069款好物</span>
        </div>
        <div class="txt" @click="goBack()">取消</div>
      </div>
    </div>
    <!-- 搜索内容 -->
    <div class="search-content">
      <div class="content">
        <header class="hd">
          <h3 class="title">热门搜索</h3>
        </header>
        <nav class="list">
          <span href="javascript:;">洗脸面膜</span>
          <span href="javascript:;">洗脸面膜</span>
          <span href="javascript:;">洗脸面膜洗脸</span>
          <span href="javascript:;">洗脸</span>
          <span href="javascript:;">洗脸面膜</span>
          <span href="javascript:;">洗脸</span>
          <span href="javascript:;">洗脸</span>
          <span href="javascript:;">洗脸</span>
          <span href="javascript:;">洗脸面膜洗脸不</span>
          <span href="javascript:;">哈哈哈</span>
          <span href="javascript:;">卖布头</span>
          <span href="javascript:;">嘚嘚嘚</span>
          <span href="javascript:;">锅</span>
          <span href="javascript:;">碗</span>
          <span href="javascript:;">瓢</span>
          <span href="javascript:;">盆</span>

        </nav>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goBack(){
        this.$router.back(-1)
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .search-container
    height 100%
    .search-top
      width 100%
      bottom-border-1px(#333)
      .top-head
        display flex
        justify-content space-between
        align-items center
        height 68px 
        padding 0 23px
        background-color #fff
        .top-search
          width 86%
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
        .txt
          margin-left 23px
          font-size 22px
    .search-content
      background-color #eee 
      color $red
      .content
        background-color #fff
        padding 0 23px 23px 23px
        margin-bottom 16px
        .hd
          height 69px
          font-size 24px
          color #999
          display flex
          align-items center
        .list
          display flex
          // justify-content space-between
          flex-wrap wrap
          span 
            height 34px
            padding 0 12px
            margin 0 24px 24px 0
            line-height 34px
            // text-align center
            font-size 21px
            color #333
            border 1px solid #999
            border-radius 4px

</style>

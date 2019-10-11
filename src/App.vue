<template>
  <div id="app">
    <router-view/>
    <!-- <Footer v-show="$route.meta.showFooter"></Footer> -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  data() {
    return {
      isShow:true
    }
  },
  components:{
    Footer,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

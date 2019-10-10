<template>
  <div id="app">
    <router-view/>
    <!-- <Footer v-show="$route.meta.showFooter"></Footer> -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
export default {
  data() {
    return {
      isShow:true
    }
  },
  components:{
    Footer,
    Header,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

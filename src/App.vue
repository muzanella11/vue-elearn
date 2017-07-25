<template>
  <div id="app">
    <layout-presistent v-if="haveLayout"></layout-presistent>
    <template v-else>
      <transition>
        <router-view></router-view>
      </transition>
    </template>
  </div>
</template>

<script>
import LayoutPresistent from '@/layout/LayoutPresistent'
export default {
  name: 'app',
  data () {
    return {
      //
    }
  },
  computed: {
    haveLayout () {
      return this.$route.meta.layout
    }
  },
  mounted () {
    //
  },
  components: {
    LayoutPresistent
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

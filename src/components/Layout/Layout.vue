<template>
  <div
    class="app-wrapper"
    :class="classObj"
  >
    <AppAside class="sidebar-container"/>
    <div class="main-container">
      <app-header/>
      <app-main/>
      <app-footer/>
    </div>
  </div>
</template>
<script>
import {AppMain, AppFooter, AppHeader, AppAside} from './components'
import {mapGetters} from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    AppFooter,
    AppHeader,
    AppAside
  },
  computed: {
    ...mapGetters('app', [
      'getUserName',
      'getSliderbar'
    ]),
    classObj () {
      return {
        hideSidebar: !this.getSliderbar,
        openSidebar: this.getSliderbar
      }
    }
  }
}
</script>
<!--带有scoped局部样式  反之，全局样式-->
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    width: 100%;
    height: 100%;
    min-width: 1200px;
  }
</style>

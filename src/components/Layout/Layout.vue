<template>
  <div class="app-wrapper">
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
export default {
  name: 'Layout',
  components: {
    AppMain,
    AppFooter,
    AppHeader,
    AppAside
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

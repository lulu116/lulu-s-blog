<template>
  <el-menu
    class="navbar"
    mode="horizontal"
  >
    <bread-crumb/>
  </el-menu>
</template>

<script>
import topMenu from '@/datas/menu'
import BreadCrumb from '@/components/BreadCrumb'
export default {
  name: 'AppHeader',
  components: {
    BreadCrumb
  },
  data () {
    return {
      topMenu
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 60px;
    line-height: 60px;
    border-radius: 0px !important;
  }
</style>

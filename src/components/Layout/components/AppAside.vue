<template>
  <el-menu
    mode="vertical"
    class="sider-background"
    :default-active="activeKey"
  >
    <el-row class="plat-title">
      <img src="@/assets/big.png" class="en-pig"/>
    </el-row>
    <el-menu-item
      v-for="item in topMenu"
      :key="item.key"
      :index="item.key"
      class="menu-item"
    >
      <router-link :to="{path: item.path}" class="router-link">
        <svg-icon :iconClass="item.icon"></svg-icon>
        {{item.label}}
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
import topMenu from '@/datas/menu'
export default {
  name: 'AppAside',
  data () {
    return {
      topMenu,
      activeKey: topMenu[0].key
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu-item{
    padding: 0!important;
    .router-link {
      display: block;
      padding-left: 20px;
    }
  }
</style>

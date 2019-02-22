<template>
  <el-menu
    mode="vertical"
    class="sider-background"
    :default-active="getActiveKey"
    @select="handleSelect"
  >
    <el-row class="plat-title">
      <img src="@/assets/big.png" class="en-pig"/>
    </el-row>
    <el-menu-item
      v-for="item in getTopMenu"
      :key="item.key"
      :index="item.key"
      class="menu-item"
    >
      <router-link :to="{path: item.path}" class="router-link">
        <svg-icon :iconClass="item.icon" className="sliderbar-icon"></svg-icon>
        {{item.label}}
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'AppAside',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('app', ['getTopMenu', 'getActiveKey'])
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.dispatch({
        type: 'app/handleSelect',
        payload: {
          key
        }
      })
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
      .sliderbar-icon {
        margin-right: 20px;
      }
    }
  }
</style>

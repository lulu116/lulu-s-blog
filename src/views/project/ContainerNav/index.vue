<template>
  <div :class="className">
    <el-menu mode="vertical" class="container-nav-sliderbar" :default-active="getActiveKey">
      <el-menu-item v-for="item in getSliderBar"
      :key="item.key" :index="item.key" class="container-menu-item">
        <a href="javascript:void(0);" @click="handleClickNav(item.key)">
          <svg-icon iconClass="aixin"></svg-icon>
          <span>{{item.title}}</span>
        </a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ContainerNav',
  data () {
    return {}
  },
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('blogproject', ['getSliderBar', 'getActiveKey', 'getProjectMain'])
  },
  methods: {
    handleClickNav (path) {
      this.$emit('handleClickNav', path)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-menu-item {
  a {
    width: 100%;
    display: inline-block;
  }
}
</style>

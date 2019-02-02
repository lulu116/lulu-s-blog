<template>
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <el-breadcrumb-item
      v-for="item in breadCrumbList"
      :key="item.key"
      :to="{ path: 'item.path' }"
    >
      <!--<svg-icon :iconClass="item.icon"></svg-icon>-->
      <span style="color:#909399ad">{{item.label}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import breadCrumb from '@/router/BreadCrumb'
export default {
  name: 'BreadCrumbCmp',
  data () {
    return {
      breadCrumb,
      breadCrumbList: []
    }
  },
  watch: { // 监听路由变化
    $route: {
      deep: true, // 深度监听
      handler () {
        this.getBreadcrumbRoutes()
      }
    }
  },
  beforeMount () {
    this.getBreadcrumbRoutes()
  },
  methods: {
    getBreadcrumbRoutes () {
      // 监听路由变化时，清空面包屑
      this.$set(this, 'breadCrumbList', [])
      let paths = this.$route.fullPath
      if (paths) {
        let subPath = paths.split('/')[1]
        let res = breadCrumb[subPath]
        const {label, key, path, icon} = res
        this.breadCrumbList.push({
          label,
          key,
          path,
          icon
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  height: 60px;
  line-height: 60px;
  margin-left: 20px;
  float: left;
}
</style>

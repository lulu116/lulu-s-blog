<template>
  <div class="app-container">
     <container-nav class="container-nav-class" @handleClickNav="getContainerNav"></container-nav>
    <div
      v-loading="projectLoading"
      class="container-main-big"
      element-loading-text="努力加载中..."
      >
      <div class="container-main" v-html="getProjectMain[Number(navpath)-1].content">
        {{getProjectMain[Number(navpath)-1].content}}
      </div>
    </div>
  </div>
</template>

<script>
import ContainerNav from './ContainerNav'
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'aboutMe',
  components: {
    ContainerNav
  },
  data () {
    return {
      projectLoading: true
    }
  },
  computed: {
    ...mapState('aboutMe', ['navpath']),
    ...mapGetters('aboutMe', ['getProjectMain'])
  },
  methods: {
    ...mapMutations('aboutMe', ['NAV_PATH']),
    getContainerNav (path) {
      this.NAV_PATH(path)
      this.handleChangeLoading()
    },
    handleChangeLoading () {
      this.projectLoading = true
      const _this = this
      if (this.getProjectMain) {
        setTimeout(
          function () {
            _this.projectLoading = false
          }, 1000)
      }
    }
  },
  created () {
    this.handleChangeLoading()
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container-main-big {
  width: calc(100vw - 530px);
  height: calc(100vh - 106px);
  margin-left: 281px;
}
</style>

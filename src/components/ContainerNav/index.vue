<template>
  <div :class="className">
    <el-menu mode="vertical" class="container-nav-sliderbar" :default-active="getActiveKey">
      <el-menu-item v-for="item in getSliderBar" 
      :key="item.key" :index="item.key" class="container-menu-item" :ukey="item.ukey">
        <a href="javascript:void(0);" @click="getContainerDetails(item.ukey)">
          <svg-icon iconClass="aixin"></svg-icon>
          <span>{{item.title}}</span>
        </a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations  } from "vuex";
export default {
  name: "ContainerNav",
  data() {
    return {};
  },
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("dashboard", ["getSliderBar", "getActiveKey"])
  },
  methods: {
    ...mapMutations('dashboard',["NAV_PATH"]),
    getContainerDetails(path){
      this.NAV_PATH(path)
    }
  }
};
</script>

<style lang="scss" scoped>
.container-menu-item {
  a {
    width: 100%;
    display: inline-block;
  }
}
</style>

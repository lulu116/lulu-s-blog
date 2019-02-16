<template>
  <div :class="className">
    <ul  v-for="item in topMenu"
      :key="item.key"
      :index="item.key">
      <li>
        <a href="#">
          <svg-icon :iconClass="item.icon" className="sliderbar-icon"></svg-icon>
          <span>12132</span>
        </a>
      </li>
  
    </ul>
  </div>
</template>

<script>
import topMenu from '@/datas/menu'
export default {
  name: 'ContainerNav',
  data () {
    return {
      topMenu
    }
  },
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  beforeMount () {
    
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>

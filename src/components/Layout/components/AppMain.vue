<template>
  <section>
    <transition
      name="fade-transform"
      mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>

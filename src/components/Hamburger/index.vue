<template>
   <div class="hamburger">
     <svg-icon
       :iconClass="hamburgerIcon"
       @toggleHamburger="handleClickChangeHamburger"
       class="ham-svg"
     >
     </svg-icon>
   </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    hamburgerIcon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClickChangeHamburger () {
      this.$emit('handleClickChangeHamburger')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hamburger {
  float: left;
  margin-left: 15px;
  .ham-svg {
    font-size: 25px;
    display: inline-block;
    cursor: pointer;
    width: 25px;
    height: 25px;
    /*transform: rotate(180deg);
    transition: .38s;
    transform-origin: 50% 50%;*/
  }
}
</style>

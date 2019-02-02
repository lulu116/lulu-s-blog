<template>
  <el-menu
    class="navbar"
    mode="horizontal"
  >
    <hamburger
      :is-Collapse="isCollapse"
      :hamburgerIcon="isCollapse ? 'zhankai_right' : 'zhankai_left'"
      class="hamburger-container"
    />
    <bread-crumb/>
    <el-dropdown trigger="click" class="user-dropdown">
      <span>
        <img src="@/assets/big.png"/>
        {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix" command="a">
          修改密码
        </el-dropdown-item>
        <el-dropdown-item class="clearfix" command="b">
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import Hamburger from '@/components/Hamburger'
export default {
  name: 'AppHeader',
  components: {
    BreadCrumb,
    Hamburger
  },
  data () {
    return {
      userName: '111',
      isCollapse: true
    }
  },
  methods: {
    handleClickChangeHamburger () {
      return !this.isCollapse
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 60px;
    line-height: 60px;
    border-radius: 0px !important;
    .user-dropdown {
      float: right;
      margin-right: 15px;
      span {
        height: 100%;
        display: inline-block;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: inline-block;
        }
      }
    }
  }
</style>

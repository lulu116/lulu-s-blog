<template>
  <el-menu
    class="navbar"
    mode="horizontal"
  >
    <hamburger
      :is-Collapse="isCollapse"
      :hamburgerIcon="!isCollapse ? 'zhankai_right' : 'zhankai_left'"
      @handleClickChangeHamburger="changeHamburger"
    />
    <bread-crumb/>
    <el-dropdown trigger="click" class="user-dropdown" @command="handleCommand">
      <span>
        <img src="@/assets/big.png"/>
        {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix" command="b">
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
   <!-- <el-tooltip class="item" effect="light" content="segmentfault">
      <a href="https://segmentfault.com/u/lulu116/notes" target="_blank" class="github-css">
        <img src="@/assets/sf.png" alt="segmentfault" class="github-svg sf" />
      </a>
    </el-tooltip>-->
    <el-tooltip class="item" effect="light" content="我的邮箱">
      <a href="https://github.com/lulu116" target="_blank" class="github-css">
        <svg-icon iconClass="email" className="github-svg"></svg-icon>
      </a>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="我的github">
      <a href="https://github.com/lulu116" target="_blank" class="github-css">
        <svg-icon iconClass="github" className="github-svg"></svg-icon>
      </a>
    </el-tooltip>
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
      isCollapse: false,
      ccount: ''
    }
  },
  methods: {
    changeHamburger () {
      this.isCollapse = !this.isCollapse;
      console.log(this.$store)
    },
    handleCommand (command) {
      if (command === 'b') {
        this.logout()
      }
    },
    logout () {
      alert('确认要退出吗？')
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
      cursor: pointer;
      span {
        height: 100%;
        display: inline-block;
        img {
          vertical-align: middle;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: inline-block;
        }
      }
    }
    .github-css {
      float: right;
      width: 50px;
      display: inline-block;
      height: 60px;
      margin-right: 10px;
      text-align: center;
    }
    .github-css:hover .github-svg{
      color: #606266f5;
    }
  }
  .github-svg {
    font-size: 30px;
    color: #999999ed;
  }
  .sf {
    vertical-align: middle;
    border-radius: 50%;
  }
</style>

<template>
  <div class="app-container">
    <div class="dashboard-top">
      <div class="dashboard-top__left">
        <ul >
          <li>
            <label>姓名：</label>刘婷
          </li>
          <li>
            <label>年龄：</label>22岁
            </li>
          <li>
             <label>职业：</label>web前端开发工程师
          </li>
          <li>
             <label>爱好：</label>K歌、打游戏
          </li>
        </ul>
      </div>
      <div class="dashboard-top__middle">
       <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in getWrapperList" :key="item.key">
          <!-- <img src="../assets/dashboard/106.jpg"/> -->
          <img :src="item.path" :title="item.title" :alt="item.alt"/>
        </el-carousel-item>
       </el-carousel>
      </div>
      <div class="dashboard-top__right"></div>
    </div>
    <div class="dashboard-bottom">
      <ul class="skill-li">
        <li v-for="item in getdashboardSkll" :key="item.key">
          <!-- <img :src="item.path" :title="item.title" :alt="item.alt"/>
          <span>{{item.percent}}</span> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'DashBoard',
  components: {
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('dashboard', ['getWrapperList', 'getdashboardSkll'])
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.skill-li {
  list-style: none;
  height: 100%;
  margin: 0px 10px;
  margin-left: 54px;
  li {
    float: left;
    width: 30%;
    height: 200px;
    background: pink;
    margin: 10px 20px;
    img {
      width: 100%;
      height: 180px;
      display: block;
    }
  }
}
</style>

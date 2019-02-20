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
           <li>
             <label>邮箱：</label>sliusting970@163.com
          </li>
        </ul>
      </div>
      <div class="dashboard-top__middle">
       <el-carousel :interval="4000" indicator-position="outside">
        <el-carousel-item v-for="item in getWrapperList" :key="item.key">
          <!-- <img src="../assets/dashboard/106.jpg"/> -->
          <img :src="'.'+item.path" :title="item.title" :alt="item.alt"/>
        </el-carousel-item>
       </el-carousel>
      </div>
      <div class="dashboard-top__right">
       <echarts className="mychart"></echarts>
      </div>
    </div>
    <div class="dashboard-bottom">
      <ul class="skill-li">
        <li v-for="item in getdashboardSkll" :key="item.key">
          <div :style="{backgroundColor:item.bgcolor}">
            <div class="skill-li__left" >
              <svg-icon :iconClass="item.path" className="svg-img" :style="{color: item.color}"></svg-icon>
            </div>
            <div class="skill-li__right">
              <div>技能：{{item.title}}</div>
              <div>熟练度：{{item.percent}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Echarts from '@/components/Echarts'
export default {
  name: 'DashBoard',
  components: {
    Echarts
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
    margin: 10px 20px;
    border: 1px solid #f5f5f5;
    & > div {
      width: 100%;
      height: 100%;
      .skill-li__left {
        float: left;
        width: 100px;
        height: 100px;
        margin-left: 20px;
        margin-top: 48px;
      }
    .skill-li__right {
      float: right;
      width: 180px;
      height: 100px;
      margin-right: 20px;
      margin-top: 48px;
      & > div {
        line-height: 35px;
      }
    }
  }
  & > div:hover {
    box-shadow: 3px 3px 2px rgba(115, 130, 131, 0.2) !important;
    transition: box-shadow 0.47s;
  }

  }
}
.mychart {
  width: 100%;
  height: 100%;
}
</style>

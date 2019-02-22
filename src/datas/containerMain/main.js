/**
 * @author: lulu
 * @date:
 * @desc: 假数据
 */
const projectMain = [{
  key: '1',
  content: `
          <h2>HCF数据库管理平台</h2>
          <div>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            HCF数据库管理平台简称：<strong>HCF DBAAS</strong>，DBaaS也就是数据库服务。提供高可用、高效、统一化的一套平台，
            本系统基于mysql，提供基于mysql之上的一些日常运维服务。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            技术支持：前端（react、dva、es6、ant design、echarts、webpack）;后端（php、ansible、mysql、zabbix）<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我主要负责1. 机器管理， 2. 实例管理，3. 健康巡检， 4. 备份恢复， 5. 性能分析，下面简单对各功能概述：
            </p>
              <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             项目主页
            </p>
            <img src="./static/project/dbaas_index.jpg" class="books-img"/  >
             <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             1. 机器管理相当于最底层，而实例管理是建立在机器之上的，本系统机器管理调用的是<strong>vmvare公司&nbsp;
             <a href="https://www.vmware.com/cn.html" target="_blank">公司参考地址</a></strong>
            </p>
            <img src="./static/project/dbaas_machine.jpg" class="books-img" / >
            <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             2. 实例管理是本系统最重要的部分，同时各功能也是围绕着实例进行的操作及管理。所有的实例都会依赖于某些机器，
             在创建时会选择当前内存下可用的机器，实例创建成功会在实例管理列表展示，且查看详情。
            </p>
            <img src="./static/project/dbaas_create.jpg" class="books-img" / >
            <img src="./static/project/dbaas_instance.jpg"  class="books-img" / >
            <img src="./static/project/dbaas_instnace_detail.jpg" class="books-img" / >
            <br/>
            <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             3. 健康巡检是对节点各信息进行检测，我们的任务有自动执行的，也有手动执行的。对节点生成的报告可以查看详情。如:mysql的状态、cpu等。
            </p>
            <img src="./static/project/dbaas_report.jpg" class="books-img" / >
            <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             4. 备份对整条实例的备份记录，恢复将该实例恢复到备份初始时。
            </p>
            <img src="./static/project/dbaas_backup.jpg" class="books-img"/>
            <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            5. 性能分析可以对指定实例指定节点进行的分析与统计
            </p>
           <img src="./static/project/dbaas_fengxi.jpg" class="books-img" />
          </div>
       
          `
}, {
  key: '2',
  content: 'dsfas456456dfasdfsdfdsf222222222'
}]
export {
  projectMain
}

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
  content: `
          <h2>HCF数据库管理平台</h2>
          <div>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            数据库云管理平台的设计灵感来自于HCF数据库管理平台，HCF数据库管理平台是基于mysql提供一些日常的运维操作，而随着数据中心引入越来越多类型
            的数据库，如Redis、Mongodb等，每种数据库都有自己独立的一套管理操作平台，风格各不相同。自动化安装、监控等运维工作都需要
            自行对接IAAS平台，工作量大且重复。这样就造成了DBA日常运维繁琐、易出错。因此建设云管平台，将由此平台统一对接IAAS平台，通过向IAAS平台
            申请资源后统一管理，且提供统一的登录操作标准。
            </p>
             <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           此平台提供统一的资源管理、数据库统一的运维操作，将类似于公有云的形式提供给业务人员来使用，所以mysql、redis、Mongodb都要严格遵循此平台
           接口设计规范。我主要负责实例管理、工单管理。实例管理：由于实例管理分三种类型的实例，如果在mysql创建实例，则创建后实例会去调用mysql的dbaas
           的接口创建，其它都一样的原理。我们可以在工单中查看实例详情
            </p>
            <img src="./static/project/cloud1.png" class="books-img"/  >
          </div>
       
          `
}]
export {
  projectMain
}

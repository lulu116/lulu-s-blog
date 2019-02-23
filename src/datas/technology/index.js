/**
 * @author: lulu
 * @date:
 * @desc: 前端静态菜单项
 */
const technologyNav = [{
  title: '目前对前端工程化的认识',
  key: '1'
}, {
  title: '对原型的初步认识和理解',
  key: '2'
}]
const technologyContent = [{
  key: '1',
  content: `
          <h2>目前对前端工程化的认识</h2>
          <div>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            曾参加公司组织的前端技术知识分享会时，提到一个新词<strong>前端工程化</strong>，听见这个词感觉很简单，几句话就可以介绍完，但实现
            起来很复杂，它的每一个过程都是一个大的方向。在此，我将目前对前端工程化的理解进行梳理。
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            首先来看下前端发展历程
            </p>
            <img src="./static/project/project_11.png" class="books-img" / >
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            其实我们的前端开发就是HTML、CSS、JavaScript，随着时代的发展，渐渐涌现出很多框架，从而提高开发效率，减少浏览器负载。
            <strong>什么是前端工程化？</strong>将项目从开发环境部署到生产环境的一系列过程。包括构建、部署、测试等。
            <strong>其核心思想：为了提高开发效率</strong>
            由于现在的前端越来越复杂，所以工程化的出现将更好地实现团队协作、降低复杂性，达到一定的规范化。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          总结一下前端工程化主要内容：代码规范、分支管理、模块管理、自动化测试、构建部署<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          代码规范:保证团队所有成员以同样的规范开发，<strong>javascript风格指南:Airnbn；eslint</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          分支管理:我一般是用 git作为项目版本控制，而接触的工作流：<strong>gitflow</strong>，至于采用什么工作流和版本控制根据公司而定。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          模块管理：模块遵循高内聚、低耦合，实现组件化。把逻辑紧密相关的内容放在一个组件中，不同组件之间的依赖尽量弱化。每个组件尽量独立。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          自动化测试： 保证主干代码达到一定的质量标准，测试是自动化可以进行回归。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          构建部署：在保证代码质量后，利用webpack进行打包到生产环境，打开<strong>xshell</strong>连接到服务器进行部署。

          </div>

          `
}, {
  key: '2',
  content: `
          <h2>对原型的初步认识和理解</h2>
          <div>
            
          </div>
       
          `
}]
export {
  technologyNav,
  technologyContent
}

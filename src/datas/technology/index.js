/**
 * @author: lulu
 * @date:
 * @desc: 前端静态菜单项
 */
const technologyNav = [{
  title: '22',
  key: '1'
}, {
  title: '目前对前端工程化的认识',
  key: '2'
}]
const technologyContent = [{
  key: '1',
  content: 'dsfasdfasdfsdfdsf1111111'
}, {
  key: '2',
  content: `
          <h2>目前对前端工程化的认识</h2>
          <div>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            曾参加公司的前端技术知识分享会时，提到一个新词<strong>前端工程化</strong>，当时我是一脸蒙，听起来感觉很高大上，别人可以几句话说清楚，但实现
            起来很复杂，它的每一个过程都是一个大的方向。在此，我将目前对前端工程化的理解进行梳理。
            </p>
            <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             首先来看下前端发展历程
            </p>
            <img src="./static/img/big.ico"/ >
            <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             其实我们的前端开发就是HTML、CSS、JavaScript，随着时代的发展，成为今天的大前端。<br/><br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>什么是前端工程化？</strong><br/>
             <ul>
               <li>
               <strong> 广义的前端工程化：前端工程是软件工程的一个子类，将软件工程的方法和原理运用在前端开发中, 目的是实现高效开发，有效协同，质量可控。（官方）
               </strong>
              </li>
              <li>
               <strong>
                狭义的前端工程化：将项目从开发环境部署到生产环境的过程。包括构建、部署、测试等。（自己的理解）
               </strong>
              </li>
            </ul>
            </p><br/><br/>
            <p>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               前端工程化组成部分：代码规范、分支管理、模块管理、自动化测试、构建、部署
            </p>
          </div>
       
          `
}]
export {
  technologyNav,
  technologyContent
}

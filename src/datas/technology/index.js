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
}, {
  title: '对闭包的初步理解',
  key: '3'
}, {
  title: '异步与单线程',
  key: '4'
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
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          对于js比较难理解之一：原型、原型链、原型继承...现在工作中都不会接触到比较底层的js，很多都是前端大佬们
          封装好的框架、工具，所以要真正说起来确实对原型的概念比较淡，相互之间的关系也摸不清楚。<br/>
          在开始之前总结一下为何会有原型的存在：<strong>为了解决数据共享，减少内存消耗</strong><br/>
          根据例子讲解一下原型：
          </p>
          <img src="./static/technology/prototype1.png" class="books-img" / >
          <img src="./static/technology/prototype2.png" class="books-img" / >
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          每次使用构造函数Animal()实例化出对象的时候，就会给每个实例对象的eat()方法和sleep()方法开辟空间，如果
         实例化对象多了之后，会浪费大量的内存。<strong>原型对象</strong>的出现就是解决此问题。
         
          </p>
          <img src="./static/technology/prototype3.png" class="books-img" / >
          <img src="./static/technology/prototype4.png" class="books-img" / >
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>现将构造函数、原型对象、实例对象之间的关系表示出来</strong>
          </p>
          <img src="./static/technology/prototype5.png" class="books-img" / >
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          原型链就是根据实例对象与原型对象的关系来建立的。如果要得到某实例对象属性或方法，首先会去实例对象自身找，没有
          再去原型上找(构造函数的prototype)，对象调用属性和方法会从__proto__属性查找，如果没有找到，则__proto__的__proto__
          找， 这样就形成了一条原型链，并且会无休止的往上找。所以原型链的尽头为null,而一般Object的prototype就为null。
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          原型的继承：利用原型可以实现继承，面向对象的编程语言中有（class）类的概念，但是JavaScript不是面向对象的语言，
          所以js中没有类（class）（ES6中实现了class）,但是js可以模拟面向对象的思想编程，js中通过构造函数来模拟类的概念。
          改变原型的指向可以实现方法的继承。借用构造函数继承
          </p>
          <img src="./static/technology/prototype7.png" class="books-img" / >
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ypenbsp;&nbsp;
          所以Student的原型指向Person.prototype，已经改变了它本身的指向。
          </p>
          </div>
       
          `
}, {
  key: '3',
  content: `
          <h2>对闭包的初步理解</h2>
          <div>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          闭包也是js中比较重要的一个知识点，我们可以把闭包简单理解成<strong>定义在一个函数内部的函数</strong>。
          因此，闭包就是将函数内部和函数外部连接起来的一座桥梁。接下来结合案例来了解下闭包。
          </p>
          <img src="./static/technology/bibao1.png" class="books-img" / >
         <p>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         根据上面的例子可以看出，这就是一个简单的闭包。在fn()调用之后会将里面整个函数体返回，要想获取到函数的内容，还要再调用 一次。
         闭包的弊端会容易造成内存的泄露，如果一个变量长期保存的内存中，又忘记清除掉，可以在定义变量时或函数返回时将变量设置为null。能不用闭包还是尽量不要用，
         变量长期在内存在驻留的话，将会内存造成负载。
         </p>

          </div>
       
          `
}, {
  key: '4',
  content: `
          <h2>异步与单线程</h2>
          <div>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          异步与单线程是javascript中比较重点的两个概念。在最开始学习的时候看到很多书和文章里面都说js是单线程的，
          当时也只是有个印象没有深入了解，随着工作中的使用一直留下了这个困惑，现在好好梳理一下。
          
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         在工作中异步操作出现的频率是比较高的，包括现在es6中对异步的一些处理，如:Generator函数、async函数以及nodeJs中回调。
         好了，言归正传，在原生JS中的异步场景。例如网络请求（ajax请求、动态图片加载）、定时任务（setTimeout、setInterval）、事件绑定这些都是典型的异步操作。
         到底什么是异步？生活中也有很多常见的例子：早上上班打开电脑从github拉取项目代码，发现运行的时候node_modules没有，现在要下载，执行cnpm install
         将项目上生产/开发两个环境所有模块下载，（模块量太大，一般要很久的时间才下载完）。但现在项目组又要开会，就等电脑自己下载，我就去开会，开会一个小时结束后，
         回到座位，发现模块已经安装完成，直接npm start就可以启动项目啦。这就是一个异步的过程。因为下载模块与开会这两件事相互不影响，且可以同时进行。
         在js中，当打开一个网页，需要下载样式文件，图片等，如果我们可以将dom与样式文件同时渲染。那当网络比较慢的时候，我们的网页就不会是一片空白，至少是有骨架的。
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         那么什么是单线程呢？官方解析：单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。
         这样一看感觉和异步的概念是自相矛盾的，js的设计既然是单线程的又怎么能够允许异步操作呢？原来，js虽然是单线程的但是它的执行环境，
         比如浏览器、nodejs内部却是多线程的，像定时任务、事件监听这些都是浏览器提供的其他线程完成的。异步操作的线程是由浏览器这些运行环境来提供的，比如chrome的v8引擎,
         那么操作完成之后又如何告诉主线程呢？这时候回调函数派上用场了，整个程序就是由事件驱动的，每个事件都会绑定相应的回调函数。
          </p> 
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          在面试中经常会问题的一些面试题，就跟异步与单线程相关。
          </p>
          <img src="./static/technology/async.png" class="books-img" / >
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          有很多人会一下子说出答案是:0,1,2...9，其实这就是比较容易被坑的时候。setTimeout是一个异步执行的函数，当程序运行时，会先执行同步代码，遇到有异步的
          代码会将它们依次放入执行队列中，等到同步代码执行完后再去队列中执行异步代码。等异步的setTimeout执行时，for循环中的变量i已经变成了10，因此会打印
          10,10,10,10...(打印10次)。
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          参考文章: <a href="https://www.cnblogs.com/woodyblog/p/6061671.html" target="_black">js的单线程和异步</a>
          </p>
         <p>
        
         </p>

          </div>
       
          `
}]
export {
  technologyNav,
  technologyContent
}

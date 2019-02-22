/**
 * @author: lulu
 * @date:
 * @desc: 前端静态菜单项
 */
const booksNav = [{
  title: 'ECMAScript 6 入门',
  key: '1'
},{
  title: '深入理解ES6',
  key: '2'
}, {
  title: 'JavaScript高级程序设计',
  key: '3'
}, {
  title: '深入浅出React与Redux',
  key: '4'
}]
const booksContent = [{
  key: '1',
  content: `
          <h2>ECMAScript 6 入门</h2>
          <div>
           <img src="./static/books/es6.jpg"/>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             阮一峰大神的ES6入门书籍，这本书和《深入理解ES6》就可以对照着来看，这本书对于应用就讲的比较详细，非常适合用来上手ES6，
             也可以作为文档手册随时查阅。书中对ES7提案的Decorator（修饰器）,aysnc函数这些特性也有讲解
            </p>
          </div>
       
          `
}, {
  key: '2',
  content: `
          <h2>深入理解ES6</h2>
          <div>
           <img src="./static/books/shenrues6.jpg"/>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             《javascript高级程序设计》作者的又一JS力作。对ES6的新特性、语法、扩展API都有从原理的详细讲解。看完之后对ES6的基本使用方法就能有一个全面的理解。
             书中的很多原理性的讲解在我一开始读的时候不是很能明白，到现在很多东西也还很懵懂。这本书在原理性东西上讲的有点深入，在应用上却讲的比较浅，
             实际使用的时候可能不是很好上手。可以配合一些应用讲的比较细的资料使用
            </p>
          </div>
          `
},{
  key: '3',
  content: `
          <h2>JavaScript高级程序设计</h2>
          <div>
           <img src="./static/books/javascript.jpg"/>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            这本书被誉为前端开发的红宝书，我入门js其实倒也不是看的这本书，他的内容相对于新手来说可能不是很友好，
            本书适合有一定编程经验的开发人员阅读。第三版的内容以ES5标准进行讲解，内容涵盖全面，
            主要涉及js的语法原理、与浏览器的交互、新兴webAPI和高级技巧，在性能优化和错误调试方面也有相应的介绍。
            目前这本书我也只看完过一遍，很多内容在结合实际工作中使用能够更好的吸收，
            有很多东西也没有看懂，实际工作中也没有使用到。后面需要继续有针对性的多读几次。
            </p>
          </div>
          `
},  {
  key: '4',
  content: `
          <h2>深入浅出React与Redux</h2>
          <div>
           <img src="./static/books/react_redux.jpg"/>
           <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本书对于react与redux 有一点基础的人来说是比较容易上手的，里面主要讲解了很多案例，
            使用React和Redux的实战经验,系统分析React和Redux结合的优势，与开发技巧，为开发大型系统提供参考。
            </p>
          </div>
       
          `
}]
export {
  booksNav,
  booksContent
}

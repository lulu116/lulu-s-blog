/*import Mock from 'mockjs'
const Random = Mock.Random // Mock.Random是一个工具类，用于生成各种随机数据
let data = [] // 接受生成数据的数组
// 自定义生成的个数
for (let i = 0; i < 10; i++) {
  let template = {
    'Boolean': Random.boolean, // 可生成基于数据类型
    'Natural': Random.natural(1, 10), // 生成1到100之间自然数
    'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    'Range': Random.range(0, 10, 2), // 生成一个随机数组
    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
    'Color': Random.color(), // 生成一个颜色随机值
    'Paragraph': Random.paragraph(2, 5), // 生成2至5个句子的文本
    'Name': Random.name(), // 生成姓名
    'Url': Random.url(), // 生成web地址
    'Address': Random.province() // 生成地址
  }
  data.push(template)
}
// 自定义扩展方法
Random.extend({
  skill: function (date) {
    var aaa = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(aaa)
  }
})
// 根据数据模块生成模拟数据
Mock.mock('/data/index', 'post', {
  name: {
    first: '@First', // @点位符，相当于Mock.Random
    skill: Random.skill()
  }
})
// 被拦截的ajax请求的响应时间，ms
Mock.setup({
  timeout: 400
})*/

export default {
  'GET api/v3/cloud/instanceType?dbType=1': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的'
      },
      {
        key: '1',
        label: '专注设计'
      },
      {
        key: '2',
        label: '辣~'
      },
      {
        key: '3',
        label: '大长腿'
      },
      {
        key: '4',
        label: '川妹子'
      },
      {
        key: '5',
        label: '海纳百川'
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000'
      },
      city: {
        label: '杭州市',
        key: '330100'
      }
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888'
  }
}

/* 
使用mockjs定义mock接口的模块
*/
import Mock from 'mockjs'

//加载json数据
import categoryData from './category.json'
import categoryListData from './categoryList.json'
import homeData from './homeData.json'

// 定义mock接口: homeData
Mock.mock('/mock/home', {
  code:0,
  data: homeData
})
//定义mock接口: categoryData
Mock.mock('/mock/category', {
  code: 0,
  data: categoryData
})
//定义mock接口: categoryListData
Mock.mock('/mock/categorylist', {
  code:0,
  data: categoryListData
})

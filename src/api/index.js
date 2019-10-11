/* 包含多个接口请求函数的模块 */
import ajax from './ajax'

//使用代理
const prefix = '/api'

//首页数据
export const reqHomeData = ()=> ajax('/mock/home')  //请求mock数据

//分类列表数据
export const reqCategoryList = () => ajax('/mock/categorylist') //请求mock数据

//分类列表右侧数据
export const reqCategory = () => ajax('/mock/category') //请求mock数据
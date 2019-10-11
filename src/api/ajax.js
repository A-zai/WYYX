/* 用于封装axios的模块 每个函数的返回值都是promise对象 
** 包装axios
** 
*/
import axios from 'axios'

export default function ajax(url, data = {}, methods = 'GET') {
  return new Promise((resovle, reject) => {
    let promise;
    if (methods === 'GET') {
      promise = axios.get(url, {
        params: data
      })
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(response =>{
        console.log('请求成功')
        resovle(response.data)
      })
      .catch(error =>{
        alert('请求失败' + error.msg)
      })
  })
}
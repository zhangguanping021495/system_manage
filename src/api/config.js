//接口配置文件
//导入axios
import axios from 'axios'
//创建axios实例
const service = axios.create({
    // 覆写库的超时默认值
    // 现在，在超时前，所有请求都会等待 2.5 秒
    timeout:2500
});

//添加拦截器

//发送请求之前，给它的请求头添加一个token值传给后端，这样就不同每一个加token值
axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
  },  (error) => {
    // 对请求错误做些什么
    console.log(error)
  });

// 添加响应拦截器
axios.interceptors.response.use( (response) => {
    // 对响应数据做点什么
    let res={}
    res.status=response.status
	  res.data=response.data
    return response;
  },  (error) => {
    // 对响应错误做点什么
    console.log(error)
  });
  export default service
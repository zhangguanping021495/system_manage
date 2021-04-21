import Mock from 'mockjs'

import homeApi from './home.js'

import userApi from './user.js'

Mock.mock( '/api/home/getData', 'get',homeApi.getHomeData )


//配置拦截用户相关的url
//正则相当于/api/user/getUserData
Mock.mock(/\/user\/getUserData/,'get',userApi.getUserList)
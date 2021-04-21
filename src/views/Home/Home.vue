<template>

    <el-row :gutter="20" id="home">
        <el-col :span="8">
            <!-- 用户信息 -->
            <el-card shadow="hover" style="height: 290px;">
                <!-- 登录用户 -->
                <div class="user">
                    <img :src="userImg" alt="">
                    <div class="userinfo">
                        <p class="name">admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <!-- 登录信息 -->
                <div class="login-info">
                    <p>登录时间：<span>2021/2/26 21:34</span></p>
					<p>登录地点：<span>广东省茂名市电白区树仔镇</span></p>
                </div>
            </el-card>

            <!-- 表格信息 -->
            <el-card shadow="hover" style="height: 500px;margin-top: 20px;">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                    v-for="(val,key) in tableLabel"
                    :prop="key"
                    :label="val"
                    >
                    </el-table-column>
                    <!-- <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址">
                    </el-table-column> -->
              </el-table>
            </el-card>
        </el-col>

        <el-col :span="16">

            <!-- 订单信息 -->
            <div class="order">
                <el-card shadow="hover" v-for="i in countData" class="num" :body-style="{display:'flex',padding:'0px'}" >

                   <i class="icon" :class="'el-icon-'+i.icon" :style="{backgroundColor:i.color}"></i>
                   <div class="msg">
                       <p class="price">￥{{i.value}}</p>
                       <p class="txt">{{i.name}}</p>
                </div>
                </el-card>
            </div>

            <!-- 折线图 -->
            <el-card shadow="hover">
                <my-echarts style="width:100% ;height: 280px" :chartData="echartsData.order" ></my-echarts>
            </el-card>
            <!--饼图和柱状图-->
            <div class="graph">
                <!-- 柱状图-->
                <el-card shadow="hover">
               <my-echarts :chartData="echartsData.user"  style="height: 260px"></my-echarts>
                </el-card>
                <!-- 饼图-->
                <el-card shadow="hover">
                <my-echarts :isAxisChart="false" :chartData="echartsData.mall"  style="height: 260px"></my-echarts>
                </el-card>
            </div>
        </el-col>
    </el-row>
    
</template>

<script>
import MyEcharts from '../../components/CourseEcharts.vue'
// import MyEcharts from '../../components/CourseEchart.vue'

export default{
    components: {
        MyEcharts
    },
    data(){
        return{
            userImg:require('../../assets/img/user.jpg'),
            countData: [ /* 订单的模拟数据*/
                {
                    name: '今日支付订单',
                    value: 100,
                    icon: 'success',
                    color: '#2ec7c9'
                },
                {
                    name: '今日收藏订单',
                    value: 150,
                    icon: 'star-on',
                    color: '#ffb980'
                },
                {
                    name: '今日未支付订单',
                    value: 80,
                    icon: 's-goods',
                    color: '#5ab1ef'
                },
                {
                    name: '本月支付订单',
                    value: 210,
                    icon: 'success',
                    color: '#2ec7c9'
                },
                {
                    name: '本月收藏订单',
                    value: 500,
                    icon: 'star-on',
                    color: '#ffb980'
                },
                {
                    name: '本月未支付订单',
                    value: 300,
                    icon: 's-goods',
                    color: '#5ab1ef'
                }
            ],
            
            // 定义数组接收mock数据
            tableData:[],
            tableLabel:{
                name:"课程" ,
                monthBuy:"本月购买",
                todayBuy: "今日购买",  
                totalBuy: "总购买"
            },
            //定义对象保存echarts数据
            echartsData:{
                //饼图
                mall:{
                    series:[]
                },
                //折线图
                order:{
                    xData:[],
                    series:[]
                },
                //柱状图
                user:{
                    xData:[],
                    series:[]
                }
            }
        }
    },
    methods: {
        getTableData(){
            this.$http.get('/api/home/getData').then(res=>{
                this.tableData = res.data.body.tableData
                // console.log( res.data.body);

                res = res.data.body

                //订单折线图
                let order = res.orderData
                // console.log(order)
                //x轴数据，y轴数据
                this.echartsData.order.xData = order.date
                //取出series中的name部分  --- "键名",通过map获取值
                let keyArray = Object.keys(order.data[0]) //获取所有对象中key名，es6 语法
                // console.log(keyArray);
                keyArray.forEach(key => {
                    this.echartsData.order.series.push({//通过map获取value的值
                        name:key,
                        data:order.data.map(item => item[key]),
                        type:'line'
                    })
                })
                // console.log( this.echartsData.order.series);


                //用户 柱状图 
					this.echartsData.user.xData = res.userData.map(item => item.date)
					console.log(this.echartsData.user.xData )
					this.echartsData.user.series.push({
						name:'新增用户',
						data:res.userData.map(item => item.new),
						type:'bar'
					})
					/* 活跃 */
					this.echartsData.user.series.push({
						name:'活跃用户',
						data:res.userData.map(item => item.active),
						type:'bar'
					})
					
					//饼图
					this.echartsData.mall.series.push({
						data:res.mallData,
						type:'pie'
					})

            })
        },
        // getList(){
        //     this.$http.get('/api/home/getData').then(res=>{
        //         // console.log(res.data.body);
        //     })
        // }
    },
    mounted () {
        // this.getList()
        this.getTableData()

    } 
     
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/home.scss'
</style>
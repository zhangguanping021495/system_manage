<template>
    <!-- 为使用echarts准备一个盒子 -->
    <div id="main" style="height:100%;" ref="echart"></div>
</template>

<script>
import echarts from 'echarts'
export default{
    /*
        饼图没有坐标轴，柱状图、折线图有坐标轴，所以要分为两种情况
        核心数据：
            xAxis:X轴
            yAxis:Y轴
            系列列表：series---里面的type属性决定是什么图形
        
        接收父组件的两个数据
        1.charData   --- xData:[],series:[]   
        2.isAxisChart 判断是否有坐标轴，没有的话上面的xData就为空
    */
    //数据是从父组件中传过来的
    props:{
        charData:{  //从父组件传过来的值
            type:Object,
            default(){
                return{
                    xData:[],
                    series:[]
                }
            }
        },
        //判断是否有坐标轴
        isAxisChart:{
            type:Boolean,
            default:true   //默认有坐标轴
        }
    },
    //选择有坐标轴还是没有坐标轴
    computed:{
        options(){
            return this.isAxisChart ? this.axisOption : this.nomalOption
        } 
    },
    data () {
       return {
        //用来存放初始化的echart对象
        echart:null,
        //有坐标轴
        axisOption:{

            xAxis: {
                type: 'category',
				data: [],
            },
            yAxis: {
                type: 'value',
            },
            series: []  //数据需要渲染成什么样子
        },
        //无坐标轴
        nomalOption:{
            series: [],
        },
     }
   },
   //监听数据
   watch:{//数据发生变化时再去更新数据
		chartData:{
			handler:function(){
				this.initChartData()
			},
			deep:true
			},
			// isCollSapse(){//侦听方法，当折叠时调用resizeChart
			// 	setTimeout(()=>{
			// 		this.resizeChart()
			// 	},300)
			// }
		
   },

   methods:{
       //初始化echart
    initChart(){
        this.initChartData()
        if(this.echart){ //判断容器是否存在
            //存在就不同初始化，直接将配置项传递进来
            this.echart.setOption(this.options)  
        }else{
            //初始化echarts
            this.echart = echarts.init(this.$refs.echart)
            this.echart.setOption(this.options) 
        }
    },
    //处理数据
    initChartData(){
        //判断有坐标轴的数据和没有坐标轴的数据
        if(this.isAxisChart){
            this.axisOption.xAxis.data = this.chartData.xData
            this.axisOption.series = this.chartData.series
            console.log("axis");
        }else{
            this.nomalOption.series =this.chartData.series
            console.log("nomal");
        }
    }

   },
   mounted () {
      
   }

};

</script>

<style lang="scss" scoped>

</style>
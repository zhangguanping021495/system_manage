<template>
    <div id="main" style="height:400px;" ref="echart"></div>
</template>

<script>
import echarts from "echarts";
export default{
    name: 'CourseEchart',   
    data() {
        return {
        option:{
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
         }
        };
    },
    
    methods: {
        getEcharts(){
            let echart = echarts.init(this.$refs.echart);
            echart.setOption(this.option);
        }
    },
    mounted() {
        this. getEcharts()
    },
};
</script>

<style lang="scss" scoped>

</style>
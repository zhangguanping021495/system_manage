<template>
    <div class="manage-user">
        <div class="manage-header">
            <!-- 插槽插入的按钮 -->
            <el-button type="primary">新增</el-button>
            <common-form :formLabel="formLabel" :form="searchForm" inline>
                <el-button type="primary" @click="getUserList(searchForm.keyword)" >搜索</el-button>
            </common-form>   
        </div>
        <div class="manage-table">
            <common-table 
            :tableLabel="tableLabel" 
            :tableData="tableData" 
            :config="config"
            @changPage="getUserList()">
        </common-table>
        </div>
    </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'
export default{
   components: {
    CommonForm,
    CommonTable
   },
   data () {
       return {
           searchForm:{
               keyword:'',
           },
           formLabel:[
               {
                   model:'keyword',
                   label:'',
                   type:'input'
               }
           ],
           tableData:[],  //表格数据
           tableLabel:[   //列参数
               {
                    prop:'name',
                    label:'姓名'
               },{
                    prop:'age',
                    label:'年龄'
               },{
                    prop:'sexLabel',
                    label:'性别'
               },{
                    prop:'birth',
                    label:'出生日期'
               },{
                    prop:'addr',
                    label:'地址'
               },
           ],
           config:{
               page:1,
               total:20,
           }
       }
   },
   methods:{
			getUserList(name=""){//获取用户数据
			    // 搜索时,页码要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
			    name ? (this.config.page=1) : ''
				this.$http.get('/api/user/getUserData',{
					params:{
						page:this.config.page,
						name
					}
				}).then(res =>{
					// console.log(res)
					this.tableData=res.data.list.map(item=>{
						item.sexLabel = item.sex === 0 ? '女' : '男'
						return item
					})
					console.log(res.data)
					this.config.total= res.data.count
				})
			}
		},
		mounted() {
			this.getUserList()
		}
	}


</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/common.scss'
</style>
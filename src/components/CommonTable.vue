<template>
    <div class="common-table">
        <el-table
            height="90%"
            :data="tableData"
            style="width: 100%">
            <!-- 第一列默认序号 -->
            <el-table-column
            label="序号"
            width="85">
            <template slot-scope="scope">
                <!-- $index 就是索引值，默认从0开始 -->
                <span style="margin-left: 10px">{{(config.page-1)*10 + scope.$index + 1}}</span>
            </template>
            </el-table-column>

            <el-table-column
            show-overflow-tooltip
            v-for="item in tableLabel"
            :label="item.label"
            >
            <template slot-scope="scope">
                <!--  -->
                <span style="margin-left: 10px">{{ scope.row[item.prop]}}</span>
            </template>
            </el-table-column>
            <!-- 操作列 -->
            <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-pagination
         class="pages"
        layout="prev, pager, next"
        :total="config.total"
        :current-page.sync="config.page"
        @current-change="changPage">
      </el-pagination>
    </div>
</template>

<script>
export default{
    name: 'commonTable',
    props: {
        tableData:Array,   //数据列表
        tableLabel:Array,   //列数据
        config:Object,     //分页数据
    },
    methods: {
        changPage(page){
            this.$emit('changPage',page);
        }
    }
};
</script>

<style lang="scss" scoped>
   .common-table{
       position: relative;
       height: 92%;
       background-color: #fff;
   }
   .pages{
       position: absolute;
       bottom: 10px;
       right: 0;
   }
</style>
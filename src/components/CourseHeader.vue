<template>
    <header>
        <div class="l-content">
            <el-row>
                <el-button @click="collapseMenu" icon="el-icon-menu" circle  size="small"></el-button>   
            </el-row>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
            </el-breadcrumb>     
        </div>
        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img :src="userImg" alt="" class="user_img">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
                  
                </el-dropdown-menu>
              </el-dropdown>
        </div>
    </header>
</template>

<script>
//辅助函数mapState
import {mapState} from 'vuex'
export default {
    name: 'CourseHeader',
    computed: {
        ...mapState({
            current:state => state.tab.currentMenu  //通过vuex的mapState方法接收一下数据
        })
    },
    data() {
        return {
            userImg:require("../assets/img/user.jpg")
        };
    },
    mounted() {
        
    },
    methods: {
        collapseMenu(){
            this.$store.commit('collapseMenu')
        }
       
    },
};
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        width: 100%;
        height: 100%;
        /* 垂直居中对齐 */
        align-items: center;
        /* 两端对齐 */
        justify-content: space-between;
    }
    .l-content{
        display: flex;
        align-items: center;   
    }
    .el-button{
        margin: 0 20px;
    }

    .r-content .user_img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
   
</style>
<style>
    .el-breadcrumb__item .el-breadcrumb__inner{
		
			color:#606266
		
	}
	.el-breadcrumb__item:last-child .el-breadcrumb__inner{
		color:#000000;
	}
</style>
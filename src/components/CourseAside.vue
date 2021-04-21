<template>
    <el-menu 
    
    :collapse = "isCollapse" 
    :default-active="$route.path" 
    class="el-menu-vertical-demo" 
    background-color="#99CC33" 
    text-color="#fff" 
    active-text-color="#666ccc"
    router
    >
        <!-- 渲染有两种情况，有子菜单和没子菜单 -->
        <!-- 有子菜单利用计算属性和过滤器判断一下 -->
        <el-menu-item 
        v-for="item in noChildren"
        :index="item.path"
        @click= "clickMenu(item)"
        >
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>

        <!-- <el-menu-item index="2">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
        </el-menu-item>

        <el-menu-item index="3">
            <i class="el-icon-s-management"></i>
            <span slot="title">课程管理</span>
        </el-menu-item>
        -->
        <el-submenu 
        v-for="items in hasChildren"
        >
            <template slot="title" >
                <i :class="'el-icon-'+items.icon"></i>
                <span>{{items.label}}</span>
            </template>
            <el-menu-item-group>    
                <el-menu-item   
                v-for="sub in items.children"
                :index="sub.path"
                @click= "clickMenu(sub)"
                >
                    <i :class="'el-icon-'+ sub.icon"></i>
                    <span>{{sub.label}}</span>
                </el-menu-item>
               
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: 'CourseAside',
        computed: {
            //没有子菜单
            noChildren(){
                return this.menu.filter(item=>!item.children)
            },
            //有子菜单
            hasChildren(){
                return this.menu.filter(item=>item.children)
            },
            isCollapse(){
                return this.$store.state.tab.isCollapse
            }
        },
        methods: {
            clickMenu(item){
                // console.log(item);

                //调用vuex中的selectMenu方法存储
                this.$store.commit('selectMenu', item)
            },
            
        },
        //模拟后台数据
        data () {
            return {
                menu:[
                    {

                        path:'/home',
                        name:'home',
                        label:'首页',
                        icon:'s-home'
                    },
                    {
                      
                        path:'/user',
                        name:'user',
                        label:'用户管理',
                        icon:'user-solid'
                    },
                    {
                       
                        path:'/course',
                        name:'course',
                        label:'课程管理',
                        icon:'s-management'
                    },
                    {
                        
                        label:'其他',
                        name:'other',
                        icon:'setting',
                        children:[
                            {
                              
                                path:'/page1',
                                name:'page1',
                                label:'页面1',
                                icon:'s-marketing'
                            },
                            {
                               
                                path:'/page2',
                                name:'page2',
                                label:'页面2',
                                icon:'s-marketing'
                            },
                        ]
                    },
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
    .el-aside{
        border: 0;
        height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
  }
</style>
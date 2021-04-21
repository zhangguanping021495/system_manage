export default{
    state: { //存放共享数据
        //当前菜单
        currentMenu:null,
        isCollapse:false,
        
        //定义数组存放左侧菜单，最后再传给tab
        tabsList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'s-home'
            },
        ]
    },
    mutations: {   //同步存放方法
        selectMenu(state,val){
            // val.name === 'home' ? (state.currentMenu=null) : (state.currentMenu=val)
            //侧边栏的值需要面包屑、tag选项标签
            if( val.name === 'home' ){
                state.currentMenu = null;
            }else{
                state.currentMenu = val;
                //判断数组中的对象是否等于点击传入的值-----如果等于-1那么说明数组中不存在这个对象，就插入，否则就什么都不做
                //findIndex 通过下标查找数组中的每一项，如果有，返回一次之后，就不会再调用执行函数
                let result = state.tabsList.findIndex(item => item.name === val.name);
                result === -1 ?  state.tabsList.push(val) : ''
            }
        },
        closeTab(state,val){
            let result = state.tabsList.findIndex(item => item.name === val.name);
            state.tabsList.splice(result,1)
        },
        collapseMenu(state){  //操作是否折叠菜单
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {  //异步方法

    },
}
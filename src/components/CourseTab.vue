<template>
    <div class="tags">
        <el-tag
        type="success"
        :effect="$route.name === tag.name ? 'dark' : 'plain'"
        :key="tag"
        v-for="(tag,index) in tags"
        :closable="tag.name !== 'home'"
        :disable-transitions="false"
        @close="handleClose(tag,index)"
        @click="clickTags(tag)"
        
        >
        {{tag.label}}
        </el-tag> 
    </div>
</template>

<script>
//取值通过mapState映射过来
import {mapState,mapMutations} from 'vuex'
export default{
    computed: {
        ...mapState({
            //获取vuex中的数据
            tags:state => state.tab.tabsList
        })
    },
   
    methods: {
        ...mapMutations({
            close:'closeTab',
        }),
        handleClose(tag,index) {

            let tagslength = this.tags.length - 1;
            this.close(tag);
            
        //通过index判断
            //如果关闭的不是当前路由的话就不跳转
            if(tag.name !== this.$route.name){
                return
            }
            //如果关闭的是最右边的话，就往左边跳,其他的话就正常跳转就可以了
            if(index === tagslength){
                this.$router.push({name:this.tags[index-1].name})
            }else{
                this.$router.push({name:this.tags[index].name})
            }
          
            

        },
        clickTags(item){
            //跳转路由
            this.$router.push({name:item.name})
        }
    }
  }
</script>

<style lang="scss" scoped>
  .tags{
      padding:15px 20px 0;
     
  }
  .tags .el-tag+.el-tag{
        margin-left:5px;
      }
</style>
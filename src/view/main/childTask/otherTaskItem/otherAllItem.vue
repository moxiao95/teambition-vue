<template>
<ul class="other-all-item">
    <Lis 
        v-for="item in userItemList"
        :key="item._id"
        :item="item"
    />
    <!-- 添加项目分类的按钮 -->
    <li class="all-item-add">
        <div class="item-add-btn" v-show="addItemShow" @click.stop="addShowBox">
            <Icon type="plus" size="20"></Icon>
            <span>新建任务列表</span>
        </div>
        <div class="item-add-box" v-show="!addItemShow">
            <Input v-model="addValue" placeholder="新建任务列表" style="width: 240px" />
            <div>
                <Button type="ghost" class="add-box-btn" @click.stop="addBoxCancel">取消</Button>
                <Button type="primary" class="add-box-btn" @click.stop="addBoxYes">保存</Button>
            </div>
        </div>
    </li>
</ul>
</template>
<script>
import Lis from '@/view/main/childTask/otherTaskItem/otherItemList'
export default{
    components:{
        Lis
    },
    data(){
        return {
            addItemShow:true,
            addValue:''
        }
    },
    methods:{
        addShowBox(){ // 改变当前的装填
            this.addItemShow = false;
        },
        addBoxCancel(){ // 改变状态，清空value
            this.addItemShow = true;
            this.addValue = '';
        },
        addBoxYes(){ // 确定添加
            let id = this.$route.query.itemId;
            if(this.addValue !== ''){
                this.http.postItemDetail({id:id,title:this.addValue}).then(({data})=>{
                    if(data.success){
                        this.http.getDetailAll({id:id}).then(({data})=>{
                            this.$store.commit('addUserItemList',{list:data.doc});
                        })
                        this.addItemShow = true;
                        this.addValue = '';
                    }
                })
            }else{
                alert('请输入内容');
            }
        }
    },
    computed:{
        userItemList(){
            return this.$store.state.userItemList;
        }
    },
    created(){
        // 先要获取到当前用户的项目id，其实可以不用把获取到的项目信息放到vuex中，直接放在当前页面中就行
        let id = this.$route.query.itemId;
        this.http.getDetailAll({id:id}).then(({data})=>{
            this.$store.commit('addUserItemList',{list:data.doc});
        })
    }
}
</script>
<style>
.other-all-item{
    margin-top: 40px;
    position: absolute;
    left: 0;
    top: 50px;
    right: 0;
    bottom: 0;
    overflow-x: auto;
    white-space: nowrap;
    padding-left: 20px;
}
.other-all-item>li{
    margin: 20px 12px 0 0;
    display: inline-block;
    width: 288px;
    height: 93%;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgb(219, 218, 218);
    background-color: #eee;
    position: relative;
}

.other-all-item .all-item-add{
    cursor: pointer;
    width: 288px;
    height: auto;
    color: #a6a6a6;
    font: 18px/46px "微软雅黑";
    vertical-align: top;
}
.all-item-add .item-add-box{
    text-align: center;
}
.item-add-box .add-box-btn{
    margin: 0 15px;
}
.all-item-add .item-add-btn{
    padding-left: 30px;
}
.all-item-add .item-add-btn:hover{
    color: blue;
}
</style>

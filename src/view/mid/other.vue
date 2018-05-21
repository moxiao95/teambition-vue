<template>
  <div class="route-other-box" @click="disNoneClickBox">
        <div class="other-head">
            <!-- 左侧的导航 -->
            <div class="link-box">
                    <div>
                        <router-link to="/" tag="span">首页</router-link>
                        <Icon type="chevron-right"></Icon>
                    </div>
                    <div class="now-btn" @click="showAllItem">
                        <span class="only-text">{{nowItem.title}}</span>
                        <Icon type="chevron-down" size="10"></Icon>
                    </div>
                    <p :class="{'item-is-star':nowItem.star}">
                        <Icon type="star" size="24"></Icon>
                    </p>
            </div>
            <!-- 点击上面导航显示的东西 -->
            <AllItem class="link-click-show" v-show="showClickBox"/>
            <h4 class="other-box-title">任务</h4>
        </div>
        <section class="other-child-item clearfix">
            <!-- 所有的项目子内容显示 -->
            <ItemTask 
                class="other-item-task"
                v-for="main in nowItem.list"
                :key="main.title"
                :list="main"
                :ids="nowItem.id"
            />
            <!-- 点击之后显示添加新的子任务的框 -->
            <p 
                class="other-add-item" 
                @click.stop="addTaskList"
                v-show="!addBoxShow"
            >
                <Icon type="plus-circled" class="other-add-icon" size="30"></Icon>
                <span class="other-add-btn">新建任务列表</span>
            </p>
            <!-- 新的子任务的添加区 -->
            <p  
                v-show="addBoxShow"
                class="other-to-add"
            >
                <Input 
                    v-model="addListTitle" 
                    placeholder="新建任务列表" 
                    style="width: 240px"
                    class="other-add-input"
                ></Input>
                <section class="other-btn-box">
                    <Button type="primary" class="other-yes-btn" @click.stop="yesToAdd">确定</Button>
                    <Button type="primary" class="other-no-btn" @click.stop="noToAdd">取消</Button>
                </section>
                
            </p>
        </section>
  </div>
</template>
<script>
import AllItem from '@/view/mid/smallModular/allItem'
import ItemTask from '@/view/mid/smallModular/itemTask'
export default{
    components:{
        AllItem,ItemTask
    },
    data(){
        return {
            showClickBox: false,
            addBoxShow:false,
            addListTitle:''
        }
    },
    methods:{
        showAllItem(){ // 点击之后显示出来所有的任务，并且标记当前所处的任务
            this.showClickBox = !this.showClickBox;
        },
        disNoneClickBox(e){ // 点击之后不是在当前的routelink上面就消失
            if(e.target.className==='only-text'||e.target.className==='ivu-icon ivu-icon-chevron-down')return;
            this.showClickBox = false;
        },
        addTaskList(){ // 点击之后显示添加子内容的框
            this.addBoxShow = true;
        },
        noToAdd(){ // 点击之后添加子内容的框消失
            this.addBoxShow = false;
        },
        yesToAdd(){ // 确定添加子内容
            this.addBoxShow = false;
            if(this.addListTitle===''){
                alert('不能为空')
                return;
            };
            let id = this.$route.query.user;
            let item = this.$store.state.hasItemData.find(item=>item.id=== +id);
            console.log(item.list.length)
            if(item.list.length===5){
                alert('超过限制，最多创建5个');
                return;
            };
            this.$store.commit('addItemToList',{id:id,list:{title:this.addListTitle,childItem:[]}});
            this.addListTitle = '';
        }
    },
    computed:{
        nowItem(){ // 显示当前所处项目里面的内容
            let id = this.$route.query.user;
            let item = this.$store.state.hasItemData.find(item=>item.id=== +id);
            return item;
        }
    }
}
</script>
<style>
.other-btn-box{
    text-align: center;
}
.other-add-input{
    height: 40px;
    margin: 30px 20px 10px;
}
.other-yes-btn,
.other-no-btn{
    margin: 0 10px;
}
.other-add-btn{
    float: left;
    font: 20px/60px "微软雅黑";
}
.other-add-icon{
    float: left;
    margin: 15px 10px 0 10px;
}
.other-add-item{
    float: left;
    width: 280px;
    height: 60px;
    border-radius: 5px;
    box-shadow: 2px 3px 3px 3px rgb(165, 165, 165);
    background-color: rgb(236, 234, 234);
    cursor: pointer;
}
.other-to-add{
    float: left;
    width: 280px;
    height: 145px;
    border-radius: 5px;
    box-shadow: 2px 3px 3px 3px rgb(165, 165, 165);
    background-color: rgb(236, 234, 234);
}
.other-item-task{
    position: relative;
    float: left;
    width: 280px;
    height: 700px;
    border-radius: 5px;
    box-shadow: 2px 3px 3px 3px rgb(165, 165, 165);
    margin-right: 10px;
    background-color: rgb(236, 234, 234, .5);
}
.other-box-title{
    font: bold 20px/40px "微软雅黑";
    position: absolute;
    left: 50%;
    margin-left: -20px;
}
.link-click-show{
    width: 300px;
    height: auto;
    border-radius: 5px;
    position: absolute;
    top: 44px;
    left: 30px;
    background: rgb(253, 248, 248);
    box-shadow: 2px 2px 2px 2px rgb(161, 161, 161, .4);
    z-index: 99;
    font: 20px/30px "微软雅黑";
}
.route-other-box{
    position: relative;
}
.other-child-item{
    padding: 20px 80px;
}
.other-child-item>div{
    float: left;
    width: 200px;
    height: 300px;
    border: 2px solid #000;
    margin-bottom: 10px;
}
.other-head{
    height: 40px;
    background-color: rgb(243, 241, 241, .7);
    position: relative;
}
.link-box{
    float: left;
    font: 20px/40px "微软雅黑";
    color: #000;
    margin: 0 20px;
}
.link-box span{
    cursor: pointer;
}
.link-box>div{
    float: left;
    margin-right: 10px;
} 
/* .now-btn{
    margin-left: 10px;
} */
.link-box>p{
    float: left;
    margin-top: 2px;
}
.item-is-star{
    color: yellow;
}
</style>

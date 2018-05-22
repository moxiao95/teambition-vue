<template>
    <section>
        <!-- 头部区域 -->
        <header class="task-head">
            <span class="task-head-title">{{list.title}}</span>
            <span class="task-head-num">{{list.childItem.length>0?list.childItem.length:''}}</span>
            <span class="task-head-icon" @click="editTaskItem">
                <Icon type="arrow-down-b"></Icon>
            </span>
        </header>
        <!-- 点击小尖角显示的两个按钮 -->
        <section class="task-chagne-btn" v-show="showChangeBtn">
            <div @click="toEditTaskItem">编辑</div>
            <div @click="toDelTaskItem">删除</div>
        </section>
        <!-- 点击编辑之后显示的编辑框 -->
        <section class="task-edit-box" v-show="taskEditShow">
            <div>编辑列表</div>
            <span class="task-edit-close" @click="taskEditCancel">
                <Icon type="ios-close-empty" size="30" ></Icon>
            </span>
            <Input 
                v-model="itemTitle"
                placeholder="新建任务列表" 
                style="width: 150px"
                class="task-edit-inp"
            ></Input>
            <section>
                <Button type="primary" class="task-edit-btn" @click="taskEditYes">确定</Button>
                <Button type="primary" class="task-edit-btn" @click="taskEditCancel">取消</Button>
            </section>
        </section>
        <!-- 底下小任务显示 -->
        <ul class="task-item-list">
            <!-- 已经拥有的项目 -->
            <li 
                class="task-show-list clearfix"
                v-if="list.childItem.length>0?true:false"
                v-for="item in childTask"
                :key="item.title"
            >
                <div class="task-list-details" @click.stop="toChangeItemClick(item)" v-show="!item.isChange">
                    <Icon type="ios-circle-outline" size="30" class="task-list-icon" v-show="!item.isClick"></Icon>
                    <Icon type="ios-checkmark-outline" size="30" class="task-list-icon" v-show="item.isClick"></Icon>
                    <span class="task-title-color">{{item.title}}</span>
                    <span class="task-list-set" @click.stop="taskItemEdit(item,true)">
                        <Icon type="ios-gear" size="30"></Icon>
                    </span>
                </div>
                <div class="change-item-box" v-show="item.isChange">
                    <Input 
                        :placeholder="item.title" 
                        style="width: 200px"
                        class="change-items-inp"
                        v-model="changeItemValue"
                    ></Input>
                    <section class="change-btn-box">
                        <Button type="primary" class="change-items-btn" @click="changeBtnYes(item)">确定</Button>
                        <Button type="primary" class="change-items-btn" @click="taskItemEdit(item,false)">取消</Button>
                    </section>
                </div>
            </li>
            <!-- 添加内容 -->
            <li class="task-add-item" @click.stop="addItemTask" v-show="taskAddShow">
                <span>
                    <Icon type="plus-circled" size="20"></Icon>
                </span>
                <span>添加任务</span>
            </li>
            <!-- 点击添加内容按钮显示的添加框 -->
            <li class="task-to-adds" v-show="!taskAddShow">
                <Input 
                    v-model="addItemTitle"
                    placeholder="任务内容" 
                    style="width: 220px"
                    class="task-adds-inp"
                ></Input>
                <section>
                    <Button type="primary" class="task-adds-btn" @click="taskAddYes">确定</Button>
                    <Button type="primary" class="task-adds-btn" @click="taskAddCancel">取消</Button>
                </section>
            </li>
        </ul>
    </section>
</template>
<script>
export default{
    data(){
        return {
            single:false,
            showChangeBtn:false,
            taskEditShow:false,
            addItemTitle:'',
            itemTitle:this.list.title,
            taskAddShow:true,
            changeTaskItemContent:false,
            changeItemValue:''
        }
    },
    props:['list','ids'],
    computed:{
        childTask(){ // 当前子任务的所有的子内容
            return this.list.childItem
        }
    },
    methods:{
        toChangeItemClick(item){ // 修改子内容的勾选状态
            let id = this.$route.query.user;
            this.$store.commit('toChangeItemClick',{id:id,list:this.list,item:item})
        },
        changeBtnYes(item){ // 用来改变想要改变的子内容的title
            let id = this.$route.query.user;
            if(this.changeItemValue!==''){
                let changeItemValue = this.changeItemValue.trim();
                this.$store.commit('changeTaskListTitle',{id:id,list:this.list,title:changeItemValue,item:item});
                this.changeItemValue = '';
            }
            this.$store.commit('itemChangeState',{id:id,item:item,list:this.list,bl:false})
        },
        taskItemEdit(item,bl){ // 点击set图标改变显示状态
            let id = this.$route.query.user;
            this.$store.commit('itemChangeState',{id:id,item:item,list:this.list,bl:bl})
        },
        addItemTask(){ // 点击添加按钮之后显示子内容添加栏
            this.taskAddShow = !this.taskAddShow;
        },
        taskAddCancel(){ // 点击添加按钮之后关闭子内容添加栏
            this.taskAddShow = !this.taskAddShow;
        },
        taskAddYes(){ // 确定添加一个新的子内容
            if(this.addItemTitle!==''){
                let id = this.$route.query.user;
                this.$store.commit('taskToAddItem',{id:id,list:this.list,content:{title:this.addItemTitle,isClick:false,isChange:false}});
                this.addItemTitle = '';
            }
            this.taskAddShow = !this.taskAddShow;
        },
        itemChangeCheck(){
            console.log(this.single)
        },
        editTaskItem(){ // 点击小尖角显示编辑和删除框
            this.showChangeBtn = !this.showChangeBtn;
        },
        toEditTaskItem(){ //编辑小任务
            this.taskEditShow = true;
            this.showChangeBtn = false;
        },
        taskEditCancel(){ // 取消编辑
            this.taskEditShow = false;
        },
        taskEditYes(){ // 修改任务title
            let id = this.$route.query.user;
            this.$store.commit('changeTaskTitle',{id:id,list:this.list,title:this.itemTitle})
        },
        toDelTaskItem(){ //删除小任务
            this.$store.commit('delTaskItem',{item:this.list,id:this.ids})
        }
    }
}
</script>
<style>
.task-adds-inp{
    margin: 10px 20px;
}
.task-adds-btn{
    width: 90px;
    margin: 5px 10px;
}
.task-to-adds{
    width: 260px;
    height: 100px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgb(192, 190, 190);
}
.task-to-adds>section{
    text-align: center;
}
.task-edit-box{
    position: absolute;
    top: 30px;
    right: -50px;
    width: 160px;
    height: 110px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgb(221, 221, 221);
    z-index: 88;
    text-align: center;
}
.task-edit-close{
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    cursor: pointer;
}
.task-edit-box>div{
    font: 18px/30px "微软雅黑";
}
.task-edit-inp{
    margin: 5px 5px;
}
.task-edit-btn{
    margin: 0 10px;
}
.task-chagne-btn{
    position: absolute;
    top: 30px;
    right: -5px;
    width: 100px;
    height: 80px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px rgb(221, 221, 221);
    text-align: center;
    border-radius: 5px;
    z-index: 77;
}
.task-chagne-btn>div{
    font: 20px/40px "微软雅黑";
    cursor: pointer;
}
.task-chagne-btn>div:hover{
    background-color: rgb(221, 221, 221);
    color: #000;
}
.task-item-list .task-add-item{
    float: none;
    height: 50px;
    background-color: rgb(243, 245, 241, .5);
    box-shadow: none;
    border-radius: 10px;
    color: blue;
    text-indent: 20px;
    word-spacing: 16px;
    cursor: pointer;
}
.task-item-list .task-add-item:hover{
    background-color: rgb(218, 214, 214);
}
.task-item-list .task-add-item span{
    float: left;
    color: blue;
    font: 20px/50px "微软雅黑";
}
.task-item-list{
    list-style: none;
    width: 260px;
    margin: 0 auto;
}
.task-item-list .task-show-list{
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgb(221, 221, 221);
    margin-bottom: 5px;
    cursor: pointer;
    padding-bottom: 10px;
}
.task-item-list .task-show-list .change-item-box{
    width: 240px;
    margin: 0 10px;
}
.task-show-list .change-item-box .change-btn-box{
    width: 200px;
    text-align: center;
}
.change-item-box .change-btn-box .change-items-btn{
    padding: 0 10px;
    font: 16px/40px "微软雅黑";
    margin: 0 10px;
}
.change-item-box .change-btn-box .change-items-btn span{
    font: 16px/40px "微软雅黑";
}
.task-show-list .change-item-box .change-items-inp{
    margin-bottom: 7px;   
}
.task-item-list .task-show-list .task-list-set{
    float: right;
    padding: 0 10px;
    height: 30px;
    color: rgb(37, 37, 37, .7);
}
.task-item-list .task-show-list .task-title-color{
    font: 20px/30px "微软雅黑";
    color: #000;
}
.task-item-list .task-show-list>div{
    float: left;
    width: 230px;
    padding: 10px 0 0 20px;
    font: 20px/30px "微软雅黑";
}
.task-item-list .task-show-list>div>span{
    margin-left: 40px;
}
.task-item-list .task-show-list>div .task-list-icon{
    position: absolute;
}
.task-head{
    height: 50px;
    font: 18px/50px "微软雅黑";
    border-color: rgb(218, 215, 215);
}
.task-head .task-head-title{
    float: left;
    margin-left: 10px;
}
.task-head .task-head-icon{
    float: right;
    padding: 0 10px;
    margin-right: 20px;
}
.task-head .task-head-num{
    float: left;
    padding: 0 10px;
    color: rgb(140, 153, 163);
}
.clearfix:after{
    content: '';
    display:block;
    clear: both;
}
</style>

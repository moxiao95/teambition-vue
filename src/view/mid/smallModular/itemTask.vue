<template>
    <section>
        <header class="task-head">
            <span class="task-head-title">{{list.title}}</span>
            <span class="task-head-num">{{list.childItem.length>0?list.childItem.length:''}}</span>
            <span class="task-head-icon" @click="editTaskItem">
                <Icon type="arrow-down-b"></Icon>
            </span>
        </header>
        <section class="task-chagne-btn" v-show="showChangeBtn">
            <div @click="toEditTaskItem">编辑</div>
            <div @click="toDelTaskItem">删除</div>
        </section>
        <section class="task-edit-box" v-show="taskEditShow">
            <header>编辑列表</header>
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
        <ul class="task-item-list">
            <li 
                class="task-show-list"
                v-show="list.childItem.length>0?true:false"
            >
                <div>
                    <Checkbox v-model="single" size="large" @change="itemChangeCheck">{{list.childItem.title}}</Checkbox>
                </div>
            </li>
            <li class="task-add-item" @click.stop="addItemTask(list)">
                <span>
                    <Icon type="plus-circled" size="20"></Icon>
                </span>
                <span>添加任务</span>
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
            value:'',
            itemTitle:this.list.title
        }
    },
    props:['list','ids'],
    computed:{
        childTask(){
            return this.list.childItem
        }
    },
    methods:{
        addItemTask(list){
            console.log(this.$route.query.user,list)
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
.task-edit-box>header{
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
    color: #000;;
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
    height: 50px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgb(221, 221, 221);
    margin-bottom: 5px;
}
.task-item-list .task-show-list div{
    height: 20px;
    padding: 15px 0 0 40px;
    word-spacing: 20px;
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
</style>

<template>
    <section>
        <header class="task-head">
            <span class="task-head-title">{{main.title}}</span>
            <span class="task-head-num">{{main.childItem.length>0?main.childItem.length:''}}</span>
            <span class="task-head-icon">
                <Icon type="arrow-down-b"></Icon>
            </span>
        </header>
        <ul class="task-item-list">
            <li 
                class="task-show-list"
                v-for="item in childTask"
                :key="item.id"
            >
                <div>
                    <Checkbox v-model="single" size="large" @change="itemChangeCheck">{{item.title}}</Checkbox>
                </div>
            </li>
            <li class="task-add-item" @click.stop="addItemTask">
                <Icon type="plus-circled" size="20"></Icon>
                <span>添加任务</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default{
    data(){
        return {
            single:false
        }
    },
    props:['main'],
    computed:{
        childTask(){
            return this.props.main.childItem
        }
    },
    methods:{
        addItemTask(){

        },
        itemChangeCheck(){
            console.log(arguments)
        }
    }
}
</script>
<style>
.task-item-list .task-add-item{
    float: none;
    background-color: rgb(236, 234, 234);
    box-shadow: none;
    border-radius: 0;
    color: blue;
    font: 20px/50px "微软雅黑";
    text-indent: 20px;
    word-spacing: 16px;
    cursor: pointer;
}
.task-item-list .task-add-item span{
    color: blue;
}
.task-item-list{
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

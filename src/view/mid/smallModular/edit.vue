<template>
<div>
    <header>
        <span>项目设置</span>
        
        <span 
            class="change-close-btn"
            @click.stop="canChange"
        >
            <Icon type="ios-close-empty" size="50" ></Icon>
        </span>
    </header>
    <div class="content">
        <div>项目名称:</div>
        <Input 
            :placeholder="changeItem.title===''?'请输入新的项目名称':changeItem.title" 
            class="name-change"
            v-model="itemTitle"
        ></Input>
        <div>项目简介:</div>
        <Input 
            type="textarea" 
            :placeholder="changeItem.info===''?'请输入新的项目简介':changeItem.info" 
            class="info-cahnge"
            v-model="itemInfo"
        ></Input>
        <Button 
            type="primary" long 
            class="yes-btn"
            @click="yesChange"
        >确定修改</Button>
        <Button 
            type="primary" long 
            class="del-btn"
            @click="yesDelete"
        >删除项目</Button>
        <Button 
            type="primary" long 
            class="can-btn"
            @click.stop="canChange"
        >取消修改</Button>
    </div>
</div>
    
</template>
<script>
export default{
    data(){
        return {
            itemTitle:'',
            itemInfo:''
        }
    },
    methods:{
        canChange(){
            this.$store.commit('disAddBox',{bl:false});
            this.$store.commit('changeBox',{bl:false});
            this.itemTitle = '';
            this.itemInfo = '';
        },
        yesChange(){
            this.itemTitle = this.itemTitle.trim();
            this.itemInfo = this.itemInfo.trim();
            if(this.itemTitle.length>7){
                this.itemTitle = this.itemTitle.slice(0,6)
            }
            this.$store.commit('toChangeItem',{title:this.itemTitle,info:this.itemInfo});
            this.$store.commit('disAddBox',{bl:false});
            this.$store.commit('changeBox',{bl:false});
            this.itemTitle = '';
            this.itemInfo = '';
        },
        yesDelete(){
            this.$store.commit('toDelItem');
            this.$store.commit('disAddBox',{bl:false});
            this.$store.commit('changeBox',{bl:false});
            this.itemTitle = '';
            this.itemInfo = '';
        }
    },
    computed:{
        changeItem(){
            return this.$store.state.wantChangeItem;
        }
    }
}
</script>
<style>
header{
    height: 60px;
    border-bottom: 2px solid rgb(31, 30, 30, .4);
    font: 30px/60px "微软雅黑";
    text-align: center;
    margin-bottom: 5px;
}
.content div{
    font: bold 20px/36px "微软雅黑";
    text-indent: 20px;
    margin-bottom: 10px; 
}
.name-change{
    width: 90%;
    height: 30px;
}
.info-cahnge{
    width: 90%;
}
.del-btn,
.can-btn,
.yes-btn{
    margin: 10px 10%;
    width: 80%;
    height: 40px;
}
.change-close-btn{
    position: absolute;
    top: 5px;
    right: 20px;
    padding: 0 10px;
    cursor: pointer;
}
</style>

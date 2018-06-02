<template>
<section class="small-box-change">
    <header class="box-change-head">修改详情</header>
    <div class="box-change-main">
        <!-- 完成选项 -->
        <div class="change-main-complete">
            <span class="main-comlete-text">是否完成：</span>
            <span v-show="!isClick" class="box-change-click" @click.stop="changeNewClick">
                <Icon type="ios-circle-outline" size="30" ></Icon>
            </span>
            <span v-show="isClick" class="box-change-click" @click.stop="changeNewClick">
                <Icon type="ios-checkmark-outline" size="30" ></Icon>
            </span>
            <span v-show="isClick">已完成</span>
            <span v-show="!isClick">未完成</span>
        </div>
        <!-- 修改标题 -->
        <div class="change-main-title">
            <span>项目标题：</span>
            <Input v-model="smallTitle" placeholder="这里不能为空" style="width: 200px" class="box-change-title"></Input>
        </div>
        <!-- 修改日期 -->
        <div class="change-main-date">
            <span class="fll">修改日期：</span>
            <Col span="12" class="fll">
                <DatePicker type="date" v-model="dateValue" placeholder="选择日期" style="width: 200px"></DatePicker>
            </Col>
        </div>
        <!-- 修改时间 -->
        <div class="change-main-time">
            <span class="fll time-text">修改时间：</span>
            <Col span="12" class="fll time-inp">
                <TimePicker type="time" v-model="timeValue" placeholder="选择时间" style="width: 200px"></TimePicker>
            </Col>              
        </div>
    </div>
    <!-- 按钮 -->
    <footer class="change-foot-btns">
        <Button type="primary" class="change-foot-btn" @click.stop="yseChangeEdit">确定</Button>
        <Button type="ghost" class="change-foot-btn" @click.stop="upEditBox">取消</Button>
    </footer>
</section>    
</template>
<script>
export default{
    data(){
        return {
            smallTitle:'这里是title',
            dateValue:'',
            timeValue:'',
            isClick:false,
            id:''
        }
    },
    methods:{
        upEditBox(){
            this.$store.commit('maskShow',{bl:false});
            this.$store.commit('smallShowEdit',{bl:false});
        },
        yseChangeEdit(){
            if(this.smallTitle==='')return;
            this.http.postEditSmall({id:this.id,title:this.smallTitle,date:this.dateValue,time:this.timeValue,click:this.isClick}).then(({data})=>{
                if(data.success){
                    this.$store.commit('maskShow',{bl:false});
                    this.$store.commit('smallShowEdit',{bl:false});
                }
            })
        },
        changeNewClick(){
            this.isClick = !this.isClick;
        }
    },
    computed:{
        newSmall(){
            return this.$store.state.newSmallItem;
        }
    },
    created(){
        let item = this.$store.state.newSmallItem;
        this.smallTitle = item.smallTitle;
        this.dateValue = item.smallDate;
        this.timeValue = item.smallTime;
        this.isClick = item.smallClick;
        this.id = item._id;
    }
}
</script>
<style>
.small-box-change{
    position: fixed;
    left: 50%;
    top: 100px;
    width: 380px;
    padding: 0 45px 20px;;
    box-sizing: border-box;
    height: auto;
    margin-left: -230px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgb(143, 120, 120);
    border-radius: 5px;
    z-index: 99;
}
.box-change-head{
    height: 50px;
    text-align: center;
    font: bold 20px/50px "微软雅黑";
}
.box-change-main{
    height: auto;
}
.change-main-complete{
    position: relative;
    height: 50px;
    font: bold 16px/50px "微软雅黑";
}
.main-comlete-text{
    margin-right: 40px;
}
.box-change-click{
    position: absolute;
    top: 10px;
    left: 95px;
    z-index: 10;
    margin-top: -5px;
}
.change-main-title,
.change-main-date{
    height: 50px;
    font: bold 16px/50px "微软雅黑";
    margin-bottom: 10px;
}
.change-main-time{
    height: 50px;
    margin-bottom: 10px;
}
.change-main-time>.time-text{
    font: bold 16px/50px "微软雅黑";
    
}
.change-main-time>.time-inp{
    margin-top: 10px;
}
.box-change-title{
    margin: 5px 0;
}
.fll{
    float: left;
    margin-right: 5px;
}
.change-foot-btns{
    height: 50px;
    text-align: center;
}
.change-foot-btn{
    width: 100px;
    margin: 5px 20px 0;
}
</style>

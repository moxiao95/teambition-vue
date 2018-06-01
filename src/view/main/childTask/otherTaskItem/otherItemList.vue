<template>
<li class="detail-item-list">
    <!-- 整个的头部 -->
    <header class="item-li-head">
        <div class="li-head-title">{{item.detailTitle}}{{listAllSmall.length>0?' · '+listAllSmall.length:''}}</div>
        <div class="li-head-btn" @click.stop="clickChangeData">
            <Icon type="android-arrow-dropdown-circle"></Icon>
        </div>
    </header>
    <!-- 列表菜单 -->
    <div class="li-change-box" v-show="changeBoxShow">
        <header class="change-box-head">
            <span>列表菜单</span>
            <span class="change-box-cancel" @click.stop="boxShowNone">
                <Icon type="ios-close-empty" size="30"></Icon>
            </span>
        </header>
        <ul class="change-box-option">
            <li @click.stop="changeItemList">
                <Icon type="edit"></Icon>
                编辑列表
            </li>
            <li @click.stop="addItemList">
                <Icon type="plus"></Icon>
                添加新列表
            </li>
            <li @click.stop="delNowItem">
                <Icon type="trash-a"></Icon>
                删除列表
            </li>
        </ul>
    </div>
    <!-- 编辑列表 -->
    <div class="change-item-list" v-show="changeShow">
        <header class="change-item-head">
            <span>编辑列表</span>
            <span class="change-box-cancel" @click.stop="changeBoxShowNone">
                <Icon type="ios-close-empty" size="30"></Icon>
            </span>
        </header>
        <div>
            <Input v-model="newItemTitle" style="width: 160px" class="change-box-inp"></Input>
            <div>
                <Button type="ghost" class="change-box-btn" @click.stop="changeBoxShowNone">取消</Button>
                <Button type="primary" class="change-box-btn" @click.stop="changeYes">确定</Button>
            </div>
        </div>
    </div>
    <!-- 添加列表 -->
    <div class="add-item-list" v-show="addShow">
        <header class="add-item-head">
            <span>添加新列表</span>
            <span class="change-box-cancel" @click.stop="addBoxShowNone">
                <Icon type="ios-close-empty" size="30"></Icon>
            </span>
        </header>
        <div>
            <Input v-model="newItemValue" placeholder="请输入任务" style="width: 160px" class="change-box-inp"></Input>
            <div>
                <Button type="ghost" class="change-box-btn" @click.stop="addBoxShowNone">取消</Button>
                <Button type="primary" class="change-box-btn" @click.stop="addYes">确定</Button>
            </div>
        </div>
    </div>
    <!-- 所有的子项任务 -->
    <ul class="item-li-list">
        <!-- 子任务 -->
        <Small 
            v-for="item in listAllSmall"
            :key="item._id"
            :id="item._id"
        />
        <!-- 添加按钮 -->
        <li class="li-list-add" @click.stop="createSmallShow" v-show="listAddShow">
            <Icon type="plus-circled" size="20"></Icon>
            <span>添加任务</span>
        </li>
        <!-- 具体的添加详情 -->
        <li class="create-small-box" v-show="!listAddShow">
            <div class="small-box-value">
                <Input v-model="smallValue" type="textarea" placeholder="任务内容" style="width: 230px"></Input>
            </div>
            <div class="clearfix small-box-time">
                <Col span="12" >
                    <DatePicker type="date"  placeholder="设置日期" style="width: 100px" @on-change="changeDate" placement="bottom-end"></DatePicker>
                </Col>
                <Col span="12" >
                    <TimePicker type="time"  placeholder="设置时间" style="width: 100px" @on-change="changeTime"></TimePicker>
                </Col>
            </div>
            <div class="small-box-btn">
                <Button type="ghost" class="small-box-btns" @click.stop="createSmallShow">取消</Button>
                <Button type="primary" class="small-box-btns" @click.stop="createSmallItem">确定</Button>
            </div>
        </li>
    </ul>
</li>
</template>
<script>
import Small from '@/view/main/childTask/otherTaskItem/otherDetailSmall'
export default{
    components:{
        Small
    },
    props:['item'],
    data(){
        return {
            changeBoxShow:false,
            addShow:false,
            changeShow:false,
            newItemTitle:'',
            newItemValue:'',
            listAddShow:true,
            smallValue:'',
            dateValue:'',
            timeValue:'',
            listAllSmall:[]
        }
    },
    created(){
        this.http.getSeeSmall({id:this.item._id}).then(({data})=>{
            if(data.success){
                this.listAllSmall = [...data.doc];
            }
        })
    },
    methods:{
        clickChangeData(){
            this.changeBoxShow = !this.changeBoxShow;
        },
        boxShowNone(){
            this.changeBoxShow = false;
        },
        changeBoxShowNone(){
            this.changeShow = false;
        },
        addBoxShowNone(){
            this.addShow = false;
        },
        delNowItem(){ // 删除当前列表
            this.http.postDelDetail({id:this.item._id}).then(({data})=>{
                this.changeBoxShow = false;
                if(data.success){
                    let id = this.$route.query.itemId;
                    this.http.getDetailAll({id:id}).then(({data})=>{
                        this.$store.commit('addUserItemList',{list:data.doc});
                    })
                }
            })
        },
        addItemList(){ // 添加分类列表框显示
            this.addShow = true;
            this.changeBoxShow = false;
        },
        changeItemList(){ // 修改框出现
            this.changeShow = true;
            this.changeBoxShow = false;
            this.newItemTitle = this.item.detailTitle;
        },
        changeYes(){ // 修改分类列表的信息
            let title = this.newItemTitle.trim();
            if(title===''){
                alert('不能为空');
                return;
            };
            this.http.postDetailChange({id:this.item._id,title:this.newItemTitle}).then(({data})=>{
                this.changeShow = false;
                if(data.success){
                    let id = this.$route.query.itemId;
                    this.http.getDetailAll({id:id}).then(({data})=>{
                        this.$store.commit('addUserItemList',{list:data.doc});
                    })
                }
            })
        },
        addYes(){ // 添加新任务分类
            let title = this.newItemValue.trim();
            if(title===''){
                alert('不能为空');
                return;
            };
            let id = this.$route.query.itemId;
            this.http.postItemDetail({id:id,title:title}).then(({data})=>{
                this.addShow = false;
                if(data.success){
                    this.http.getDetailAll({id:id}).then(({data})=>{
                        this.$store.commit('addUserItemList',{list:data.doc});
                    })
                }
            })
        },
        createSmallShow(){ // 创建分类中的小任务
            this.listAddShow = !this.listAddShow;
        },
        changeTime(timeValue){
            this.timeValue = timeValue;
        },
        changeDate(dateValue){
            this.dateValue = dateValue;
        },
        createSmallItem(){ // 创建用户任务的中的小任务
            let title = this.smallValue.trim();
            if(title===''){
                alert('不能为空');
                return;
            }
            this.http.postCreatSmall({
                id:this.item._id,
                title:title,
                date:this.dateValue,
                time:this.timeValue
            }).then(({data})=>{
                this.listAddShow = !this.listAddShow;
                if(data.success){   
                    this.http.getSeeSmall({id:this.item._id}).then(({data})=>{
                        if(data.success){
                            this.listAllSmall = [...data.doc];
                        }
                    })
                }
            })
        }
    }
}
</script>
<style>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.item-li-head{
    padding:0 10px 0 20px;
    height: 40px;
    font: bold 16px/40px "微软雅黑";
    margin-bottom: 5px;
}
.li-head-title{
    float: left;
}
.li-head-btn{
    float: right;
    padding: 0 10px;
}
.item-li-list{
    width: 260px;
    margin: 0 14px;
}
.item-li-list .create-small-box{
    border-radius: 0;
    height: auto;
}
.small-box-value{
    text-align: center;
    padding: 5px 0;
}
.small-box-time,
.small-box-btn{
    text-align: center;
    padding: 5px 0;
}
.small-box-btn{
    text-align: center;
}
.small-box-btn .small-box-btns{
    margin: 0 30px;
}
.item-li-list>li{
    background-color: #fff;
    min-height: 50px;
    border-radius: 5px;
    margin-bottom: 5px;
}
.item-li-list .li-list-add{
    background-color: transparent;
    box-sizing: border-box;
    padding-left: 15px;
    font: 18px/50px "微软雅黑";
    color: blue;
    cursor: pointer;
}
.li-list-add>span{
    margin-left: 7px;
}
.li-change-box,
.change-item-list,
.add-item-list{
    width: 200px;
    height: auto;
    position: absolute;
    top: 30px;
    right: -70px;
    z-index: 10;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 1px 1px 1px rgb(219, 217, 217);
    padding-bottom: 5px;
}
.change-box-head,
.change-item-head,
.add-item-head{
    height: 44px;
    border-bottom: 1px solid #a6a6a6;
    text-align: center;
    font: bold 20px/40px "微软雅黑";
    position: relative;
}
.change-box-cancel{
    position: absolute;
    top: 0;
    right: 10px;
    padding: 5px 10px;
    cursor: pointer;
}
.change-box-option>li{
    font: 20px/40px "微软雅黑";
    margin: 3px 0;
    text-align: center;
    color: rgb(121, 121, 121);
    cursor: pointer;
}
.change-box-option>li:hover{
    background-color:#f5efef;
}
.change-item-list>div{
    text-align: center;
}
.add-item-list>div{
    text-align: center;
}
.change-box-inp{
    margin: 5px 0;
}
.change-box-btn{
    margin: 0 6px;
}
.detail-item-list{
    vertical-align: top;
}
</style>

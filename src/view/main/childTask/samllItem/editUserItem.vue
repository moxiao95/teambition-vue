<template>
<section class="child-item-edit">
    <header>
        <span>项目设置</span>
        <span 
            class="change-close-btn"
            @click.stop="cancelChange"
        >
            <Icon type="ios-close-empty" size="50" ></Icon>
        </span>
    </header>
    <div class="content">
        <div class="content-text">项目名称:</div>
        <Input 
            placeholder="请输入新的项目名称" 
            class="name-change"
            v-model="title"
        ></Input>
        <div class="content-text">项目简介:</div>
        <Input 
            type="textarea" 
            placeholder="请输入新的项目简介" 
            class="info-cahnge"
            v-model="info"
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
            @click.stop="cancelChange"
        >取消修改</Button>
    </div>
</section>
</template>
<script>
export default{
    data(){
        return {
            title:'',
            info:'',
            bl:false
        }
    },
    methods:{
        cancelChange(){ // 取消修改
            this.$store.commit('maskShow',{bl:false});
            this.$store.commit('editShow',{bl:false});
        },
        yesChange(){ // 修改用户任务
            let id = null;
            if(this.bl){
                id = this.$store.state.childWantChange._id;
            }else{
                id = this.$route.query.itemId;
            }
            if(this.title!==''){
                this.http.postModify({id:id,title:this.title,info:this.info}).then(({data})=>{
                    if(data.success){
                        if(this.bl){
                            let id = JSON.parse(localStorage.getItem('userId'));
                            this.http.getItem({userId:id}).then(({data})=>{
                                let list = [...data.doc];
                                this.$store.commit('getAllData',{list});
                            })
                        }else{
                            this.http.getFindone({id:id}).then(({data})=>{
                                if(data.success){
                                    // 当前所在任务
                                    this.$store.commit('changeHeadTitle',{item:data.doc});
                                }
                            })
                        }
                    }
                })
            }
            this.$store.commit('maskShow',{bl:false});
            this.$store.commit('editShow',{bl:false});
        },
        yesDelete(){ // 删除用户任务
            let id = null;
            if(this.bl){
                id = this.$store.state.childWantChange._id;
            }else{
                id = this.$route.query.itemId;
            }
            this.http.postDel({id:id,bl:true}).then(({data})=>{
                if(data.success){
                    let id = JSON.parse(localStorage.getItem('userId'));
                    this.http.getItem({userId:id}).then(({data})=>{
                        let list = [...data.doc];
                        this.$store.commit('getAllData',{list});
                    })
                    this.$router.push({path:'/task'});
                }
                this.$store.commit('maskShow',{bl:false});
                this.$store.commit('editShow',{bl:false});
            })
        }
    },
    created(){
        this.bl = typeof this.$route.query.itemId === 'undefined'?true:false;
        if(this.bl){
            this.title = this.$store.state.childWantChange.itemTitle;
            this.info = this.$store.state.childWantChange.itemInfo;
        }else{
            this.http.getFindone({id:this.$route.query.itemId}).then(({data})=>{
                if(data.success){
                    // 当前所在任务
                    this.title = data.doc.itemTitle;
                    this.info = data.doc.itemInfo;
                }
            })
        }
        
    }
}
</script>
<style>
.child-item-edit{
    z-index: 99;
    position: fixed;
    left: 50%;
    top: 80px;
    width: 300px;
    background-color: #fff;
    box-shadow: 2px 3px 3px 3px rgb(165, 163, 163);
    border-radius: 5px;
    margin-left: -150px;
}
.child-item-edit>header{
    height: 60px;
    border-bottom: 2px solid rgb(31, 30, 30, .4);
    font: 30px/60px "微软雅黑";
    text-align: center;
    margin-bottom: 5px;
}
.content .content-text{
    font: bold 20px/36px "微软雅黑";
    text-indent: 30px;
}
.name-change{
    margin: 10px 7%;
    width: 86%;
    height: 30px;
}
.info-cahnge{
    margin: 10px 7%;
    width: 86%;
}
.del-btn,
.can-btn,
.yes-btn{
    margin: 10px 7%;
    width: 86%;
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

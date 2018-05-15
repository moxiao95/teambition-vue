<template>
    <section>
        <header class="task-head">
            <span class="task-head-title">待处理</span>
            <span class="task-head-num">1</span>
            <span class="task-head-icon">
                <Icon type="arrow-down-b"></Icon>
            </span>
        </header>
        <ul class="task-item-list">
            <li>123</li>
        </ul>
    </section>
</template>
<script>
    
</script>
<style>
.task-item-list{
    width: 260px;
    margin: 0 auto;
    background-color: #fff;
}
.task-item-list li{
    height: 50px;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 1px rgb(221, 221, 221);
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

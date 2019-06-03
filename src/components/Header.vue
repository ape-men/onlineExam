<template>
<div>
<div class="occupy"><a name="webTop"></a></div>
    <el-row class="c1">
        <el-col :span="6" :offset="2" class ="head">
            <img src="../../src/assets/new.png" width="60px" height="50px">
            <span>在线考试系统</span>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.occupy{
    height: 60px;
}
.c1{
    width: 100%;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    padding-top: 5px;
    background: rgba(255, 255, 255, 0.8);
    margin-left:auto;
    margin-right:auto;
    border-bottom: 1px solid rgba(0,0 ,0, 0.1);
    padding-bottom:10px;
    z-index: 1000;
    min-height: 40px;
}
.head{
    border-radius: 4px;
    color:#31a9cc ;
    font-weight: 900;
    font-size: 30px;
    line-height: 40px;
    min-height: 25px;
}
.head span,img{
    vertical-align: middle;
}
</style>

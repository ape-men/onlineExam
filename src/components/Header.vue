<template>
    <!-- <header>
        <div id="line1"></div>
        <div class="logo">
            <img id="headerlogo" src="../../src/assets/headerlogo.png">
            <div class="right">
                <span style="padding:10px;">你好！</span>
                <span><i class="el-icon-s-custom">  <a class="exit" ref="#">退出登录</a></i></span>
            </div>
        </div>
        <div id="line2"></div>

    </header> -->
    <el-row class="c1">
        <el-col :span="6" class ="head">
            <img src="../../src/assets/new.png" width="60px" height="50px">
            <span>在线考试系统</span>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.c1{
    width: 85%;
    position: fixed;
    left: 0px;
    right: 0px;
        margin-left:auto;
    margin-right:auto;
    border-bottom: 1px solid rgba(0,0 ,0, 0.1);
    padding-bottom:10px;
}
.head{
    /* width: 600px; */
    border-radius: 4px;
    color:#31a9cc ;
    font-weight: 900;
    font-size: 30px;
    line-height: 45px;
}
.head span,img{
    vertical-align: middle;
}
/* #line1 {
    width: 100%;
    height: 10px;
    background-color: rgba(35, 107, 129, 0.808);
}
.logo {
    background-color: rgba(6, 137, 177, 0.808);
}
#headerlogo {
    margin-left: 140px;
}
#line2 {
    width: 100%;
    height:4px;
    background-color: rgba(8, 90, 116, 0.808);;
}
.right {
    margin-top: 50px;
    float: right;
    color: white;
    margin-right: 100px;
}
.exit {
    text-decoration: none;
    cursor: pointer;
} */
</style>

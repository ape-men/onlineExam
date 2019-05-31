<template>
    <header>
        <div id="line1"></div>
        <div class="logo">
            <img id="headerlogo" src="../../src/assets/headerlogo.png">
            <div class="right">
                <span style="padding:10px;">你好！</span>
                <span><i class="el-icon-s-custom"> <a class="exit" ref="#">退出登录</a></i></span>
            </div>
        </div>
        <div id="line2"></div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
#line1 {
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
}
</style>

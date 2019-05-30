<template>
<<<<<<< HEAD
<div class="d1">
        <P>Design by:ape-men（唐佳成，邹文燕，章腾，陈仕炜，董明龙）</P>
        <P>一体化考核项目</P>
</div>
=======
    <el-footer style="height: 120px;">
        <img id="footerlogo" src="../../src/assets/footerlogo.png">
        <div id="intro">
            <P>Designed by:ape-men @一体化小组</P>
            <p>唐佳成,章腾,陈仕炜,董明龙,邹文燕</p>
            <p>邮箱: webmaster@nenu.edu.cn</p>
            <P>地址: https://github.com/ape-men</P>
        </div>
    </el-footer>
>>>>>>> 68dfe094f6193ec873827535c169cbd1b04335ee
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD
.d1{
    height: 90px;
    border-top:1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(49,169,204,0.5);
    text-align: center;
}
.d1 p{
    line-height: 20px;
    color: white;
    font-size:16px;
=======
.el-footer {
    border-top:2px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(6, 137, 177, 0.808);
    height: 400px;
    width: 100%;
    padding-bottom: 10px;
}
.el-footer #intro p {
    line-height: 10px;
    color:white;
    font-size:14px;
>>>>>>> 68dfe094f6193ec873827535c169cbd1b04335ee
    font-weight: 500;
}
.el-footer #footerlogo,#intro {
    float: left;
}
.el-footer #footerlogo{
    margin-top:20px;
    margin-left: 550px;
    margin-right: 20px;
}
img {
    width: 80px;
    height: 70px;
}
</style>

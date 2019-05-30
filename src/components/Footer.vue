<template>
<div class="d1">
        <P>Design by:ape-men（唐佳成，邹文燕，章腾，陈仕炜，董明龙）</P>
        <P>一体化考核项目</P>
</div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

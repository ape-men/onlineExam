<template>
    <el-footer>
        <P>Design by:ape-men（唐佳成，邹文燕，章腾，陈仕炜，董明龙）</P>
        <P>一体化考核项目</P>
    </el-footer>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: Number,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-footer{
    border-top:1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(49,169,204,0.5);
    text-align: center;
}
.el-footer p{
    line-height: 10px;
    color: white;
    font-size:16px;
    font-weight: 500;
}
</style>

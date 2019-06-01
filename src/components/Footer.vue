<template>
<el-row class="fa">
        <el-col :span="20" :offset="2" class="d">
            <P>Designed by:ape-men @一体化小组</P>
            <p>唐佳成,章腾,陈仕炜,董明龙,邹文燕</p>
            <P>小组地址: https://github.com/ape-men</P>
        </el-col>
</el-row>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa{
    min-height: 50px;
    background-color: inherit;
}
.d {
    border-top:1px solid rgba(0, 0, 0, 0.1);
    background-color: #90d7ec;
    text-align: center;
    border-radius: 4px;
    /* padding-bottom: 5px; */
}
.d p {
    line-height: 10px;
    color:white;
    font-size:16px;
    font-weight: 700;
}

</style>

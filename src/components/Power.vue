<template>
    <div class="power">
        <el-button  icon="el-icon-switch-button" circle @click="doclick()"></el-button>
    </div>
</template>

<script>
export default {
name: 'Power',
methods:{
    doclick(){
this.$confirm('是否退出登录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           window.location.href="/login.html";
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });}
        }
}
</script>

<style>
.power{
    position:fixed;
    padding-top:20px;
    left:85%;
    top:0px;
    z-index: 2000;
}
</style>

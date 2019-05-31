<template>
<el-aside width="200px">
  <el-tooltip class="item" effect="dark" content="选择你喜欢的颜色作为该试卷的主色" placement="top-start">
    <el-color-picker v-model="color" show-alpha></el-color-picker>
        </el-tooltip>
    </el-aside>
</template>


<script>
  export default {
    name:'Color',
    data() {
      return {
        color: 'rgba(29, 129, 211, 0.93)'
      }
    }
  };
</script>

<style>
  .box {
    width: 400px;
  }
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
</style>
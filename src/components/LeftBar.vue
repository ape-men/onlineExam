<template>
  <div class="block">
    <el-slider
      v-model="value2"
      :step="5"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>


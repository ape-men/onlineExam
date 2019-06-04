<template>
<div>
    <el-calendar>
    </el-calendar>
</div>
</template>

<script>
import CardList from '@/components/CardList'
export default {
    name: "Calendar",
    components: {
        "card-list": CardList,
    }
}
</script>

<style>
  .is-selected {
    color: #1989FA;
  }
</style>
<template>
<div>
    <canvas></canvas>
</div>
</template>

<script>
import '../../static/js/clock.js'
export default {
    name: "Clock",
    props: {
        startTime: Date,
    },
    created() {
        new Timer(startTime);
    },
    data() {
        return {
            show: true,
        }
    }
}
</script>

<style>
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
</style>
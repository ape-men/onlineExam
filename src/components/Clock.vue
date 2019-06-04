<template>
<div>
    <el-progress type="circle" :show-text="false" :percentage="hourPointer" class="t1"></el-progress>
    <el-progress type="circle" :show-text="false" :percentage="minPointer" class="t2"></el-progress>
    <el-progress type="circle" :show-text="false" :percentage="secPointer" class="t3"></el-progress>
    <span class="t4">{{ hour }} : {{ min }} : {{ sec }}</span>
</div>
</template>

<script>
export default {
    name: "Clock",
    props: {
    },
    created() {
        this.count();
    },
    data() {
        return {
            totalTime: 120,
            timeLeft: 0,
            totalHour: 0,
            hour: 0,
            min: 0,
            sec: 0,
        }
    },
    computed: {
        hourPointer: function() {
            return this.hour / this.totalHour * 100;
        },
        minPointer: function() {
            return this.min / 60 * 100;
        },
        secPointer: function() {
            return this.sec / 60 * 100;
        }
    },
    methods: {
        count() {
            this.timeLeft = this.totalTime * 60;
            this.totalHour = Math.ceil(this.totalTime / 60);
            var timer = setInterval(function() {
                this.timeLeft--;
                if (this.timeLeft < 0) {
                    clearInterval(timer);
                }
                this.hour = Math.floor(this.timeLeft / 3600);
                this.min = Math.floor(this.timeLeft / 60) % 60;
                this.sec = this.timeLeft % 60;
            }.bind(this), 1000);
        }
    }
}
</script>

<style>
.t1,.t2,.t3,.t4{
    position:fixed;
    top: 10px;
    right:10px;
    z-index: 1000;
}
.t1{
    width: 50px;
}
.t2{
    width: 40px;
}
.t3{
     width:30px;
}
.t2{
    
}
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
<template>
<div class="not1">
    <el-timeline>
        <el-timeline-item v-for="(card, index) in cards"
            :key="index"
            v-bind:timestamp="card.date"
            placement="top">
            <notify-card v-bind:info="card"></notify-card>
        </el-timeline-item>
    </el-timeline>
</div>
</template>

<script>
import NotifyCard from '@/components/NotifyCard'
export default {
    name: 'NotifyTimeLine',
    components: {
        "notify-card": NotifyCard
    },
    data() {
        return {
            cards: [
                {
                    title: "",
                    content: "",
                    courseName: "",
                    professor: "",
                    date: "",
                }
            ]
        }
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        notifyDate(date) {
            return date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay();
        },
        fetchData() {
            this.cards = [
                {
                    title: "【补考通知 NEW!】",
                    content: "  同学们，一体化工程实践 课程的补考时间是2019.6.5-2019.6.7,补考对象是考试总成绩不超过60分的同学（课程满分总成绩为100分），低于60分会收到平台自动通知补考。请同学们按时参加补考。",
                    courseName: "一体化工程实践",
                    professor: "刘志勇",
                    date: this.notifyDate(new Date(2019, 6, 9)),
                },
                {
                    title: "【补考通知 NEW!】",
                    content: "  同学们，离散数学 课程的补考时间是2019.6.6-2019.6.8,补考对象是考试总成绩不超过60分的同学（课程满分总成绩为100分），低于60分会收到平台自动通知补考。请同学们按时参加补考。",
                    courseName: "离散数学",
                    professor: "张友",
                    date: this.notifyDate(new Date(2019, 6, 8)),
                },{
                    title: "【答疑通知】",
                    content: "  同学们，高数 课程的答疑时间是2019.5.8的3/4节课,请同学们积极并按时参加课程答疑。",
                    courseName: "一体化工程实践",
                    professor: "刘志勇",
                    date: this.notifyDate(new Date(2019, 5, 25)),
                },{
                    title: "【考试通知】",
                    content: "  同学们，线性代数 课程期末考时间是2019.6.1-2019.6.3,请同学们及时参加。",
                    courseName: "线性代数",
                    professor: "张友",
                    date: this.notifyDate(new Date(2019, 5, 15)),
                },{
                    title: "【考试通知】",
                    content: "  同学们，近代史 课程期末考时间是2019.5.30-2019.6.1,请同学们及时参加。",
                    courseName: "近代史",
                    professor: "阿x",
                    date: this.notifyDate(new Date(2019, 5, 11)),
                }
            ]
        },
    }
}
</script>

<style scoped>
.not1{
    width: 600px;
}
</style>

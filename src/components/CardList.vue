<template>
    <div>
        <ul>
            <component
                v-bind:is="currentCard"
                v-for="(item, index) in cardInfos[currentCard]"
                v-bind:info="item" :key="index">
            </component>
        </ul>
    </div>
</template>

<script>
import ExamCard from '@/components/ExamCard'
import NotifyCard from '@/components/NotifyCard'

export default {
    name: 'ExamList',
    components: {
        'exam-card': ExamCard,
        'notify-card': NotifyCard
    },
    props: {
        currentCard: String,
    },
    computed: {

    },
    data() {
        return {
            cardInfos: {
                "exam-card": [],
                "notify-card": []
            }
        }
    },
    created: function() {
        this.fetchData()
    },
    beforeRouteUpdate: function() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            console.log(this.currentCard);
            this.cardInfos = {
                "exam-card": [
                    {
                        examAddress: "#",
                        examName: "期末考试",
                        courseName: "一体化工程实践",
                        professor: "刘志勇",
                        startTime: new Date(2019, 5, 28, 6, 0),
                        endTime: new Date(2019, 6, 1, 8, 0),
                        totalScore: 100,
                    }
                ],
                "notify-card": [
                    {
                        title: "【补考通知】",
                        content: "  同学们，一体化工程实践 课程的补考时间是2019.6.5-2019.6.7,补考对象是考试总成绩不超过60分的同学（课程满分总成绩为100分），低于60分会收到平台自动通知补考。请同学们按时参加补考。",
                        courseName: "一体化工程实践",
                        professor: "刘志勇",
                        date: new Date(2019, 6, 8),
                    }
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

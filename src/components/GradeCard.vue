<template>
    <li>
        <h5 class="gradesTitle">【{{ info.courseName }}】</h5>
        <div class="gradesMain">
        <p>课程名<span>{{ info.courseName }}</span></p>
        <p>总成绩<span>{{ info.score }}分</span></p>
        </div>
        <div class="gradesSource">
        <label>{{ gradeDate }}</label>
        </div>
    </li>
</template>

<script>
export default {
    name: 'GradeCard',
    props: {
        info: {
            examAddress: String,
            courseName: String,
            professor: String,
            score: Number,
            date: Date,
        }
    },
    computed: {
        gradeDate: function () {
            let date = this.info.date;
            return date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay();
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    li {
        list-style: none;
        vertical-align: bottom;
        list-style-type: none;
        line-height: 16px;
        color: #666;
        font-size: 12px;
        padding: 10px 0 20px 0;
        width: 600px;
        border-bottom: #d4d4d4 1px dotted;
    }
    .gradesBox {
        width: 600px;
        margin: 0 auto;
    }
    .gradesBox .gradesTitle {
        width: 600px;
        font-size: 14px;
        font-weight: bold;
        line-height: 30px;
        clear: both;
        color: #259fc8;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .gradesBox .gradesMain {
        color: #999;
        font-size: 14px;
        line-height: 22px;
        padding: 5px 0;
        word-wrap: break-word;
    }
    .gradesBox .gradesMain span {
        color: #259fc8;
    }
    .gradesBox .gradesSource {
        margin-top: 5px;
        color: #999;
        line-height: 20px;
        clear: both;
    }
</style>

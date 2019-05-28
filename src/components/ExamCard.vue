<template>
    <li class="examCard">
        <div class="undid">
            <img src="@/assets/undid.png">
        </div>
        <div class="exam">
            <div class="examName">
                <a v-bind:href="info.examAddress">
                    【{{ info.courseName }}】{{ info.examName }}
                </a>
            </div>
            <div class="info">
                <ul>
                    <li>课程名称<span>{{ info.courseName }}</span></li>
                    <li>教师<span>{{ info.professor }}</span></li>
                    <li>考试时间<span>{{ examTime }}</span></li>
                    <li>总分数<span>{{ info.totalScore}}分</span></li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ExamCard',
    props: {
        info: {
            examName: String,
            courseName: String,
            professor: String,
            startTime: Date,
            endTime: Date,
            totalScore: Number,
            examAddress: String,
        }
    },
    computed: {
        examTime: function () {
            let from = this.info.startTime, to = this.info.endTime,
                fromStr = "", toStr = "", diff = false;
            for (let part of ["getFullYear", "getMonth", "getDay"]) {
                fromStr += '/' + from[part]();
                if (!diff && from[part]() != to[part]()) diff = true;
                if (diff) toStr += '/' + to[part]();
            }
            fromStr += ' ' + from.getHours() + ':' + from.getMinutes().toString().padStart(2, '0');
            toStr += ' ' + to.getHours() + ':' + to.getMinutes().toString().padStart(2, '0');
            return fromStr.substring(1) + ' - ' + toStr.substring(1);
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        outline: none;
    }
    li {
        list-style: none;
        vertical-align: bottom;
    }
    .examCard {
        margin-top: 20px;
        margin-bottom: 40px;
        width: 650px;
        height: 128px;
    }
    .undid {
        width: 130px;
        height: 120px;
        position: relative;
        display: inline-block;
        font-size: 20px;
    }
    .exam {
        width: 435px;
        position: relative;
        margin-left: 30px;
        display: inline-block;
    }
    .exam .examName a {
        margin-top: 6px;
        max-width: 275px;
        font-size: 18px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #259fc8;
        cursor: pointer;
        text-decoration: none;
    }
    .exam .info ul {
        width: 435px;
        height: 80px;
        font-size: 12px;
        color: #666;
        font-family: Tahoma,Verdana,sans-serif;
    }
    .exam .info ul li {
        width: 217px;
        height: 24px;
        line-height: 20px;
        display: inline-block;
    }
    .exam .info ul li span {
        margin-inline-start: 12px;
        color: black;
    }
</style>

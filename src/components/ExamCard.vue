<template>
    <li class="examCard">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <a v-bind:href="info.examAddress">
                    <span class="examName">【{{ info.courseName }}】{{ info.examName }}</span>
                </a>
                <el-button style="float: right; padding: 3px 0" type="text">修改</el-button>
            </div>
            <ul class="info">
                <li>课程名称<span>{{ info.courseName }}</span></li>
                <li>考试时间<span>{{ examTime }}</span></li>
                <li>总分数<span>{{ info.totalScore}}分</span></li>
            </ul>
        </el-card>
    </li>
</template>

<script>
export default {
    name: 'ExamCard',
    props: {
        info: {
            examName: String,
            courseName: String,
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
.examCard .examName a {
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
.examCard ul.info {
    width: 435px;
    height: 80px;
    font-size: 14px;
    color: #666;
    font-family: Tahoma,Verdana,sans-serif;
}
.examCard ul.info li {
    width: 407px;
    height: 24px;
    line-height: 20px;
    display: inline-block;
}
.examCard ul.info li span {
    margin-inline-start: 12px;
    color: black;
}
</style>
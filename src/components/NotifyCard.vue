<template>
<el-card>
    <h4 class="notiTitle">{{ info.title }}</h4>
    <p class="notiMain">{{ info.content }}</p>
    <span class="notiInfo">
        来自：<span style="color: #259fc8;">{{ info.professor }}</span> 老师
        <span style="color: #259fc8;"> 课程:【{{ info.courseName }}】</span>
    </span>
</el-card>
</template>

<script>
export default {
    name: 'NotifyCard',
    props: {
        info: {
            title: String,
            content: String,
            courseName: String,
            professor: String,
        }
    },
}
</script>

<style scoped>
.notiTitle {
    width: 565px;
    font-size: 15px;
    margin: 0px;
    font-weight: bold;
    /* clear: both; */
    color: #259fc8;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
}
.notiMain {
    color: #333;
    font-size: 13px;
    line-height: 22px;
    padding: 5px 0;
    word-wrap: break-word;
    border-bottom:1px solid rgba(0, 0, 0, 0.1);
}
.notiSource {
    margin-top: 5px;
    color: #999;
    line-height: 20px;
}
.notiInfo span {
    color: #259fc8;
}
</style>
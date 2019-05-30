<template>
    <div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2019/6/12" placement="top">
      <el-card>
<h4 class="notiTitle">{{info.title}}</h4>
        <p class="notiMain">{{ info.content }}</p>
        <span class="notiTime">{{ notifyDate }} </span>
        <span class="notiInfo">
            来自：<span style="color: #259fc8;">{{ info.professor }}</span> 老师
            <span style="color: #259fc8;"> 课程:【{{ info.courseName }}】</span>
        </span>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/6/3" placement="top">
      <el-card>
<h4 class="notiTitle">{{info.title}}</h4>
        <p class="notiMain">{{ info.content }}</p>
        <span class="notiTime">{{ notifyDate }} </span>
        <span class="notiInfo">
            来自：<span style="color: #259fc8;">{{ info.professor }}</span> 老师
            <span style="color: #259fc8;"> 课程:【{{ info.courseName }}】</span>
        </span>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/6/1" placement="top">
      <el-card>
        <h4 class="notiTitle">{{info.title}}</h4>
        <p class="notiMain">{{ info.content }}</p>
        <span class="notiTime">{{ notifyDate }} </span>
        <span class="notiInfo">
            来自：<span style="color: #259fc8;">{{ info.professor }}</span> 老师
            <span style="color: #259fc8;"> 课程:【{{ info.courseName }}】</span>
        </span>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/6/1" placement="top">
      <el-card>
        <h4 class="notiTitle">{{info.title}}</h4>
        <p class="notiMain">{{ info.content }}</p>
        <span class="notiTime">{{ notifyDate }} </span>
        <span class="notiInfo">
            来自：<span style="color: #259fc8;">{{ info.professor }}</span> 老师
            <span style="color: #259fc8;"> 课程:【{{ info.courseName }}】</span>
        </span>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
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
            date: Date,
        }
    },
    computed: {
        notifyDate: function () {
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
    .notiTitle {
        width: 565px;
        font-size: 15px;
        font-weight: bold;
        line-height: 30px;
        clear: both;
        color: #259fc8;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .notiMain {
        color: #333;
        font-size: 13px;
        line-height: 22px;
        padding: 5px 0;
        word-wrap: break-word;
    }
    .notiSource {
        margin-top: 5px;
        color: #999;
        line-height: 20px;
        clear: both;
    }
     .notiInfo span {
        color: #259fc8;
    }
</style>

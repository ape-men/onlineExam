<template>
    <li>
        <div class="notiBox">
            <div class="notiTitle">{{ info.title }}</div>
            <div class="notiMain">{{ info.content }}</div>
            <div class="notiSource">
            <label class="notiTime">{{ notifyDate }}</label>
            <label class="notiInfo">
                来自：
                <span style="color: #259fc8;">{{ info.professor }}</span>
                老师
                <span style="color: #259fc8;">【{{ info.courseName }}】</span>
            </label>
            </div>
        </div>
    </li>
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
    .noti {
        width: 690px;
        float: left;
        display: inline;
        line-height: 16px;
        color: #666;
        font-size: 12px;
        font-family: "Arial","Hiragino Sans GB","Helvetica","sans-serif";
    }
    .noti li {
        list-style: none;
        vertical-align: bottom;
        list-style-type: none;
        padding: 10px 0 20px 0;
        width: 690px;
        border-bottom: #d4d4d4 1px dotted;
    }
    .notiBox {
        width: 690px;
        margin: 0 auto;
    }
    .notiBox .notiTitle {
        width: 660px;
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
    .notiBox .notiMain {
        color: #333;
        font-size: 14px;
        line-height: 22px;
        padding: 5px 0;
        word-wrap: break-word;
    }
    .notiBox .notiSource {
        margin-top: 5px;
        color: #999;
        line-height: 20px;
        clear: both;
    }
    .notiBox .notiSource .notiInfo span {
        color: #259fc8;
    }
</style>

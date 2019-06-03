<template>
<el-form-item label="1">
    <el-button round>
        <el-tag>简答</el-tag>
        <span class="middle choosecolor">{{ info.question }}</span>
    </el-button>
    <el-input
        type="textarea"
        :autosize="{ minRows: 2}"
        resize="none"
        v-model="answer">
    </el-input>
</el-form-item>
</template>

<script>
export default {
    name: 'ShortAnswerQuestion',
    props: {
        index: Number,
        info: {
            question: String,
        }
    },
    data() {
        return {
            answer: "",
        }
    }
}
</script>

<style scoped>
.el-textarea {
    width: 100%;
    margin-top: 20px;
}
</style>
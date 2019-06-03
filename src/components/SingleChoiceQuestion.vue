<template>
<el-form-item label="1">
    <el-button round>
        <el-tag>单选</el-tag>
        <span class="middle choosecolor">{{ info.question }}</span>
    </el-button>
    <el-radio-group v-model="answer">
        <el-radio label="A" border><span class="choosecolor">A. {{ info.choices[0] }}</span></el-radio>
        <el-radio label="B" border><span class="choosecolor">B. {{ info.choices[1] }}</span></el-radio>
        <el-radio label="C" border><span class="choosecolor">C. {{ info.choices[2] }}</span></el-radio>
        <el-radio label="D" border><span class="choosecolor">D. {{ info.choices[3] }}</span></el-radio>
    </el-radio-group>  
</el-form-item>
</template>

<script>
export default {
    name: 'SingleChoiceQuestion.vue',
    props: {
        index: Number,
        info: {
            question: String,
            choices: Array,
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
.el-radio-group {
    width: 100%;
    margin-top: 20px;
}
</style>
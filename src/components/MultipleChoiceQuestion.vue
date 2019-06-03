<template>
<el-form-item label="11">
    <el-button round>
        <el-tag type="success">多选</el-tag>
        <span class="middle choosecolor">{{ info.question }}</span>
    </el-button>
    <el-checkbox-group v-model="answer">
        <el-checkbox label="A" border><span class="choosecolor">{{ info.choices[0] }}</span></el-checkbox>
        <el-checkbox label="B" border><span class="choosecolor">{{ info.choices[1] }}</span></el-checkbox>
        <el-checkbox label="C" border><span class="choosecolor">{{ info.choices[2] }}</span></el-checkbox>
        <el-checkbox label="D" border><span class="choosecolor">{{ info.choices[3] }}</span></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
    name: 'MultipleChoiceQuestion',
    props: {
        index: Number,
        info: {
            question: String,
            choices: Array,
        }
    },
    data() {
        return {
            answer: [],
        }
    }
}
</script>

<style scoped>
.el-checkbox-group {
    width: 100%;
    margin-top: 20px;
}
</style>
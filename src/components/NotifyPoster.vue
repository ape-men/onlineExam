<template>
<el-collapse>
    <el-collapse-item title="发布通知">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="通知标题">
                <el-input v-model="form.title" ></el-input>
            </el-form-item>
            <el-form-item label="面向班级">
                <el-tag
                    :key="tag"
                    v-for="tag in form.class"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
                <el-select
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @change="handleInputConfirm">
                    <el-option label="2018级一体化工程" value="2018级一体化工程"></el-option>
                    <el-option label="2017级软件工程导论" value="2017级软件工程导论"></el-option>
                </el-select>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 班级</el-button>
            </el-form-item>
            <el-form-item  label="通知内容">
            <el-input
                type="textarea"
                :autosize="{ minRows: 2}"
                placeholder="请输入内容"
                resize="none"
                v-model="form.content">
            </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即发布</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-collapse-item>
</el-collapse>
</template>

<script>
export default {
    name: "NotifyPoster",
    data() {
        return {
            form: {
                title: "",
                class: [],
                content: "",
            },
            inputVisible: false,
            inputValue: ''
        }
    },
    methods: {
        onSubmit() {

        },
        clearForm() {

        },
        handleClose(tag) {
            this.form.class.splice(this.form.class.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.form.class.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
    }
}
</script>

<style>
.el-collapse {
    margin: 10px;
}
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    margin-left: 10px;
    vertical-align: bottom;
}
</style>

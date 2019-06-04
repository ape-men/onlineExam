<template>
<el-collapse>
    <el-collapse-item title="发布考试">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="考试标题">
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
            <el-form-item label="试卷">
                <el-select v-model="form.examPaper" placeholder="请选择试卷">
                    <el-option label="一体化工程期中考卷" value="一体化工程期中考卷"></el-option>
                    <el-option label="软件工程导论期末考卷" value="软件工程导论期末考卷"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="考试时间">
                <el-date-picker
                    v-model="form.date"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <br/>
                <el-input-number v-if="form.period" v-model="form.time" :step="10" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="正式考试">
                <el-switch v-model="form.period"></el-switch>
            </el-form-item>
            <el-form-item v-if="!form.period" label="可考次数">
                <el-input-number v-model="form.chance" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="考试总分">
                <el-input-number v-model="form.totalscore" :step="10" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="及格分数">
                <el-input-number v-model="form.miscore" :step="10" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="其他设置">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="是否立即可查成绩" name="type"></el-checkbox>
                </el-checkbox-group>
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
    data() {
        return {
            form: {
                title: '',
                class: ['2018级一体化工程'],
                date: [new Date(2019, 10, 10, 10, 10), new Date(2019, 10, 11, 10, 10)],
                time: 30,
                examPaper: null,
                chance: 1,
                period: false,
                totalscore: 100,
                miscore: 60,
                type: [],
            },
            inputVisible: false,
            inputValue: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
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

<template>
<el-form ref="form" :model="form" label-width="80px">
    <p class="Center huge">{{ examName }}</p>
    <p class="Center"><small>数  学（理）（全国I卷）</small></p>
    <component
        v-bind:is="question.type"
        v-for="(question, index) in questionSet"
        v-bind:info="question" :key="index">
    </component>
    <el-form-item>
        <div class="submitalign">
            <div class="submit">
                <el-button type="primary" @click="onSubmit()">提交试卷</el-button>
                <el-button type="danger" @click="check()">检查</el-button>
            </div>
        </div>
    </el-form-item>
</el-form>
</template>

<script>
import SingleChoiceQuestion from '@/components/SingleChoiceQuestion'
import ShortAnswerQuestion from '@/components/ShortAnswerQuestion'
import MultipleChoiceQuestion from '@/components/MultipleChoiceQuestion'

export default {
    name:'Exam',
    components: {
        SCQ: SingleChoiceQuestion,
        MCQ: MultipleChoiceQuestion,
        SAQ: ShortAnswerQuestion
    },
    created() {
        this.fetchData();
    },
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
        }
    },
    methods: {
        onSubmit() {
                         this.$alert('试卷已提交,请于6-22登录查询成绩', '成功提交试卷！', {
          confirmButtonText: '确定',
          callback: action => {
              window.location.href="/student.html"
            this.$message({
              type: 'success',
              message: '成功提交试卷!'
            });
            }
        }) },
        fetchData() {
            this.examName = "全国高等数学考试",
            this.questionSet = [
                {
                    type: "SCQ",
                    question: "已知正方体的棱长为1，每平面所成的角相等，则截此正方体所得截面面积的最大值为（    ）",
                    choices: ["1", "2", "3", "4"],
                },
                {
                    type: "MCQ",
                    question: "已知正方体的棱长为1，每平面所成的角相等，则截此正方体所得截面面积的最大值为（    ）",
                    choices: ["1", "2", "3", "4"],
                }, {
                    type: "SAQ",
                    question: "从2位女生，4位男生中选3人参加科技比赛，且至少有1位女生入选，则不同的选法共有_____________种。（用数字填写答案）",
                }, {
                    type: "SAQ",
                    question: "记nS为数列na的前n项和，若21nnSa，则6S_____________。",
                }, {
                    type: "SAQ",
                    question: "已知函数2sinsin2fxxx，则fx的最小值是__________。",
                }, {
                    type: "SAQ",
                    question: "某工厂的某种产品成箱包装，每箱200件，每一箱产品在交付用户之前要对产品作检验，如检验出不合格品，则更换为合格品。检验时，先从这箱产品中任取20件作检验，再根据所有产品作检验",
                }
            ]
        }
    },
}
</script>

<style>
body{
    color:rgba(29, 129, 211, 0.93)
}
.choosecolor{
    color:rgba(29, 129, 211, 0.93)
}
.Left{
    text-align: left;
}
.Center{
    text-align: center;
}
.Right{
    text-align: right;
}
.huge{
    font-size: 2em;
}
.middle{
    font-size: 1.1em;
}
.submit{
    display: inline;
    margin: 0 auto;
}
.submitalign{
    text-align: center;
}
</style>

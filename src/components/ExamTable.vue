<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline  class="table">
                <el-form-item label="考试名称">
                    <span>{{ props.row.考试名称 }}</span>
                </el-form-item>
                <el-form-item label="考试编码">
                    <span>{{ props.row.考试编码 }}</span>
                </el-form-item>
                <el-form-item label="截止时间">
                    <span>{{ props.row.截止时间 }}</span>
                </el-form-item>
                <el-form-item label="开始时间">
                    <span>{{ props.row.开始时间 }}</span>
                </el-form-item>
                    <el-form-item label="考试科目">
                    <span>{{ props.row.考试科目 }}</span>
                </el-form-item>
                <el-form-item label="任课老师">
                    <span>{{ props.row.任课老师 }}</span>
                </el-form-item>
                <el-form-item label="考试限时">
                    <span>{{ props.row.考试限时 }}</span>
                </el-form-item>
                    <el-form-item label="考试总分">
                    <span>{{ props.row.考试总分 }}</span>
                </el-form-item>
                    <el-form-item label="及格分数">
                    <span>{{ props.row.及格分数 }}</span>
                </el-form-item>
                <el-form-item label="剩余可考次数">
                    <span>{{ props.row.剩余可考次数 }}</span>
                </el-form-item>
                <el-form-item label="是否立即可查成绩">
                    <span>{{ props.row.是否立即可查成绩 }}</span>
                </el-form-item>
            </el-form>
        </template>
        </el-table-column>
        <el-table-column
            label="考试编码"
            prop="考试编码">
        </el-table-column>
        <el-table-column
            label="考试名称"
            prop="考试名称">
        </el-table-column>
        <el-table-column
            label="截止时间"
            prop="截止时间">
        </el-table-column>
    </el-table>
</template>

<style>
.table {
font-size: 0;
}
.table label {
width: 180px;
color: #99a9bf;
}
.table .el-form-item {
margin-right: 0;
margin-bottom: 0;
width: 50%;
}
</style>


<script>
export default {
    name: 'ExamTable',
    data() {
        return {
            tableData: [{
                考试编码: '100000',
                考试名称: '线性代数期末考',
                截止时间: '2019-7-22',
                开始时间: '2019-6-22',
                考试科目: '线性代数',
                任课老师: '张友',
                考试限时: '90min',
                考试总分: '100',
                及格分数: '60',
                剩余可考次数: '1',
                是否立即可查成绩: '否'
            }, {
                考试编码: '100001',
                考试名称: '高数期末考',
                截止时间: '2019-7-12',
                开始时间: '2019-6-22',
                考试科目: '线性代数',
                任课老师: '张友',
                考试限时: '90min',
                考试总分: '100',
                及格分数: '60',
                剩余可考次数: '1',
                是否立即可查成绩: '否'
            }, {
                考试编码: '100002',
                考试名称: '计算机导论期末考',
                截止时间: '2019-7-10',
                开始时间: '2019-6-22',
                考试科目: '线性代数',
                任课老师: '张友',
                考试限时: '90min',
                考试总分: '100',
                及格分数: '60',
                剩余可考次数: '1',
                是否立即可查成绩: '否'
            }, {
                考试编码: '100003',
                考试名称: '离散期末考',
                截止时间: '2019-7-06',
                开始时间: '2019-6-22',
                考试科目: '线性代数',
                任课老师: '张友',
                考试限时: '90min',
                考试总分: '100',
                及格分数: '60',
                剩余可考次数: '1',
                是否立即可查成绩: '否'
            }]
        }
    }
    // props: {
    //     info: {
    //         examName: String,
    //         courseName: String,
    //         professor: String,
    //         startTime: Date,
    //         endTime: Date,
    //         totalScore: Number,
    //         examAddress: String,
    //     }
    // },
    // computed: {
    //     examTime: function () {
    //         let from = this.info.startTime, to = this.info.endTime,
    //             fromStr = "", toStr = "", diff = false;
    //         for (let part of ["getFullYear", "getMonth", "getDay"]) {
    //             fromStr += '/' + from[part]();
    //             if (!diff && from[part]() != to[part]()) diff = true;
    //             if (diff) toStr += '/' + to[part]();
    //         }
    //         fromStr += ' ' + from.getHours() + ':' + from.getMinutes().toString().padStart(2, '0');
    //         toStr += ' ' + to.getHours() + ':' + to.getMinutes().toString().padStart(2, '0');
    //         return fromStr.substring(1) + ' - ' + toStr.substring(1);
    //     }
    // }
}
</script>
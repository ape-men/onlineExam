<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline  class="table">
                <el-form-item label="课程名称">
                    <span>{{ props.row.课程名称 }}</span>
                </el-form-item>
                <el-form-item label="教室">
                    <span>{{ props.row.教室 }}</span>
                </el-form-item>
                <el-form-item label="节次">
                    <span>{{ props.row.节次 }}</span>
                </el-form-item>
                <el-form-item label="任课老师">
                    <span>{{ props.row.任课老师 }}</span>
                </el-form-item>
                <el-form-item label="学分">
                    <span>{{ props.row.学分 }}</span>
                </el-form-item>
                    <el-form-item label="答疑安排">
                    <span>{{ props.row.答疑安排 }}</span>
                </el-form-item>
            </el-form>
        </template>
        </el-table-column>
        <el-table-column
            label="课程编码"
            prop="课程编码">
        </el-table-column>
        <el-table-column
            label="课程名称"
            prop="课程名称">
        </el-table-column>
        <el-table-column
            label="学期"
            prop="学期">
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
    name: 'ClassTabl',
    data() {
        return {
            tableData: [{
                课程编码:'000000',
                学期:'2018秋季学期',
                课程名称: '高数',
                教室: '信科学院128室',
                节次: '周二5-6节',
                任课老师: '孙佳宁',
                学分: '4',
                答疑安排: '周二3/4节222室',
            }, {
                课程编码:'000001',
                学期:'2018秋季学期',
                课程名称: '线性代数',
                教室: '信科学院128室',
                节次: '周一3-4节',
                任课老师: '张友',
                学分: '3',
                答疑安排: '周四5/6节230室',
            }, {
                课程编码:'000003',
                学期:'2018秋季学期',
                课程名称: '计算机科学概论',
                教室: '信科学院128室',
                节次: '周三3-4节',
                任课老师: '张日明',
                学分: '2',
                答疑安排: '周五5/6节230室',
            }]
        }
    }
}
</script>
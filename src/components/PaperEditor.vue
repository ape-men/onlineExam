<template>
    <el-table
        :data="info.students"
        style="width: 100%">
        <el-table-column
            label="学号"
            prop="content">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'ClassInfo',
    props: {
        info: {
            questions: [
                {
                    content: String,
                }
            ]
        }
    }
}
</script>

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

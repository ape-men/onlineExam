<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="课程名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="学号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="年级"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="成绩"
      width="80">
    </el-table-column>
        <el-table-column
      prop="name"
      label="课程类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="备注"
      width="250">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template >
        <el-button @click="open" type="text" size="small">细则</el-button>
        <el-button @click="notify" type="text" size="small">复议</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    name: 'GradeTable',
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },
    data() {
        return {
            tableData: [
                {
                    date: '高等数学',
                    name: '通识必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 98,
                    zip: '无'
                }, {
                    date: '线性代数',
                    name: '专业必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 59,
                    zip: '请于2019年4月20日补考'
                }, {
                    date: 'C语言程序设计',
                    name: '专业必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 97,
                    zip: '无'
                }, {
                    date: '英语读写1',
                    name: '通识必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 89,
                    zip: '无'
                },
                {
                    date: '计算机导论',
                    name: '专业必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 95,
                    zip: '无'
                },{
                    date: '高等数学',
                    name: '通识必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 98,
                    zip: '无'
                }, {
                    date: '线性代数',
                    name: '专业必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 59,
                    zip: '请于2019年4月20日补考'
                }, {
                    date: 'C语言程序设计',
                    name: '专业必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 97,
                    zip: '无'
                }, {
                    date: '英语读写1',
                    name: '通识必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 89,
                    zip: '无'
                },
                {
                    date: '计算机导论',
                    name: '专业必修课',
                    province: '2018012927',
                    city: '2018级',
                    address: 95,
                    zip: '无'
                }
            ]
        }
    },
    methods: {
        open() {
            this.$alert('平时成绩：85 * 30%   期末成绩：95 * 70%', '成绩细则', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: '成绩复议请于3月30日之前提交'
                    });
                }
            });
        },
        notify() {
            this.$confirm('是否确认复议提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '提交成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消复议'
                });          
            });
        }
    }
}

//   export default {
//     name: 'GradeCard',
//     props: {
//         info: {
//             examAddress: String,
//             courseName: String,
//             professor: String,
//             score: Number,
//             date: Date,
//         }
//     },
//     computed: {
//         gradeDate: function () {
//             let date = this.info.date;
//             return date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay();
//         }
//     }
// }
</script>


<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
li {
    list-style: none;
    vertical-align: bottom;
    list-style-type: none;
    line-height: 16px;
    color: #666;
    font-size: 12px;
    padding: 10px 0 20px 0;
    width: 600px;
    border-bottom: #d4d4d4 1px dotted;
}
.gradesBox {
    width: 600px;
    margin: 0 auto;
}
.gradesBox .gradesTitle {
    width: 600px;
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
.gradesBox .gradesMain {
    color: #999;
    font-size: 14px;
    line-height: 22px;
    padding: 5px 0;
    word-wrap: break-word;
}
.gradesBox .gradesMain span {
    color: #259fc8;
}
.gradesBox .gradesSource {
    margin-top: 5px;
    color: #999;
    line-height: 20px;
    clear: both;
}
</style>

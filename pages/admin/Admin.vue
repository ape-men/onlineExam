<template>
<el-tabs v-model="activeName" @tab-click="handleClick" class="he">
    <el-tab-pane label="学生管理" name="first">
        <el-table :data="tableData1.filter(data => !search || data.学生ID.toLowerCase().includes(search.toLowerCase()))" >
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="table">
                    <el-form-item label="学生ID">
                        <span>{{ props.row.学生ID }}</span>
                    </el-form-item>
                    <el-form-item label="学生姓名">
                        <span>{{ props.row.学生姓名 }}</span>
                    </el-form-item>
                    <el-form-item label="学生选课">
                        <span>{{ props.row.学生选课 }}</span>
                    </el-form-item>
                    <el-form-item label="所属教师">
                        <span>{{ props.row.所属教师 }}</span>
                    </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="学生ID" prop="学生ID"></el-table-column>
            <el-table-column label="学生姓名" prop="学生姓名"></el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入ID搜索"/>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-button icon="el-icon-circle-plus-outline" circle></el-button>
                </template>
                <template slot-scope="scope"> 
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑信息</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, tableData1)">删除信息</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="教师管理" name="second">
        <el-table :data="tableData2.filter(data => !search || data.教师ID.toLowerCase().includes(search.toLowerCase()))" >
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="table">
                        <el-form-item label="教师ID">
                            <span>{{ props.row.教师ID }}</span>
                        </el-form-item>
                        <el-form-item label="教师姓名">
                            <span>{{ props.row.教师姓名 }}</span>
                        </el-form-item>
                        <el-form-item label="教授课程">
                            <span>{{ props.row.教授课程 }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="教师ID" prop="教师ID"></el-table-column>
            <el-table-column label="教师姓名" prop="教师姓名"></el-table-column>
            <el-table-column  align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入ID搜索"/>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-button icon="el-icon-circle-plus-outline" circle></el-button>
                </template>
                <template slot-scope="scope"> 
                    <el-button  size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑信息</el-button>
                    <el-button  size="mini"  type="danger"  @click="handleDelete(scope.$index, tableData2)">删除信息</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="课程管理" name="third">
        <el-table :data="tableData3.filter(data => !search || data.课程ID.toLowerCase().includes(search.toLowerCase()))" >
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="table">
                        <el-form-item label="课程ID">
                            <span>{{ props.row.课程ID }}</span>
                        </el-form-item>
                        <el-form-item label="课程名字">
                            <span>{{ props.row.课程名字 }}</span>
                        </el-form-item>
                        <el-form-item label="授课教师">
                            <span>{{ props.row.授课教师 }}</span>
                        </el-form-item>
                        <el-form-item label="课程容量">
                            <span>{{ props.row.课程容量 }}</span>
                        </el-form-item>
                        <el-form-item label="已选课人数">
                            <span>{{ props.row.已选课人数 }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="课程ID" prop="课程ID"></el-table-column>
            <el-table-column label="课程名字" prop="课程名字"></el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入ID搜索"/>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-button icon="el-icon-circle-plus-outline" circle @click="newinfo(scope.$index, tableData3)"></el-button>
                </template>
                <template slot-scope="scope"> 
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑信息</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, tableData3)">删除信息</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
</el-tabs>
</template>

<style>
body{
    background: #e5e9f2;
    margin: 0;
}
.he{
    margin: 0 auto;
    min-height: 800px;
    width: 80%;
    background: white;
}
.h2{
    font-size: 20px;
}
.h1{  
    color: rgba(49,169,204,1);
    font-size: 30px;
    font-weight: 700;
}
.table {
    font-size: 0;
}
.table label {
    width: 90px;
    color: #99a9bf;
}
.table .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;}
</style>

<script>
export default {
    name:"admin",
    data() {
        return {
            activeName: 'first',
            tableData1: [{
                学生ID: '2018012011',
                学生姓名: '阿伟',
                学生选课:'数字电路',
                所属教师:'张日明',
            }, {
                学生ID: '2018012064',
                学生姓名: '章腾',
                学生选课:'高等数学',
                所属教师:'阿猫',
            }, {
                学生ID: '2018012064',
                学生姓名: '章腾',
                学生选课:'高等数学',
                所属教师:'阿猫',
            }, {
                学生ID: '2018012927',
                学生姓名: '董明龙',
                学生选课:'高等数学',
                所属教师:'阿猫',  
            },{
                学生ID: '2018012064',
                学生姓名: '章腾',
                学生选课:'高等数学',
                所属教师:'阿猫',
            }, {
                学生ID: '2018012064',
                学生姓名: '章腾',
                学生选课:'高等数学',
                所属教师:'阿猫',
            }, {
                学生ID: '2018012064',
                学生姓名: '章腾',
                学生选课:'高等数学',
                所属教师:'阿猫',
            }, {
                学生ID: '2018012926',
                学生姓名: '董明龙',
                学生选课:'高等数学',
                所属教师:'阿猫',  
            }],

            tableData2: [{
                教师ID: '2007032044',
                教师姓名: '唐佳',
                教授课程:"高等数学",
            }, {
                教师ID: '2018012064',
                教师姓名: '章腾',
                教授课程:"划水，摸鱼",
            }, {
                教师ID: '2018012063',
                教师姓名: '陈仕炜',
                教授课程:"前端讨论班",
            }, {
                教师ID: '2018012927',
                教师姓名: '董明龙',
                教授课程:"后端讨论班",
            },{
                教师ID: '2018012064',
                教师姓名: '章腾',
                教授课程:"划水，摸鱼",
            }, {
                教师ID: '2018012064',
                教师姓名: '章腾',
                教授课程:"划水，摸鱼",
            }, {
                教师ID: '2018012063',
                教师姓名: '陈仕炜',
                教授课程:"前端讨论班",
            }, {
                教师ID: '2018012927',
                教师姓名: '董明龙',
                教授课程:"后端讨论班",
            }],
            tableData3: [{
                课程ID: '100001',
                课程名字: '高等数学',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }, {
                课程ID: '100001',
                课程名字: '高等数学',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }, {
                课程ID: '100001',
                课程名字: '高等数学',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }, {
                课程ID: '100002',
                课程名字: '数字电路',
                授课教师:'张日明',
                课程容量:'10000',
                已选课人数:'30'
            },{
                课程ID: '100001',
                课程名字: '高等数学',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }, {
                课程ID: '100001',
                课程名字: '高等数学',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }, {
                课程ID: '100001',
                课程名字: '高等数学',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }, {
                课程ID: '100002',
                课程名字: '数字电路',
                授课教师:'阿猫',
                课程容量:'10000',
                已选课人数:'3'
            }],
            search: ''
        };
    },
    methods: {
        newinfo(index,rows){
            
        },
      handleClick(tab, event) {
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, rows) {
        console.log(index, rows);
         this.$prompt('此操作将删除该记录, 是否继续?(在下方在输入一次该内容)', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /此操作将删除该记录, 是否继续?/,
          inputErrorMessage: '内容错误!',
        }).then(() => {
            rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
}
</script>

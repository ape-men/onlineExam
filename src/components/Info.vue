<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个人信息" name="first">
            <el-card class="box-card">
        <div class="text item">
            {{' 姓名 : ' + info.name }}
        </div>
        </el-card>
        <el-card class="box-card">
        <div class="text item">
            {{' 学号 : ' + info.ID}}
        </div>
        </el-card>
        <el-card class="box-card">
        <div class="text item">
            {{' 学院 : ' + info.college}}
        </div>
        </el-card>
        <el-card class="box-card">
        <div class="text item">
            {{' 专业 : ' + info.subject}}
        </div>
        </el-card>
        <el-card class="box-card">
        <div class="text item">
            {{' 年级 : ' + info.grade}}
        </div>
        </el-card>
        <el-card class="box-card">
        <div class="text item">
            {{' Email : ' + info.email}}
        </div>
        </el-card>
        <el-card class="box-card">
        <div class="text item">
            {{' 电话 : ' + info.telephone}}
        </div>
        </el-card>
        </el-tab-pane>
        <el-tab-pane label="账户信息" name="second">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="新密码" prop="newPass">
                    <el-input type="password" v-model="ruleForm.newPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="旧密码" prop="oldPass">
                    <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: "Info",
    data() {
        var validateNewPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validateNewPass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.newPass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var validateOldPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            activeName: 'first',
            ruleForm: {
                newPass: '',
                checkPass: '',
                oldPass: '',
            },
            info: {
                name: '',
                ID: '',
                college: '',
                subject: '',
                grade: '',
                email: '',
                telephone: ''
            },
            rules: {
                newPass: [
                    { validator: validateNewPass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validateNewPass2, trigger: 'blur' }
                ],
                oldPass: [
                    { validator: validateOldPass, trigger: 'blur' }
                ],
            }
        };
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        handleClick(tab, event) {

        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        fetchData() {
            this.info = {
                name: '董明龙',
                ID: '2018000000',
                college: '信息科学与技术学院',
                subject: '软件工程',
                grade: '2018',
                email: 'dongml874@nenu.edu.cn',
                telephone: '100 0000 0000'
            };
        }
    }
};
</script>

<style>
    .el-input {
        width: 300px;
    }
        .text {
        font-size: 14px;
    }

    .item {
        padding: 3px 0;
    }

    .box-card {
        margin-left: 10px;
        width: 650px;
    }
</style>

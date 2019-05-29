<template>
<!-- <el-header >
    <img src="../assets/newlog01.png" width="700px" height="75px">
</el-header> -->
    <el-row class="h">
    <el-col :span="6" :offset="9" class="login">
        <div class="grid-content bg-purple-dark">
            <p class="p1">教师/学生端登录</p>
            <el-form ref="form" :label-position="potop" label-width="80px" :model="form">
            <!-- <p>学号/教工号    <el-tooltip class="item" effect="light" placement="bottom-end">
                <div slot="content">登录账号为统一身份认证账号(邮箱)。</div>
        <i class="el-icon-question"></i>
        </el-tooltip>
        </p> -->
            <el-form-item label="用户名" prop="input1">
            <el-input v-model="form.input1" placeholder="请输入账号" @focus="open" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <!-- <p>密码 <el-tooltip class="item" effect="light" placement="bottom-end">
                <div slot="content">初始密码为“Nenu”+身份证号后六位(X用1代替)。</div>
        <i class="el-icon-question"></i>
        </el-tooltip>
        </p> -->
            <el-form-item label="密码" prop="input2">       
            <el-input placeholder="请输入密码" v-model="form.input2" show-password @focus="open2" prefix-icon="el-icon-edit"></el-input>
            </el-form-item>
                <a href="https://account.nenu.edu.cn/password/reSet.htm" class="a1">忘记密码</a>
            <a href="/admin.html"><el-button plain @click="submitForm('form')" >登录</el-button></a>
        </el-form>
    </div>
    </el-col>
    </el-row >
</template>

<script>
export default {
    name: 'Login',
    methods: {
        open() {
            const h = this.$createElement;

            this.$notify({
            title: '用户名',
            message: h('i', { style: 'color: teal'}, '登录账号为统一身份认证账号(邮箱)或者学号。')
            });
        },
        open2() {
            const h = this.$createElement;

            this.$notify({
            title: '密码',
            message: h('i', { style: 'color: teal'}, '初始密码为“Nenu”+身份证号后六位(X用1代替)。')
            });
        },
        submitForm(formName) {
            console.log(this.$refs);
            this.$refs[formName].validate((valid) => {
                if (valid) {

                }
                else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    data(){
        return{
            potop:'top',
            form:{
                input1:'',
                input2:''
            },
            rules:{
                input1: [
                    { required: true, message: '请输入用户名', trigger: 'bulr' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                input2: [
                    { required: true, message: '请输入密码', trigger: 'bulr' }
                ]
            }
        };
    }
}

</script>

<style>
a{
    text-decoration: none;
}
.a1{
    text-decoration: none;
    color: gray;
    line-height: 16px;
    font-size: 12px;
}
/* .a1:hover{

}
.a1:active{
    text-decoration: none;
} */
.h{
    margin-top:10px;
    padding-top: 100px;
    height: 650px;
    /* background: linear-gradient(white,#94d2e5); */
    background:rgba(0, 0, 0, 0);
}
.p1{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 24px;
    font-weight: 700;
}
.login{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    background-color: white;
}
.el-button {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
}
</style>

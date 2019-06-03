<template>
    <el-row class="h">
    <el-col :span="6" :offset="9" class="login">
        <div class="grid-content bg-purple-dark">
            <p class="p1">管理员端登录</p>
            <el-form ref="form" :label-position="potop" label-width="80px" :model="form">
            <el-form-item label="用户名" prop="input1" :rules="[{ required: true, message: '用户名不能为空'}]">
            <el-input type="input1" v-model="form.input1" placeholder="请输入账号" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="input2" :rules="[{ required: true, message: '密码不能为空'}]">       
            <el-input type="input2" placeholder="请输入密码" v-model="form.input2" show-password prefix-icon="el-icon-edit"></el-input>
            </el-form-item>
          <el-button plain type="primary" @click="submitForm(form)" >登录</el-button>
        </el-form>
    </div>
    </el-col>
    </el-row >
</template>

<script>
export default {
    name: 'Login',
    methods: {
        submitForm(form) {
            if(form.input1=="admin789" && form.input2=="123456"){
                window.location.href="/admin.html";
            }
            else if(form.input1=="login" && form.input2=="123456"){
                window.location.href="/login.html";
            }
            else{
                this.$alert('用户名或密码不正确', '错误！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'warning',
              message: '请重新输入用户名或密码'
            });
            }
        }) 
            }
        }
    },
    data(){
        return{
            potop:'top',
            form:{
                input1:'',
                input2:''
            }
        };
    }
}
</script>
<style>
body{
    margin: 0;
}
.h{
    margin-top:10px;
    padding-top: 100px;
    height: 650px;
    background:rgba(0, 0, 0, 0);
}
.p1{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 24px;
    font-weight: 700;
}
.login{
    transform: perspective(700px);
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

<template>
    <div class="info">
        <p>姓名：{{ info.name }}</p>
        <p>工号：{{ info.ID }}</p>
        <p>学院：{{ info.college }}</p>
        <p>邮箱：{{ info.email }}</p>
        <p>电话：{{ info.telephone }}</p>
    </div>
</template>

<script>
export default {
    name: "Info",
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
                email: 'dml@nenu.edu.cn',
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
</style>

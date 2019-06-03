<!-- dcdc-->
<template>
<el-row class="tac">
    <el-col :span="6" class="aside">
        <el-menu
            ref="sideBar"
            default-active="2"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="1" router-link="/info">
                <i class="el-icon-menu"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="2" router-link="/class">
                <i class="el-icon-menu"></i>
                <span slot="title">查看班级</span>
            </el-menu-item>
            <el-menu-item index="3" router-link="/paperManager">
                <i class="el-icon-document"></i>
                <span slot="title">试卷管理</span>
            </el-menu-item>
            <el-menu-item index="4" router-link="/questionManager">
                <i class="el-icon-setting"></i>
                <span slot="title">试题管理</span>
            </el-menu-item>
            <el-menu-item index="5" router-link="/examManager">
                <i class="el-icon-setting"></i>
                <span slot="title">考试管理</span>
            </el-menu-item>
            <el-menu-item index="6" router-link="/notifyPoster">
                <i class="el-icon-setting"></i>
                <span slot="title">发送通知</span>
            </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="18" class="mainPanel">
        <router-view name="main"/>
        <router-view name="attach"/>
    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'app',
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push(this.$refs.sideBar.$children[key-1].$el.getAttribute("router-link"));
        },
    }
}
</script>

<style>
.el-row {
    min-height: 700px;
    background-color:white;
}
a {
    color: black;
    text-decoration: none;
}
.el-col {
    height: 100%;
}
.aside {
    background: #666;
}
.mainPanel {
    background: white;
}
</style>

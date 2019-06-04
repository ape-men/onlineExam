<template>
<el-row class="tac">
    <el-col :span="6" class="aside">
        <el-menu
            ref="sideBar"
            default-active="2"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="1" router-link="/info">
                <i class="el-icon-s-custom"></i>
                <span slot="title">学生信息</span>
            </el-menu-item>
            <el-menu-item index="2" router-link="/notify">
                <i class="el-icon-message"></i>
                <span slot="title">通知公告<el-dropdown-item class="clearfix" style="float:right;margin-top:12px;">
      <el-badge class="mark" :value="notify.notify" />
    </el-dropdown-item>
                </span>
            </el-menu-item>
            <el-menu-item index="3" router-link="/class">
                <i class="el-icon-menu"></i>
                <span slot="title">课程信息</span>
            </el-menu-item>
            <el-menu-item index="4" router-link="/examList">
                <i class="el-icon-document"></i>
                <span slot="title">课程考试
                    <el-dropdown-item class="clearfix" style="float:right;margin-top:12px;">
                        <el-badge class="mark" :value="notify.examList" />
                    </el-dropdown-item> 
                </span>
            </el-menu-item>
            <el-menu-item index="5" router-link="/grade">
                <i class="el-icon-setting"></i>
                <span slot="title">成绩查询</span>
            </el-menu-item>
            <el-menu-item index="6" router-link="/calendar">
                <i class="el-icon-document"></i>
                <span slot="title">实时日历</span>
            </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="18" class="mainPanel">
        <router-view/>
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
    },
    data() {
        return {
            notify: {
                notify: 12,
                examList: 4,
            }
        }
    }
}
</script>

<style>
.tac {
    margin-top:5px;
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>

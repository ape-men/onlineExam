<template>
<el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item
        v-for="(classInfo, index) in classList"
        v-bind:key="index"
        :title="classInfo.name"
        :name="index.toString()">
        <class-info
            v-bind:info="classInfo">
        </class-info>
    </el-collapse-item>
</el-collapse>
</template>

<script>
import ClassInfo from '@/components/ClassInfo'
export default {
    name: 'ClassTabl',
    components: {
        "class-info": ClassInfo,
    },
    created() {
        this.fetchData();
    },
    data() {
        return {
            activeNames: [],
            classList: []
        }
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
        fetchData() {
            this.classList = [
                {
                    name: "一体化工程实践",
                    students: [
                        {
                            studentID: "114514",
                            name: "田所"
                        }
                    ]
                },
                {
                    name: "软件工程导论",
                    students: [
                        {
                            studentID: "1919810",
                            name: "先辈"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>
</style>

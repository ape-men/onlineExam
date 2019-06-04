<template>
<el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item
        v-for="(paperInfo, index) in paperList"
        v-bind:key="index"
        :title="paperInfo.name"
        :name="index.toString()">
        <paper-info
            v-bind:info="paperInfo">
        </paper-info>
    </el-collapse-item>
</el-collapse>
</template>

<script>
import PaperInfo from '@/components/ClassInfo'
export default {
    name: 'PaperManager',
    components: {
        "paper-info": PaperInfo,
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
                    name: "一体化工程实践期末考卷",
                    questions: [
                        {
                            content: "114514",
                        }
                    ]
                },
                {
                    name: "软件工程导论期末考卷",
                    students: [
                        {
                            content: "1919810",
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
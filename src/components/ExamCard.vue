<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="课程名称">
                <span>{{ info.examName }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="课程编码">
                <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="任课老师">
                <span>{{ props.row.desc }}</span>
            </el-form-item>
            </el-form>
        </template>
        </el-table-column>
        <el-table-column
        label="课程编码"
        prop="id">
        </el-table-column>
        <el-table-column
        label="课程名称"
        prop="name">
        </el-table-column>
        <el-table-column
        label="任课老师"
        prop="desc">
        </el-table-column>
    </el-table>
</template>

<style>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: '123456789',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }
            ]
        }
    }
}
</script>
<script>
export default {
    name: 'ExamCard',
    props: {
        info: {
            examName: String,
            courseName: String,
            professor: String,
            startTime: Date,
            endTime: Date,
            totalScore: Number,
            examAddress: String,
        }
    },
    computed: {
        examTime: function () {
            let from = this.info.startTime, to = this.info.endTime,
                fromStr = "", toStr = "", diff = false;
            for (let part of ["getFullYear", "getMonth", "getDay"]) {
                fromStr += '/' + from[part]();
                if (!diff && from[part]() != to[part]()) diff = true;
                if (diff) toStr += '/' + to[part]();
            }
            fromStr += ' ' + from.getHours() + ':' + from.getMinutes().toString().padStart(2, '0');
            toStr += ' ' + to.getHours() + ':' + to.getMinutes().toString().padStart(2, '0');
            return fromStr.substring(1) + ' - ' + toStr.substring(1);
        }
    }
}
</script>
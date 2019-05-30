<template>
<<<<<<< HEAD
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline  class="table">
          <el-form-item label="考试名称">
            <span>{{ props.row.考试名称 }}</span>
          </el-form-item>
          <el-form-item label="考试编码">
            <span>{{ props.row.考试编码 }}</span>
          </el-form-item>
          <el-form-item label="截止时间">
            <span>{{ props.row.截止时间 }}</span>
          </el-form-item>
          <el-form-item label="开始时间">
            <span>{{ props.row.开始时间 }}</span>
          </el-form-item>
            <el-form-item label="考试科目">
            <span>{{ props.row.考试科目 }}</span>
          </el-form-item>
          <el-form-item label="任课老师">
            <span>{{ props.row.任课老师 }}</span>
          </el-form-item>
          <el-form-item label="考试限时">
            <span>{{ props.row.考试限时 }}</span>
          </el-form-item>
            <el-form-item label="考试总分">
            <span>{{ props.row.考试总分 }}</span>
          </el-form-item>
            <el-form-item label="及格分数">
            <span>{{ props.row.及格分数 }}</span>
          </el-form-item>
          <el-form-item label="剩余可考次数">
            <span>{{ props.row.剩余可考次数 }}</span>
          </el-form-item>
          <el-form-item label="是否立即可查成绩">
            <span>{{ props.row.是否立即可查成绩 }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="考试编码"
      prop="考试编码">
    </el-table-column>
    <el-table-column
      label="考试名称"
      prop="考试名称">
    </el-table-column>
    <el-table-column
      label="截止时间"
      prop="截止时间">
    </el-table-column>
  </el-table>
</template>

<style>
  .table {
    font-size: 0;
  }
  .table label {
    width: 180px;
    color: #99a9bf;
  }
  .table .el-form-item {
=======
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
>>>>>>> 68dfe094f6193ec873827535c169cbd1b04335ee
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>


<script>
export default {
<<<<<<< HEAD
    name: 'ExamCard',
     data() {
      return {
        tableData: [{
          考试编码: '100000',
          考试名称: '线性代数期末考',
          截止时间: '2019-7-22',
          开始时间: '2019-6-22',
          考试科目: '线性代数',
          任课老师: '张友',
          考试限时: '90min',
          考试总分: '100',
          及格分数: '60',
          剩余可考次数:'1',
          是否立即可查成绩:'否'
        }, {
         考试编码: '100000',
          考试名称: '线性代数期末考',
          截止时间: '2019-7-22',
          开始时间: '2019-6-22',
          考试科目: '线性代数',
          任课老师: '张友',
          考试限时: '90min',
          考试总分: '100',
          及格分数: '60',
          剩余可考次数:'1',
          是否立即可查成绩:'否'
        }, {
          考试编码: '100000',
          考试名称: '线性代数期末考',
          截止时间: '2019-7-22',
          开始时间: '2019-6-22',
          考试科目: '线性代数',
          任课老师: '张友',
          考试限时: '90min',
          考试总分: '100',
          及格分数: '60',
          剩余可考次数:'1',
          是否立即可查成绩:'否'
        }, {
      考试编码: '100000',
          考试名称: '线性代数期末考',
          截止时间: '2019-7-22',
          开始时间: '2019-6-22',
          考试科目: '线性代数',
          任课老师: '张友',
          考试限时: '90min',
          考试总分: '100',
          及格分数: '60',
          剩余可考次数:'1',
          是否立即可查成绩:'否'
        }]
      }
    }
    // props: {
    //     info: {
    //         examName: String,
    //         courseName: String,
    //         professor: String,
    //         startTime: Date,
    //         endTime: Date,
    //         totalScore: Number,
    //         examAddress: String,
    //     }
    // },
    // computed: {
    //     examTime: function () {
    //         let from = this.info.startTime, to = this.info.endTime,
    //             fromStr = "", toStr = "", diff = false;
    //         for (let part of ["getFullYear", "getMonth", "getDay"]) {
    //             fromStr += '/' + from[part]();
    //             if (!diff && from[part]() != to[part]()) diff = true;
    //             if (diff) toStr += '/' + to[part]();
    //         }
    //         fromStr += ' ' + from.getHours() + ':' + from.getMinutes().toString().padStart(2, '0');
    //         toStr += ' ' + to.getHours() + ':' + to.getMinutes().toString().padStart(2, '0');
    //         return fromStr.substring(1) + ' - ' + toStr.substring(1);
    //     }
    // }
=======
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
>>>>>>> 68dfe094f6193ec873827535c169cbd1b04335ee
}
</script>
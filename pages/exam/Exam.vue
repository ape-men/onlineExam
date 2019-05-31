<template>
    <el-form ref="form" :model="form" label-width="80px">
  <p class="Center huge">2018年普通高等学校招生全国统一考试</p>
  <p class="Center"><small>数  学（理）（全国I卷）</small></p>

  <el-button type="primary" round>单选</el-button>
    <el-form-item label="1">
    <el-radio-group v-model="form.radio1">
        
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每平面所成的角相等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
      <div class="choose">
          <el-radio label="1a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="1b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="1c" border><span class="choosecolor">C. 3</span></el-radio>
        <el-radio label="1d" border><span class="choosecolor">D. 4</span></el-radio>
    </div>
      
    </el-radio-group>  
    
  </el-form-item>

  <el-form-item label="2">
    <el-radio-group v-model="form.radio2">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每条棱所在直线与平截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
              <div class="choose">
      <el-radio label="2a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="2b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="2c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="2d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>

    </el-radio-group>
  </el-form-item>

  <el-form-item label="3">
    <el-radio-group v-model="form.radio3">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="3a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="3b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="3c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="3d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="4">
    <el-radio-group v-model="form.radio4">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="4a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="4b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="4c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="4d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="5">
    <el-radio-group v-model="form.radio5">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每条棱所在直线等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="5a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="5b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="5c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="5d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="6">
    <el-radio-group v-model="form.radio6">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，与平面所成的角相等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="6a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="6b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="6c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="6d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="7">
    <el-radio-group v-model="form.radio7">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每条成的角相等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="7a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="7b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="7c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="7d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="8">
    <el-radio-group v-model="form.radio8">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每条棱所在直线与平面所成1，每条棱所在直线与平面所成的角相等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="8a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="8b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="8c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="8d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="9">
    <el-radio-group v-model="form.radio9">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每条棱所在的角相等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="9a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="9b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="9c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="9d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>
  
  <el-form-item label="10">
    <el-radio-group v-model="form.radio10">
        <el-button round><el-tag>单选</el-tag><span class="middle choosecolor">  已知正方体的棱长为1，每条棱所在直线与平1，每条棱所在直线面所成面所成的角相等，则截此正方体所得截面面积的最大值为（    ）</span></el-button>
        <br >
                      <div class="choose">
      <el-radio label="10a" border><span class="choosecolor">A. 1</span></el-radio>
      <el-radio label="10b" border><span class="choosecolor">B. 2</span></el-radio>
      <el-radio label="10c" border><span class="choosecolor">C. 3</span></el-radio>
      <el-radio label="10d" border><span class="choosecolor">D. 4</span></el-radio>
      </div>
    </el-radio-group>
  </el-form-item>
  

    <el-button type="success" round>多选</el-button>
<el-form-item label="11">
    <el-checkbox-group v-model="form.type">
        <el-button round><el-tag type="success">多选</el-tag><span class="middle choosecolor">  活动性质活动性质活动性质活动性质活动性质</span></el-button>
        <br >
                      <div class="multichoose">
      <el-checkbox label="11-A" name="type"><span class="choosecolor">美食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="11-B" name="type"><span class="choosecolor">地推活动</span></el-checkbox>
      <el-checkbox label="11-C" name="type"><span class="choosecolor">线下主题活动</span></el-checkbox>
      <el-checkbox label="11-D" name="type"><span class="choosecolor">单纯品牌曝光</span></el-checkbox>
      </div>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="12">
    <el-checkbox-group v-model="form.type">
        <el-button round><el-tag type="success">多选</el-tag><span class="middle choosecolor">  活动性质活动性质性质活动性质</span></el-button>
        <br >
                      <div class="multichoose">
      <el-checkbox label="12-A" name="type"><span class="choosecolor">美食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="12-B" name="type"><span class="choosecolor">地推活动地推活动</span></el-checkbox>
      <el-checkbox label="12-C" name="type"><span class="choosecolor">线下主题活动</span></el-checkbox>
      <el-checkbox label="12-D" name="type"><span class="choosecolor">单纯品牌曝光单纯品牌曝光单纯品牌曝光</span></el-checkbox>
      </div>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="13">
    <el-checkbox-group v-model="form.type">
        <el-button round><el-tag type="success">多选</el-tag><span class="middle choosecolor">  活动性质活动性质活动性质活动性质活动性质</span></el-button>
        <br >
                      <div class="multichoose">
      <el-checkbox label="13-A" name="type"><span class="choosecolor">美食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="13-B" name="type"><span class="choosecolor">地推活动</span></el-checkbox>
      <el-checkbox label="13-C" name="type"><span class="choosecolor">地推d d a 活动</span></el-checkbox>
      <el-checkbox label="13-D" name="type"><span class="choosecolor">单纯品牌曝光</span></el-checkbox>
      </div>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="14">
    <el-checkbox-group v-model="form.type">
        <el-button round><el-tag type="success">多选</el-tag><span class="middle choosecolor">  活动性质活动性质活动性质活动性质活动性质</span></el-button>
        <br >
                      <div class="multichoose">
      <el-checkbox label="14-A" name="type"><span class="choosecolor">美食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="14-B" name="type"><span class="choosecolor">地推活动</span></el-checkbox>
      <el-checkbox label="14-C" name="type"><span class="choosecolor">线下主题活动</span></el-checkbox>
      <el-checkbox label="14-D" name="type"><span class="choosecolor">单纯品牌曝光</span></el-checkbox>
      </div>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="15">
    <el-checkbox-group v-model="form.type">
        <el-button round><el-tag type="success">多选</el-tag><span class="middle choosecolor">  活动性质活动性质活动性质活动性质活动性质</span></el-button>
        <br >
                      <div class="multichoose">
      <el-checkbox label="15-A" name="type"><span class="choosecolor">美食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="15-B" name="type"><span class="choosecolor">美食/餐厅线上活动美食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="15-C" name="type"><span class="choosecolor">美食/餐厅食/餐厅线上活动</span></el-checkbox>
      <el-checkbox label="15-D" name="type"><span class="choosecolor">单纯品牌曝光</span></el-checkbox>
      </div>
    </el-checkbox-group>
  </el-form-item>

    
  <el-button type="danger" round>简答</el-button>
  <el-form-item label="16">
    <el-button round><el-tag type="danger">简答</el-tag><span class="middle choosecolor">  从2位女生，4位男生中选3人参加科技比赛，且至少有1位女生入选，则不同的选法共有_____________种。（用数字填写答案）</span></el-button>
        <br >
                              <div class="SAQ">
    <el-input type="textarea" v-model="form.desc1" rows="5"></el-input>
                              </div>
  </el-form-item>

  <el-form-item label="17">
          <el-button round><el-tag type="danger">简答</el-tag><span class="middle choosecolor">  记nS为数列na的前n项和，若21nnSa，则6S_____________。</span></el-button>
        <br >
        <div class="SAQ">
    <el-input type="textarea" v-model="form.desc2" rows="10"></el-input>
        </div>
  </el-form-item>

  <el-form-item label="18">
          <el-button round><el-tag type="danger">简答</el-tag><span class="middle choosecolor">  已知函数2sinsin2fxxx，则fx的最小值是__________。</span></el-button>
        <br >
        <div class="SAQ">
    <el-input type="textarea" v-model="form.desc3" rows="10"></el-input>
        </div>
  </el-form-item>

  <el-form-item label="19">
          <el-button round><el-tag type="danger">简答</el-tag><span class="middle choosecolor">  某工厂的某种产品成箱包装，每箱200件，每一箱产品在交付用户之前要对产品作检验，如检验出不合格品，则更换为合格品。检验时，先从这箱产品中任取20件作检验，再根据所有产品作检验</span></el-button>
        <br >
        <div class="SAQ">
    <el-input type="textarea" v-model="form.desc4" rows="15"></el-input>
        </div>
  </el-form-item>

  <el-form-item label="20">
          <el-button round><span class="middle choosecolor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已知函数2si某工厂的某种2s检验出不，则fx2sinsin2fxxx，则fx验，再根据检验结果决定是否对余下的所有产品作检验nsin2fxxx</span>
          <br >
          <el-tag type="danger">简答</el-tag><span class="middle choosecolor">已知函数2si某工厂的某种2s检验出不，则fx2sinsin2fxxx，则fx验，再根据检验结果决定是否对余下的所有产品作检验nsin2fxxx</span>
          <br >
          <span class="middle choosecolor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已知函数2si某工厂的某种2s检验出不，则fx2sinsin2fxxx，则fx验，再根据检验结果决定是否对余下的所有产品作检验nsin2fxxx</span></el-button>
        <br >
        <div class="SAQ">
    <el-input type="textarea" v-model="form.desc5" rows="20"></el-input>
        </div>
  </el-form-item>


  <el-form-item>
      <div class="submitalign">
      <div class="submit">
    <el-button type="primary" @click="onSubmit">提交试卷</el-button>
    <el-button type="danger">检查</el-button>
    </div>
      </div>
  </el-form-item>

</el-form>
</template>


<script>
  export default {
      name:'Exam',
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
  }
</script>

<style>
body{
    color:rgba(29, 129, 211, 0.93)
}
.choosecolor{
    color:rgba(29, 129, 211, 0.93)
}
    .Left{
        text-align: left;
    }
    .Center{
        text-align: center;
    }
    .Right{
        text-align: right;
    }
    .huge{
        font-size: 2em;
    }
    .middle{
        font-size: 1.1em;
    }
    .choose{
        width: 100%;
        margin-top: 20px;
    }
    .multichoose{
        width: 100%;
        margin-top: 10px;
    }
    .SAQ{
        width: 100%;
        margin-top: 5px;
    }
    .submit{
       display: inline;
        margin: 0 auto;
    }
    .submitalign{
        text-align: center;
    }
</style>

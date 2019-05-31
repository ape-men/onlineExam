// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    //'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-trailing-spaces": 1, // 行末无空格
    'indent': [1, 4],        // 缩进为4个空格
    "no-undef": 1,           // 无未定义变量
    "camelcase": 1,          // 强制驼峰命名
    "no-unused-vars": [1, {"vars": "local", "args": "none"}], // 不能有声明后未被使用的局部变量
    "key-spacing": [1, {"beforeColon": false, "afterColon": true }], //对象字面量中冒号前无空格，后有
    "strict": 1,             // 启用严格模式
    'vue/script-indent': ['warning', 4, {'baseIndent': 0}],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}

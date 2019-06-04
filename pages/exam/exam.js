// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Exam from './Exam.vue'
import Clock from '@/components/Clock'
import LeftBar from '@/components/LeftBar'
import Color from '@/components/Color'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
// new Vue({
//     el: 'header',
//     components: { Header },
//     template: '<Header/>'
// })

new Vue({
    el: 'exam',
    components: { Exam },
    template: '<Exam/>'
})

new Vue({
    el: '#clock',
    components: { Clock },
    template: '<Clock/>',
    data: {
        totalTime: 3600,
    }
})

// new Vue({
//     el: '#leftBar',
//     components: { LeftBar },
//     template: '<LeftBar/>'
// })

// new Vue({
//     el: '#color',
//     components: { Color },
//     template: '<Color/>'
// })

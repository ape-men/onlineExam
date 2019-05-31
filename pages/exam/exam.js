// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Exam from './Exam.vue'
// import TopBar from '@/components/TopBar'
import LeftBar from '@/components/LeftBar'
import BackTop from '@/components/BackTop'
import Color from '@/components/Color'
import ElementUI from 'element-ui'
import Footer from '@/components/Footer'
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
    el:'topBar',
    components: { TopBar },
    template: '<TopBar/>'
})

new Vue({
    el:'backTop',
    components: { BackTop },
    template: '<BackTop/>'
})

new Vue({
    el:'leftBar',
    components: { LeftBar },
    template: '<LeftBar/>'
})

new Vue({
    el:'color',
    components: { Color },
    template: '<Color/>'
})

new Vue({
    el: 'footer',
    components: { Footer },
    template: '<Footer/>'
})

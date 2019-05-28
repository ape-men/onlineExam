// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Student from './Student.vue'
import ElementUI from 'element-ui'
import Footer from '@/components/Footer'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../../src/router/student'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
// new Vue({
//     el: 'header',
//     components: { Header },
//     template: '<Header/>'
// })

new Vue({
    el: '#app',
    router,
    components: { Student },
    template: '<Student/>'
})

new Vue({
    el: 'footer',
    components: { Footer },
    template: '<Footer/>'
})

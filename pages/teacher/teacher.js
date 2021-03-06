// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Teacher from './Teacher.vue'
import ElementUI from 'element-ui'
import Footer from '@/components/Footer'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router/teacher'
import Power from '@/components/Power'
import ToTop from '@/components/ToTop'
import Header from '@/components/Header'
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: 'header',
    components: { Header },
    template: '<Header/>'
})
new Vue({
    el: 'power',
    components: { Power },
    template: '<Power/>'
})
new Vue({
    el: 'totop',
    components: { ToTop },
    template: '<ToTop/>'
})

new Vue({
    el: '#teacher',
    router,
    components: { Teacher },
    template: '<Teacher/>'
})

new Vue({
    el: 'footer',
    components: { Footer },
    template: '<Footer/>'
})

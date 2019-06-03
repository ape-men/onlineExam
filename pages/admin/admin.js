// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Admin from './Admin.vue'
import ElementUI from 'element-ui'
import Footer from '@/components/Footer'
import 'element-ui/lib/theme-chalk/index.css'
import Header from '@/components/Header'
import Power from '@/components/Power'
import ToTop from '@/components/ToTop'
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: 'header',
    components: { Header },
    template: '<Header/>'
})

new Vue({
    el: '#teacher',
    components: { Admin },
    template: '<Admin/>'
})

new Vue({
    el: 'footer',
    components: { Footer },
    template: '<Footer/>'
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
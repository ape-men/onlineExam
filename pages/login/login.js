// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Login from './Login.vue'
import ElementUI from 'element-ui'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'element-ui/lib/theme-chalk/index.css'
import loginbg from '../../static/js/loginbg.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(loginbg)
/* eslint-disable no-new */
new Vue({
    el: 'header',
    components: { Header },
    template: '<Header/>'
})

new Vue({
    el: '#login',
    components: { Login },
    template: '<Login/>'
})

new Vue({
    el: 'footer',
    components: { Footer },
    template: '<Footer/>'
})

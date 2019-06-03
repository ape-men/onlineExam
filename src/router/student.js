import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import CardList from '@/components/CardList'
import ExamTable from '@/components/ExamTable'
import GradeTable from '@/components/GradeTable'
import NotifyTimeLine from '@/components/NotifyTimeLine'
import { Calendar } from 'element-ui';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/examList',
        },
        {
            path: '/info',
            name: 'Info',
            component: Info
        },
        {
            path: '/examList',
            name: 'ExamList',
            component: ExamTable,
        },
        {
            path: '/notify',
            name: 'Notify',
            component: NotifyTimeLine,
        },
        {
            path: '/grade',
            name: 'Grade',
            component: GradeTable,
        },
        {
            path: '/course',
            name: 'course',
            component: CardList,
            props: {
                currentCard: 'course-card'
            }
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
        }
    ]
})
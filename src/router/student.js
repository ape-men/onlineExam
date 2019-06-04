import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import ClassTable from '@/components/ClassTable'
import ExamTable from '@/components/ExamTable'
import GradeTable from '@/components/GradeTable'
import NotifyTimeLine from '@/components/NotifyTimeLine'
import Calendar from '@/components/Calendar';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/info',
            name: 'Info',
            component: Info
        },
        {
            path: '/notify',
            name: 'Notify',
            component: NotifyTimeLine,
        },
        {
            path: '/examList',
            name: 'ExamList',
            component: ExamTable,
        },
        {
            path: '/class',
            name: 'Class',
            component: ClassTable,
        },
        {
            path: '/grade',
            name: 'Grade',
            component: GradeTable,
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
        }
    ]
})
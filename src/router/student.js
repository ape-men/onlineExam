import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import CardList from '@/components/CardList'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/info',
            name: 'Info',
            component: Info
        },
        {
            path: '/examList',
            name: 'ExamList',
            component: CardList,
            props: {
                currentCard: 'exam-card'
            }
        },
        {
            path: '/notify',
            name: 'Notify',
            component: CardList,
            props: {
                currentCard: 'notify-card'
            }
        },
        {
            path: '/grade',
            name: 'Grade',
            component: CardList,
            props: {
                currentCard: 'grade-card'
            }
        },
        {
            path: '/course',
            name: 'course',
            component: CardList,
            props: {
                currentCard: 'course-card'
            }
        }
    ]
})
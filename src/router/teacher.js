import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import ClassManager from '@/components/ClassManager'
import PaperManager from '@/components/PaperManager'
import CardList from '@/components/CardList'
import ExamPoster from '@/components/ExamPoster'
import NotifyPoster from '@/components/NotifyPoster'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/class',
        },
        {
            path: '/info',
            name: 'Info',
            components: {
                main: Info
            }
        },
        {
            path: '/class',
            name: 'Class',
            components: {
                main: ClassManager
            },
        },
        {
            path: '/paperManager',
            name: 'PaperManager',
            components: {
                main: PaperManager,
                attach: PaperManager,
            },
            props: {
                currentCard: 'exam-card'
            }
        },
        {
            path: '/examManager',
            name: 'ExamManager',
            components: {
                main: ExamPoster,
                attach: CardList,
            },
            props: {
                attach: {
                    currentCard: 'exam-card'
                }
            }
        },
        {
            path: '/notifyPoster',
            name: 'NotifyPoster',
            components: {
                main: NotifyPoster,
                attach: CardList,
            },
            props: {
                attach: {
                    currentCard: 'notify-card'
                }
            }
        },
    ]
})

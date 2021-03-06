import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './../pages/auth/login.vue'
import Logout from './../pages/auth/logout.vue'
import NotFound from './../pages/error/notFound.vue'

import HomePage from './../pages/home.vue'
import ChatPage from './../pages/chat.vue'

import Employee from './../pages/employee/index.vue'
import EmployeeList from './../pages/employee/view.vue'
import EmployeeCreate from './../pages/employee/manage/create.vue'
import EmployeeEdit from './../pages/employee/manage/edit.vue'
import EmployeeShow from './../pages/employee/manage/show.vue'
import ManageEmployeeList from './../pages/employee/manage/list.vue'

import ArticlePage from './../pages/article/index.vue'
import ArticleList from './../pages/article/view.vue'
import ArticleShow from './../pages/article/show.vue'
import ArticleCreate from './../pages/article/create.vue'

import MeetingPage from './../pages/meeting/index.vue'

import PollPage from './../pages/poll/index.vue'
import PollList from './../pages/poll/view.vue'
import PollCreate from './../pages/poll/create.vue'
import PollShow from './../pages/poll/show.vue'

import MainLayout from './../components/layout/main.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',

    routes: [
        {
            name: 'login',
            path: '/login',
            component: LoginPage
        }, {
            path: '/',
            meta: { auth: true },
            component: MainLayout,
            children : [
                {
                    path: '',
                    name: 'Home',
                    component: HomePage
                }, {
                    name: 'Chat',
                    path: 'chat',
                    component: ChatPage,
                }, {
                    path: 'employee',
                    component: Employee,
                    children: [
                        {
                            name: 'EmployeeList',
                            path: '',
                            component: EmployeeList
                        }, {
                            name: 'ManageEmployeeList',
                            path: 'list',
                            component: ManageEmployeeList
                        }, {
                            name: 'EmployeeCreate',
                            path: 'create',
                            component: EmployeeCreate
                        }, {
                            name: 'EmployeeEdit',
                            path: ':id/edit',
                            component: EmployeeEdit,
                            props: true
                        }, {
                            name: 'EmployeeShow',
                            path: ':id/show',
                            component: EmployeeShow,
                            props: true
                        }
                    ]
                }, {
                    path: 'article',
                    component: ArticlePage,
                    children: [
                        {
                            name: 'ArticleList',
                            path: '',
                            component: ArticleList
                        }, {
                            name: 'ArticleShow',
                            path: ':id/show',
                            component: ArticleShow,
                            props: true
                        }, {
                            name: 'ArticleCreate',
                            path: 'create',
                            component: ArticleCreate
                        }
                    ]
                }, {
                    path: 'meeting',
                    name: 'Meeting',
                    component: MeetingPage
                }, {
                    path: '/poll',
                    component: PollPage,
                    children: [
                        {
                            name: 'PollList',
                            path: '',
                            component: PollList
                        }, {
                            name: 'PollCreate',
                            path: 'create',
                            component: PollCreate
                        }, {
                            name: 'PollShow',
                            path: ':id/show',
                            component: PollShow,
                            props: true
                        }
                    ]
                }
            ]
        }, {
            name: 'logout',
            path: '/logout',
            component: Logout
        }, {
            name: 'NotFound',
            path: '*',
            component: NotFound
        }
    ]
})

router.beforeEach((to, from, next) => {
    if ( to.matched.some(record => record.meta.auth) ) {
        const auth = JSON.parse(localStorage.getItem('auth'))
        if ( auth && auth.access_token ) {
            next();
        } else {
            next({ name: 'login' })
            return ;
        }
    }
    next();
})
export default router;
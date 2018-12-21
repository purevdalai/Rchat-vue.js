import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './../pages/auth/login.vue'
import Logout from './../pages/auth/logout.vue'
import NotFound from './../pages/error/notFound.vue'

import HomePage from './../pages/home.vue'
import ChatPage from './../pages/chat.vue'

import Employee from './../pages/employee/index.vue'
import EmployeeList from './../pages/employee/view.vue'

import Article from './../pages/article/index.vue'
import ArticleList from './../pages/article/view.vue'
import ArticleShow from './../pages/article/show.vue'
import ArticleCreate from './../pages/article/create.vue'


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
                        }
                    ]
                }, {
                    path: 'article',
                    component: Article,
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
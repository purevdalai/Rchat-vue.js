import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '../pages/error/notFound.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
            meta: { requiresAuth: true }
        }
    ],
})

// router.beforeEach((to, from, next) => {
//     if ( to.matched.some(record => record.meta.requiresAuth) ) {
//         const authUser = JSON.parse(localStorage.getItem('authUser'))
//         if ( authUser && authUser.access_token ) {
//             next();
//         } else {
//             next({ name: 'login' })
//         }
//     }
//     next();
// })

export default router;
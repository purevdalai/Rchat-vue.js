import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router/router.js'

import moment from 'moment'
import Vuelidate from 'vuelidate'
import Snotify from 'vue-snotify'
import VueQuillEditor from 'vue-quill-editor'
import fullCalendar from 'vue-fullcalendar'
import VueSocketIO from 'vue-socket.io'

import DateHelper from './utils/date.js'
import Validation from './utils/validation.js'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(moment);
Vue.use(Vuelidate);
Vue.use(VueQuillEditor);
Vue.use(Snotify);
Vue.component('full-calendar', fullCalendar)

Vue.mixin(DateHelper);
Vue.mixin(Validation);

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8890',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))
 
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

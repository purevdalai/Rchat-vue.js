import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router/router.js'

import moment from 'moment'
import Vuelidate from 'vuelidate'
import Snotify from 'vue-snotify'

import DateHelper from './utils/date.js'

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(moment);
Vue.use(Vuelidate);
Vue.use(VueQuillEditor);
Vue.use(Snotify);

Vue.mixin(DateHelper);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

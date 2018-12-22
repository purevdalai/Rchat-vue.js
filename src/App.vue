<template>
    <div>
        <nav-menu></nav-menu>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
import UserService from './services/UserService.js'
import Navmenu from './components/layout/navmenu.vue'

export default {
    name: 'Application',

    components: {
        'nav-menu': Navmenu
    },

    created: function() {
        this.fetchData()
    },

    methods: {
        fetchData: function() {
            UserService.getAuthUser().then(response => {
                if ( response && response.status === 200 ) {
                    this.$store.dispatch('setProfileObject', response.data)
                }
            })
            .catch(err => {
                console.log('error get profile => ', err)
            })
        }
    }
}
</script>
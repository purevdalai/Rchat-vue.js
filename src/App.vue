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
import Navmenu from './components/layout/navmenu.vue'

export default {
    name: 'Application',

    components: {
        'nav-menu': Navmenu
    }
}
</script>
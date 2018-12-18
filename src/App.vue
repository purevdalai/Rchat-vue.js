<template>
    <div>
        <nav-menu></nav-menu>
        <div id="app" class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navmenu from './components/layout/navmenu.vue'

export default {
    name: 'app',

    components: {
        'nav-menu': Navmenu
    }
}
</script>
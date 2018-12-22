<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link 
            class="navbar-brand"
            :to="{ name: 'Home'}" >
            МХТС intranet
        </router-link>
        <button class="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link"
                        :to="{ name: 'Chat'}" >
                        Чат
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link"
                        :to="{ name: 'Chat'}" >
                        Нийтлэл
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link"
                        :to="{ name: 'Chat'}" >
                        Санал асуулга
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link"
                        :to="{ name: 'Chat'}" >
                        Хурал
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link
                        class="nav-link"
                        :to="{ name: 'EmployeeList' }">
                        Ажилчидийн мэдээлэл
                    </router-link>
                </li>
            </ul>
            <ul v-if="auth" class="nav navbar-nav navbar-right mr-5">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ auth.name }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Profile</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" @click="logout">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "Navmenu",

    methods: {
        logout: function() {
            this.$router.push({name: "logout"})
        }
    },

    created: function() {
    },

    computed: {
        ...mapState({
            auth: state => state.userStore.profile
        })
    }
}
</script>

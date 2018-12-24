<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <router-link 
            class="navbar-brand text-white"
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
                        class="nav-link text-white"
                        :to="{ name: 'Chat'}" >
                        Чат
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link text-white"
                        :to="{ name: 'ArticleList'}" >
                        Нийтлэл
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link text-white"
                        :to="{ name: 'PollList'}" >
                        Санал асуулга
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link 
                        class="nav-link text-white"
                        :to="{ name: 'Meeting'}" >
                        Хурал
                    </router-link>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link
                        class="nav-link text-white"
                        :to="{ name: 'EmployeeList' }">
                        Ажилчидийн мэдээлэл
                    </router-link>
                </li>
            </ul>
            <ul v-if="auth" class="nav navbar-nav navbar-right mr-5">
                <li class="nav-item dropdown row">
                    <img :src="auth.profile_img" class="img-fluid profile-img mr-1" />
                    <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ username }} 
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

    computed: {
        ...mapState({
            auth: state => state.userStore.profile
        }),
        username() {
            return this.auth.first_name + ' ' + this.auth.last_name; 
        }
    }
}
</script>
<style scoped>
.profile-img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
}
</style>

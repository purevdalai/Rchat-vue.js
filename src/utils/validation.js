import store from './../store/index'
export default {
    methods: {
        isAuthUser(user) {
            return store.state.userStore.profile.id == user.id 
        }
    }
}
export default {
    SET_AUTH_USER(state, authObj) {
        state.auth = authObj
    },

    SET_PROFILE_USER(state, profileObj) {
        state.profile = profileObj
    },
    
    CLEAR_AUTH_USER(state) {
        state.auth = null
    },

    CLEAR_PROFILE_USER(state) {
        state.profile = null
    }
}
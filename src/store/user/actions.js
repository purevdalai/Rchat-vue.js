export default {
    setProfileObject: ({commit}, profileObj) => {
        commit('SET_PROFILE_USER', profileObj);
    },

    setAuthObject: ({commit}, userObj) => {
        commit('SET_AUTH_USER', userObj);
    },

    clearAuthUser: ({commit}) => {
        commit('CLEAR_AUTH_USER');
    },

    clearProfileUser: ({commit}) => {
        commit('CLEAR_PROFILE_USER');
    }, 
}
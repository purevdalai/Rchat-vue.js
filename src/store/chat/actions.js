export default {
    setRooms: ({commit}, roomsObj) => {
        commit('SET_CHAT_ROOMS', roomsObj);
    },

    setRoom: ({commit}, roomObj) => {
        commit('SET_CHAT_ROOM', roomObj);
    },

    setSelectedRoom: ({commit}, selectedRoomObj) => {
        commit('SET_SELECTED_ROOM', selectedRoomObj);
    }, 
}
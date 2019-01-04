export default {
    setRooms: ({commit}, roomsObj) => {
        commit('SET_CHAT_ROOMS', roomsObj);
    },

    setRoom: ({commit}, roomObj) => {
        commit('SET_CHAT_ROOM', roomObj);
    },

    setSelectedRoom: ({commit}, selectedRoom) => {
        commit('SET_SELECTED_ROOM', selectedRoom);
    }, 

    addChatMessage: ({commit}, messageObj) => {
        commit('ADD_ROOM_MESSAGE', messageObj);
    }, 

    addRoom: ({commit}, roomObj) => {
        commit('ADD_ROOM', roomObj)
    }, 
}
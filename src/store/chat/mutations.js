export default {
    SET_CHAT_ROOMS(state, roomsObj) {
        state.rooms = roomsObj
    },

    SET_CHAT_ROOM(state, roomObj) {
        state.room = roomObj
    },

    SET_SELECTED_ROOM(state, selectedRoomObj) {
        state.selectedRoom = selectedRoomObj
    }
}
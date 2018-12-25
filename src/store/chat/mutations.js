export default {
    SET_CHAT_ROOMS(state, roomsObj) {
        state.rooms = roomsObj
    },

    SET_CHAT_ROOM(state, roomObj) {
        state.room = roomObj
    },

    SET_SELECTED_ROOM(state, selectedRoom) {
        state.selectedRoom = selectedRoom
    },

    ADD_ROOM_MESSAGE(state, messageObj) {
        if (state.room && state.room.messages) {
            state.room.messages.unshift(messageObj);
            state.room.messages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }
    }
}
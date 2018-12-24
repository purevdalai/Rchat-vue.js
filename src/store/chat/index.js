import actions from './actions.js';
import mutations from './mutations.js';

const state = {
    rooms: [],
    room: null,
    selectedRoom: null,
}

export default {
    state,
    actions,
    mutations
}
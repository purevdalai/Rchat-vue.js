<template>
    <div class="room-list">
        <div class="row scroll rooms p-0 m-0">
            <room-info
                :key="index"
                v-for="(item, index) in rooms"
                :item="item" 
            ></room-info>
        </div>

        <div class="row m-0">
            <div class="col-6 p-0 m-0">
                <button class="btn btn-color btn-block" @click="createRoom">
                    <i class="fas fa-folder-plus"></i>
                    Өрөө үүсгэх
                </button>
            </div>
            <div class="col-6 p-0 m-0">
                <button class="btn btn-color btn-block" @click="settings">
                    <i class="fas fa-cog"></i>
                    Тохиргоо
                </button>
            </div>
        </div>
        <room-form></room-form>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import RoomInfo from './room-info.vue'
import RoomForm from './../modal/chat/room-form.vue'
export default {
    name: 'ChatRoomList',
    
    components: {
        'room-info': RoomInfo,
        'room-form': RoomForm,
    },

    computed: {
        ...mapState({
            rooms: state => state.chatStore.rooms
        }),
    },

    methods: {
        createRoom: function() {
            $('#room-form').modal();
        },

        settings: function() {
            // $('#settings').modal();
        },
    },
}
</script>
<style scoped>

.room-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 94vh;
    background: #2c3e50;
}

button {
    border-radius: 0;
}

.btn-color {
    background: #32465a;
    color: #ffffff;
}

.rooms {
    background: #2c3e50;
    color: #ffffff;
}

.scroll {
    overflow-y: auto;
    overflow-x: hidden;
    /* height: 91vh; */
}

.scroll::-webkit-scrollbar {
  width: 8px;
  background: #2c3e50;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #243140;
}

@media screen and (max-width: 735px) {
    .scroll {
        height: calc(100% - 149px);
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }
}
</style>

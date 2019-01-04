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
            <div class="col p-0 m-0">
                <button class="btn btn-color btn-block" @click="createRoom">
                    <i class="fas fa-folder-plus"></i>
                    Өрөө үүсгэх
                </button>
            </div>
            
            <div class="col-6 btn-group dropup p-0 m-0" v-if="room && room.type == 3">
                    <button type="button" class="btn btn-color btn-block dropdown-toggle pb-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-cog"></i>
                        Өрөөний тохиргоо
                    </button>
                    <div class="dropdown-menu">
                        <button class="btn btn-block btn-dropup text-left" @click="addUsers">
                            <i class="fas fa-user"></i>
                            Гишүүн зохион байгуулах
                        </button>
                        <button class="btn btn-block btn-dropup text-left" @click="settings">
                            <i class="fas fa-edit"></i>
                            Өрөөний мэдээлэл шинэчлэх
                        </button>
                    </div>
            </div>
        </div>
        <room-form></room-form>
        <room-settings></room-settings>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import RoomInfo from './room-info.vue'
import RoomForm from './../modal/chat/room-form.vue'
import RoomSettings from './../modal/chat/room-settings.vue'
export default {
    name: 'ChatRoomList',
    
    components: {
        'room-info': RoomInfo,
        'room-form': RoomForm,
        'room-settings': RoomSettings,
    },

    computed: {
        ...mapState({
            rooms: state => state.chatStore.rooms,
            room: state => state.chatStore.room
        }),
    },

    methods: {
        createRoom: function() {
            $('#room-form').modal();
        },

        settings: function() {
            $('#room-settings').modal();
        },

        addUsers: function() {

        }
    },


    sockets: {
        message(data) {
            let message = JSON.parse(data)
            if ( message && message.code == 'NEW_ROOM' ) {
                this.$store.dispatch('addRoom', message )
            }
        }
    }
}
</script>
<style scoped>

.room-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 94vh;
    max-height: 94vh;
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
    max-height: 94vh;
}

.scroll::-webkit-scrollbar {
  width: 8px;
  background: #2c3e50;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #243140;
}

.btn-dropup {
    background: #ffffff;
}

.btn-dropup:hover {
    background-color: #243140;
    color: #ffffff;
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

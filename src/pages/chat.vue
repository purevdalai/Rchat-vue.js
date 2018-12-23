<template>
    <div class="row">
        <div class="col-2">
            <room-list></room-list>
        </div>
        <div class="col-10">
            <room-content></room-content>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import RoomList from './../components/chat/room-list.vue'
import RoomContent from './../components/chat/room-content.vue'
import RoomService from './../services/RoomService.js'
export default {
    name: 'ChatPage',

    components: {
        'room-list': RoomList,
        'room-content': RoomContent
    },

    data: function() {
        return {
            selectedRoom: null,
            room_list: null,
        }
    },

    created: function() {
        this.fetchData();
    },

    computed: {
        ...mapState({
            auth: state => state.userStore.profile
        }),

        rooms: function() {
            return this.room_list
        }
    },

    methods: {
        fetchData: function() {
            RoomService.getRooms().then(res => {
                if ( res && res.status === 200 ) console.log(res.data)
            })
            .catch(err => {
                console.log('err when fetch rooms => ', err)
            })
        },
    }
}
</script>


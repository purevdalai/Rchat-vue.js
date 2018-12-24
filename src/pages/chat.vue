<template>
    <div class="row">
        <div class="col-2 p-0 m-0">
            <room-list></room-list>
        </div>
        <div class="col-8 p-0">
            <room-content></room-content>
        </div>
        <div class="col-2 p-0 m-0">
            <room-detail></room-detail>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import RoomList from './../components/chat/room-list.vue'
import RoomContent from './../components/chat/room-content.vue'
import RoomDetail from './../components/chat/room-detail.vue'
import ChatService from './../services/ChatService.js'
export default {
    name: 'ChatPage',

    components: {
        'room-list': RoomList,
        'room-content': RoomContent,
        'room-detail': RoomDetail,
    },

    data: function() {
        return {
            selectedRoom: 1,
            room_list: null,
        }
    },

    mounted: function() {
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
            ChatService.getRooms().then(res => {
                if ( res && res.status === 200 ) 
                    this.$store.dispatch('setRooms', res.data.rooms )
            })
            .catch(err => {
                console.log('err when fetch rooms => ', err)
            })
        },
    }
}
</script>


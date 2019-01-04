<template>
    <div class="col-12 row list-item"  
        :class="room.id == selectedRoom ? 'active' : ''"
        @click="viewChat">
        <div class="col-3">
            <img :src="room.image ? room.image : room.user.profile_img "
                class="img-fluid profile-img" />
        </div>
        <div class="col-9">
            <span v-if="room.user && isAuthUser(room.user) && room.users.length == 1">
                Миний чат
            </span>
            <span v-else> {{ room.name ?  room.name : room.user.first_name + ' ' + room.user.last_name }} </span>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'ChatRoomInfo',

    props: {
        item: {
            type: Object,
            required: true 
        }
    },

    data: function() {
        return {
            roomInfo: null
        }
    },

    created: function() {
        this.roomInfo = this.getRoomInfo()
        // console.log(this.roomInfo)
    },

    computed: {
        ...mapState({
            auth: state => state.userStore.profile,
            selectedRoom: state => state.chatStore.selectedRoom
        }),

        username: function() {
            // if ( this.user.code == this.self.code ) return 'My Chat';
            // return this.user.first_name + ' ' + this.user.last_name;
        },

        room: function() {
            return this.roomInfo
        }
    },

    methods: {
        viewChat: function(user) {
            this.$router.push({
                name: 'Chat'
            });
            this.$store.dispatch('setSelectedRoom', this.roomInfo.id )
        },

        getRoomInfo() {
            let item = {}
            if ( this.item.users.length == 1 ) {
                item = this.item
                item.user = {}
                item.user = this.item.users[0]
                this.$store.dispatch('setSelectedRoom', item.id )
            }
            else if ( this.item.users.length == 2 ) {
                this.item.users.map(user => {
                    if ( !this.isAuthUser(user) ) {
                        item = this.item
                        item.user = {}
                        item.user = user
                    }
                })
            }
            else if ( this.item.users.length > 2 ) {
                item = this.item
            }
            return item
        }
    }
}
</script>
<style scoped>
.profile-img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    -moz-transition: 0.3s border ease;
    -o-transition: 0.3s border ease;
    -webkit-transition: 0.3s border ease;
    transition: 0.3s border ease;
}

.list-item {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.9em;
    height: 60px;
}

.list-item:hover {
    background: #32465a;
    cursor: pointer;
}

.list-item.active {
    background: #32465a;
}
</style>

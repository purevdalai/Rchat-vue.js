<template>

        <!-- :class="room == user.code ? 'active' : ''" -->
    <div class="col-12 row list-item"  
        @click="viewChat">
        <div class="col-3">
            <img :src="roomInfo.image ? roomInfo.image : roomInfo.user.profile_img "
                class="img-fluid profile-img" />
        </div>
        <div class="col-9">
            <span v-if="isAuthUser(roomInfo.user)">
                Миний чат
            </span>
            <span v-else> {{ roomInfo.name ?  roomInfo.name : roomInfo.user.first_name + ' ' + roomInfo.user.last_name }} </span>
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
            auth: state => state.userStore.profile
        }),

        username: function() {
            // if ( this.user.code == this.self.code ) return 'My Chat';
            // return this.user.first_name + ' ' + this.user.last_name;
        }  
    },

    methods: {
        viewChat: function(user) {
            // this.$router.push({
            //     name: 'Home',
            //     query: {
            //         room: user.code
            //     }
            // });
            // this.$emit('setRoom', user.code);
            console.log(this.roomInfo.id)
        },

        getRoomInfo() {
            let item = {}
            if ( this.item.users.length == 1 ) {
                item = this.item
                item.user = {}
                item.user = this.item.users[0]
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
                if ( !item.name ) {
                    item.name = 'Нэр алга'
                }
                if ( !item.image ) {
                    item.image = 'https://lorempixel.com/300/300/?92993'
                }
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
    max-height: 70px;
}

.list-item:hover {
    background: #32465a;
    cursor: pointer;
}

.list-item.active {
    background: #32465a;
}
</style>

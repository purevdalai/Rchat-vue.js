<template>
<div class="detail">
    <div class="scroll row p-0 m-0" v-if="room && room.users">
        <div class="col-12 pr-4 pl-3 m-0 pb-0 pt-0 mt-4 mb-5">
            <h4> Дэлгэрэнгүй </h4>
            <hr>
            <p v-if="room.description">
                {{ room.description }}
            </p>
            <p v-else>
                Өрөөний дэлгэрэнгүй мэдээллийг оруулаагүй байна.
            </p>
        </div>

        <div class="col-12 pr-4 pl-3 m-0 mb-5">
            <h4>Админ</h4>
            <hr>
            <div
                @click="view(user)" 
                class="user" 
                v-for="(user, index) in room.users" :key="index">
                <img :src="user.profile_img" class="img-fluid img">
            </div>
        </div>

        <div class="col-12 pr-4 pl-3 m-0 mb-5">
            <h4>Гишүүд</h4>
            <hr>
            <div
                @click="view(user)" 
                class="user" 
                v-for="(user, index) in room.users" :key="index">
                <img :src="user.profile_img" class="img-fluid img">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "ChatRoomDetail",

    computed: {
        ...mapState({
            room: state => state.chatStore.room,
        }),
    },

    methods: {
        view: function(user) {
            this.$router.push({
                name: 'Chat'
            });
            this.$store.dispatch('setSelectedRoom', user.id )
        }
    }
}
</script>

<style scoped>
.detail {
    max-height: 94vh;
    min-height: 94vh;
    background: #2c3e50;
    color: #ffffff;
}

.scroll {
    max-height: 94vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.scroll::-webkit-scrollbar {
    width: 8px;
    background: transparent;
}

.scroll::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
}

.user {
    width: 60px;
    height: 60px;
    float:left;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.user:hover {
    box-shadow: 0 0 2px 1px #20c997;
}

.img {
    width: 60px;
    height: 60px;
    border-radius: 50%; 
}

hr {
    color: ffffff;
    border: 1px solid;
    border-bottom: 1px dashed #ccc;
    background: #ffffff;
}
</style>

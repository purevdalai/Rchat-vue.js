<template>
    <div class="row messages" v-if="room && room.messages">
        <content-message
            :item="content"
            :key="index"
            v-for="(content, index) in room.messages"
        ></content-message>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ChatContent from './chat-content.vue'
export default {
    name: 'ChatContainer',

    components: {
        'content-message': ChatContent
    },

    computed: {
        ...mapState({
            room: state => state.chatStore.room,
            selectedRoom: state => state.chatStore.selectedRoom,
        }),
    },
}
</script>
<style scoped>
.messages {
    background: #E6EAEA;
}
</style>

<template>
    <div class="content">
        <div class="scroll">
            <chat-container></chat-container>
        </div>
        <chat-form></chat-form>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ChatForm from './chat-form.vue'
import ChatContainer from './chat-container.vue'
import ChatService from './../../services/ChatService.js'

export default {
    name: 'ChatRoomContent',
    
    components: {
        'chat-container': ChatContainer,
        'chat-form': ChatForm,
    },

    computed: {
        ...mapState({
            selectedRoom: state => state.chatStore.selectedRoom,
        }),
    },

    watch: {
        selectedRoom: function(val) {
            this.fetchData();
        }
    },

    methods: {
        fetchData: function() {
            if ( this.selectedRoom ) {
                let params = {
                    id: this.selectedRoom
                }
                ChatService.getRoomContent(params).then(res => {
                    if ( res && res.status === 200 ) {
                        this.$store.dispatch('setRoom', res.data )
                    }
                })
                .catch(err => {
                    console.log('err when fetch room contents!')
                })
            }
        }
    }
}
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 91vh;
    min-height: 91vh;
}

.scroll {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 91vh;
}

.scroll::-webkit-scrollbar {
    width: 8px;
    background: transparent;
}

.scroll::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
}
</style>

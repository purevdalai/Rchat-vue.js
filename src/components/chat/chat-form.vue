<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body m-0 p-0 settings">
                    <div class="float-left attach-files">
                        <button 
                            class="btn btn-attach m-0 text-color">
                            <i
                                class="fas fa-paperclip">
                            </i>
                        </button>
                        <input 
                            @change="attach"
                            type="file" 
                            name="attachFiles[]" 
                            class="files" 
                            multiple />
                    </div>
                    <div class="float-right">
                        <i 
                            @click="handleSubmit"
                            class="btn btn-outline-success m-0 fas fa-paper-plane"> 
                            &nbsp; Send 
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group">
                <textarea
                    v-model.trim="message"
                    placeholder="Та энд захиадал бичнэ үү..." 
                    class="form-control"
                    @keyup.enter="handleSubmit" 
                    rows="3"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ChatService from './../../services/ChatService.js'
export default {
    name: 'ChatForm',

    data: function() {
        return {
            message: null,
            files: []
        }
    },

    computed: {
        ...mapState({
            selectedRoom: state => state.chatStore.selectedRoom,
        }),
    },

    methods: {
        handleSubmit() {
            if ( this.message.length > 0 && this.selectedRoom) {
                // send backend
                let params = {
                    content: this.message,
                    room_id: this.selectedRoom
                }
                ChatService.storeMessage(params).then(res => {
                    if ( res && res.status === 201 ) {
                        // this.$store.dispatch('addChatMessage', res.data.message )
                    }
                })
                .catch(err => {
                    console.log('err when post new message!', err)
                })
                this.message = null;
            }
        },

        attach: function(e) {
            let files = e.target.files
            if ( files.length > 0 ) {
                let params = {
                    files: files,
                    room_id: this.selectedRoom
                }
                ChatService.storeFiles(params).then(res => {
                    if ( res && res.status === 201 ) {
                        console.log(res.data)
                    }
                })
                .catch(err => {
                    console.log('err when post files!', err)
                })
            }
        }
    }
}
</script>

<style scoped>
textarea {
    resize: none;
    overflow: hidden;
    border-radius: 0;
}
.card {
    border-bottom: 0;
    border-radius: 0;
}

.btn {
    border-radius: 0;
}

.btn-attach:hover {
    background: #E8E8E8;
}

.text-color {
    color: #2c3e50;
}

.attach-files {
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
}

.attach-files .files {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
</style>
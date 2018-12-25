<template>
    <div class="modal fade mt-5" id="room-settings" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5> Өрөөний мэдээлэл шинэчлэх </h5>
                </div>
                <div class="modal-body container">
                    <div class="row">
                        <div class="col-2">
                            <select-image
                                @setImage="image = $event"
                            ></select-image>
                        </div>
                        <div class="col-10">
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Өрөөний нэр: </label>
                                <div class="col-9">
                                    <input 
                                        type="text" v-model.trim="name" 
                                        class="form-control float-right" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Өрөөний тайлбар: </label>
                                <div class="col-9">
                                    <textarea 
                                        type="text" v-model.trim="description" 
                                        class="form-control float-right" rows="3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <button 
                            @click="close" 
                            class="btn btn-secondary mr-1" >
                            Хаах
                        </button>
                        <button 
                            :disabled="!isFillForm"
                            @click="handleSubmit"
                            class="btn btn-success mr-3">
                            Шинэчлэх
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import SelectImage from './../../form/image.vue'
import ChatService from './../../../services/ChatService.js'

export default {
    name: "RoomSettings",

    components: {
        'select-image': SelectImage
    },

    data: function() {
        return {
            name: '',
            description: '',
            image: null,
        }
    },


    mounted: function() {
        let self = this;
        $('#room-settings').on('hidden.bs.modal', function () {
            self.reset()
            self.$root.$emit('resetImage')
        })
        $('#room-settings').on('shown.bs.modal', function () {
            self.prepareData();
        })
    },


    computed: {
        ...mapState({
            room: state => state.chatStore.room
        }),

        isFillForm: function() {
            return this.name.length > 0
        },
    },

    methods: {
        handleSubmit: function() {
            if ( this.isFillForm ) {
                let params = new FormData();
                params.append('id', this.room.id)
                params.append('name', this.name)
                if ( this.image ) params.append('image', this.image)
                if ( this.description ) params.append('description', this.description)

                ChatService.updateRoom(this.room.id, params).then(res => {
                    if ( res && res.status === 200 ) {
                        this.close()
                    }
                })
                .catch(err => {
                    console.log('err when update room => ', err)
                })
            }
        },

        prepareData: function() {
            if ( this.room ) {
                this.name = this.room.name;
                if ( this.room.description ) this.description = this.room.description  
                this.$root.$emit('setImageSrc', this.room.image)
            }
        },
        
        reset: function() {
            this.name = ''
            this.description = ''
            this.image = null
        },

        close: function() {
            this.reset()
            this.$root.$emit('resetImage')
            $('#room-settings').modal('toggle')
        },
    },

}
</script>

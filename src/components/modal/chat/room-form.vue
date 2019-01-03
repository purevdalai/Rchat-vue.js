<template>
    <div class="modal fade mt-5" id="room-form" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5> Шинэ өрөө үүсгэх </h5>
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
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                                <input type="text" 
                                    v-model.trim="search" 
                                    class="form-control" placeholder="Хайх">
                            </div>
                        </div>
                    </div>
                    <div class="userList scroll row ml-3 mr-3">
                        <div class="selectUser form-check form-check-inline col-12 mb-1"
                            v-if="!isAuthUser(user)" :key="index" 
                            v-for="(user, index) in filterData">
                            <input 
                                v-model="checkedUsers"
                                class="form-check-input" 
                                type="checkbox" 
                                :id="'select' + user.id" 
                                :value="user.id">
                            <img
                                :src="user.profile_img"
                                class="img-fluid profile_img mr-3 ml-2">
                            <label 
                                class="form-check-label" 
                                :for="'select' + user.id">
                                {{ user.first_name }} {{ user.last_name }}
                            </label>
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
                            Үүсгэх
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from './../../../services/UserService.js'
import ChatService from './../../../services/ChatService.js'
import SelectImage from './../../form/image.vue'
export default {
    name: 'CreateRoom',

    components: {
        'select-image': SelectImage
    },

    data: function() {
        return {
            search: '',
            name: '',
            description: '',
            image: null,
            userList: [],
            checkedUsers: [],
        }
    },

    created: function() {
    },

    mounted: function() {
        this.fetchData()
        
        let self = this;
        $('#room-form').on('hidden.bs.modal', function () {
            self.reset()
            self.$root.$emit('resetImage')
        })
    },

    computed: {
        filterData: function() {
            return this.userList.filter(user => {
                let username = user.first_name + ' ' + user.last_name
                return username.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        isFillForm: function() {
            return this.image && this.name.length > 0 &&  this.checkedUsers.length > 0
        },

    },

    methods: {
        fetchData: function() {
            UserService.getEmployeeList().then(res => {
                if ( res && res.status === 200 ) this.userList = res.data
            })
            .catch(err => {
                console.log('err chat room when fetch user list => ', err)
            })
        },

        handleSubmit: function() {
            if ( this.isFillForm ) {
                let params = new FormData();
                params.append('image', this.image)
                params.append('name', this.name)
                params.append('users', this.checkedUsers)
                params.append('description', this.description)

                ChatService.storeRoom(params).then(res => {
                    if ( res && res.status === 201 ) {
                        this.close()
                    }
                })
                .catch(err => {
                    console.log('err when store new room => ', err)
                })
            }
        }, 

        reset: function() {
            this.search = ''
            this.name = ''
            this.description = ''
            this.checkedUsers = ''
            this.image = null
        },

        close: function() {
            this.reset()
            this.$root.$emit('resetImage')
            $('#room-form').modal('toggle')
        },
    }
}
</script>
<style scoped>
.profile_img, .form-check-label {
    cursor: pointer;
}

.profile_img {
    width: 35px;
    border-radius: 50%;
}
.upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    /* display: inline-block; */
}

.mybtn {
    cursor: pointer;
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}

.userList {
    max-height: 200px;
}

.scroll {
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
}

.btn {
    min-width: 100px;
}

.selectUser {
    height: 50px;
}
</style>

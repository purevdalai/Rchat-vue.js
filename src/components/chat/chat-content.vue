<template>
    <div class="col-12 message row">
        <div class="col-auto">
            <img :src="item.user.profile_img" class="img-fluid profile_img mt-3" />
        </div>
        <div class="col-11 content row">
            <div class="col-12">
                {{ getUsername(item.user) }}
                <div class="float-right">
                    {{ fromNow(item.created_at) }}
                </div>
            </div>
            <p class="col-12">
                {{ item.content }}
            </p>
            <div class="col-12 row" v-for="(file, index) in item.files" :key="index">
                <a target="_blank" :href="file.path" class="col-auto float-left mt-2">
                    {{ file.name }}
                </a>
                <!-- <div class="col-1 float-left">
                    <button @click="download(file)" class="btn btn-outline-success border-0">Татах</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import ChatService from './../../services/ChatService.js'
export default {
    name: 'SingleContent',

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    methods: {
        getUsername: function(user) {
            return user.first_name + ' ' + user.last_name;
        },

        download: function(file) {
            // let params = {
            //     name: file.name,
            //     message_id: file.message_id
            // }
            // ChatService.downloadFile(params).then(res => {
            //     console.log(res)
            // })
        }
    }
}
</script>

<style scoped>
.message {
    font-size: 0.9em;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #f5f5f5;
}

.profile_img {
    border-radius: 50%;
    width: 50px;
}

.content {
    background: #435f7a;
    border-radius: 10px;
    padding: 10px;
    min-height: 25px;
}

a {
    color: #ffffff;
}
</style>
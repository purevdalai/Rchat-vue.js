<template>
    <div class="col-12 message row">
        <div class="col-auto">
            <img :src="item.user.profile_img" class="img-fluid profile_img mt-3" />
        </div>
        <div class="col-11 content">
            <div>
                {{ getUsername(item.user) }}
                <div class="float-right">
                    {{ fromNow(item.created_at) }}
                </div>
            </div>
            <p>
                {{ item.content }}
            </p>
        </div>
    </div>
</template>
<script>
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
</style>
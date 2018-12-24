<template>
    <div class="detail">
        DETAIL
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
}
</script>

<style scoped>
.detail {
    height: 94vh;
    background: #2c3e50;
    color: #ffffff;
}
</style>

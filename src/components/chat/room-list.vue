<template>
    <div class="room-list">
        <div class="row scroll rooms p-0 m-0">
            <room-info
                :key="index"
                v-for="(item, index) in items"
                :item="item" 
            ></room-info>
        </div>

        <div class="row m-0">
            <div class="col-6 p-0 m-0">
                <button class="btn btn-color btn-block" @click="createRoom">
                    <i class="fas fa-folder-plus"></i>
                    Өрөө үүсгэх
                </button>
            </div>
            <div class="col-6 p-0 m-0">
                <button class="btn btn-color btn-block" @click="settings">
                    <i class="fas fa-user-cog"></i>
                    Тохиргоо
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import RoomInfo from './room-info.vue'
export default {
    name: 'ChatRoomList',
    
    components: {
        'room-info': RoomInfo
    },

    props: {
        items: {
            type: Array,
            required: true
        },
    },

    methods: {
        createRoom: function() {

        },

        settings: function() {

        },
    },
}
</script>
<style scoped>

.room-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 94vh;
    background: #2c3e50;
}

button {
    border-radius: 0;
}

.btn-color {
    background: #32465a;
    color: #ffffff;
}

.rooms {
    background: #2c3e50;
    color: #ffffff;
}

.scroll {
    overflow-y: auto;
    overflow-x: hidden;
    /* height: 91vh; */
}

.scroll::-webkit-scrollbar {
  width: 8px;
  background: #2c3e50;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #243140;
}

@media screen and (max-width: 735px) {
    .scroll {
        height: calc(100% - 149px);
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }
}
</style>

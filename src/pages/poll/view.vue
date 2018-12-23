<template>
    <div class="card mt-3">
        <div class="card-header">
            <span class="float-left mt-1">
                Санал асуулгууд
            </span>
            <div class="float-right">
                <button
                    @click="createPoll" 
                    class="btn btn-success">
                    <i class="fas fa-plus"></i>
                    Санал асуулга үүсгэх
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-dark">
                        <tr class="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Асуулт</th>
                            <th scope="col">Үүсгэсэн</th>
                            <th scope="col">Хариулсан тоо</th>
                            <th scope="col">Төлөв</th>
                            <th scope="col">Үйлдэл</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="polls.length == 0">
                            <td colspan="6" class="text-center"> Одоогоор асуулт алга байна </td>
                        </tr>
                        <tr v-else v-for="(item, index) in polls" :key="index" class="text-center">
                            <th scope="row">
                                {{ item.id }}
                            </th>
                            <td>
                                <span>{{ item.title }}</span>
                            </td>
                            <td>
                                <span> {{ item.user.first_name }} {{ item.user.last_name }} </span>
                            </td>
                            <td>
                                <!-- fix -->
                                <span> {{ voteSize(item.votes) }} </span>
                            </td>
                            <td>
                                <span class="badge badge-primary" v-if="item.closed == 0"> Нээлттэй </span>
                                <span class="badge badge-success" v-if="item.closed == 1"> Хаасан </span>
                            </td>
                            <td>
                                <button
                                    @click="view(item)" 
                                    class="btn btn-success">
                                    <i class="fas fa-folder"></i>
                                    &nbsp;Дэлгэрэнгүй
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import PollService from './../../services/PollService.js'
export default {
    name: 'PollPage',

    data: function() {
        return {
            polls: [],
        }
    },

    created: function() {
        this.fetchData();
    },
    
    methods: {
        createPoll: function() {
            this.$router.push({
                name: 'PollCreate'
            })
        },

        fetchData: function() {
            PollService.getPolls().then(res => {
                if ( res && res.status === 200 ) this.polls = res.data
            })
            .catch(err => {
                console.log('err when fetch polls => ', err)
            })
        },

        view: function( item ) {
            this.$router.push({
                name: 'PollShow',
                params: {
                    id: item.id + ''
                }
            })
        },

        voteSize: function( items ) {
            let result = new Set()
            items.map(item => {
                result.add(item.user_id)
            })
            return result.size
        }
    }
}
</script>

<style>
.btn {
    font-size: 13px;
}
</style>

<template>
    <div class="container">
        <div class="row justify-content-center" v-if="item">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        Асуулт: {{ item.title }} ?
                    </div>
                    <div class="card-body m-0 p-0">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            Сонголт
                                        </th>
                                        <th>
                                            Хэн
                                        </th>
                                        <th>
                                            Саналын тоо
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(candidate, index) in candidates" :key="index">
                                        <td>
                                            <div class="form-check">
                                                <input 
                                                    class="form-check-input" 
                                                    type="checkbox" 
                                                    :id="candidate.candidate + '' + candidate.id">
                                                <label class="form-check-label" :for="candidate.candidate + '' + candidate.id">
                                                    <strong> {{ candidate.candidate }} </strong>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div v-if="candidate.votes.length > 0">
                                                <span class="vote" v-for="(vote, index) in candidate.votes" :key="index">
                                                    {{ vote.user.first_name }} {{ vote.user.last_name }}
                                                </span>
                                            </div>
                                            <div v-else>
                                                Санал алга
                                            </div>
                                        </td>
                                        <td>
                                            0 %
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-0 mt-4 text-right">
                    <button 
                        @click="back"
                        class="btn btn-secondary mr-1"> 
                        Буцах 
                    </button>
                    <button 
                        @click="handleSubmit"
                        class="btn btn-success"> 
                        Санал өгөх 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PollService from './../../services/PollService.js'
export default {
    name: 'PollShow',

    props: {
        id: {
            type: String,
            required: true
        }
    },

    data: function() {
        return {
            item: null,
            result: null,
            candidate_list: []
        }    
    },

    created: function() {
        this.fetchData();
    },

    computed: {
        candidates: function() {
            this.candidate_list = this.item.candidates
            return this.candidate_list
        }
    },

    methods: {
        fetchData: function() {
            let params = {
                id: this.id
            }
            PollService.show(params).then(res => {
                if ( res && res.status === 200 ) this.item = res.data
            })
            .catch(err => {
                console.log('err when fetch poll => ', err)
            })
        },

        handleSubmit: function() {
            let result = [];
            this.item.candidates.map((item, index) => {
                if ( $('#' + item.candidate + '' + item.id)[0].checked ) {
                    result.push(item.id)
                }
            })
            if ( result.length > 0 ) {
                let params = {
                    question: this.item.id,
                    votes: result
                }
                PollService.vote(params).then(res => {
                    if (res && res.status === 201 ) {
                        if ( res.data.status ) {
                            this.$snotify.success(res.data.msg, {
                                showProgressBar: false
                            })
                            this.$router.push({
                                name: 'PollList'
                            })
                        }
                        else {
                            this.$snotify.danger(res.data.msg + ' ' + err, {
                                showProgressBar: false
                            })
                        }
                    }
                })
                .catch(err => {
                    console.log('err when vote => ', err)
                })
            }
        },

        back: function() {
            this.$router.push({
                name: 'PollList',
            })
        }
    }
}
</script>
<style scoped>
.form-check-label {
    cursor: pointer;
}
.card {
    margin-top: 5rem;
}
</style>

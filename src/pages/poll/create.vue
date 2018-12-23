<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                Санал асуулга үүсгэх
            </div>
            <div class="card-body row justify-content-center">
                <div class="col-12">
                    <label> Асуулт </label>

                    <div class="input-group mb-3">
                        <input 
                            type="text" v-model="question" 
                            class="form-control" 
                            placeholder="Та асуултаа бичнэ үү...">
                        <div class="input-group-append">
                            <span class="input-group-text">?</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 row mt-3">
                    <div class="col-4 ml-0 p-0">
                        <label class="float-left"> Сонголтууд </label>
                    </div>
                    <div class="col-8 p-0 text-right">
                        <button 
                            @click="addCandidate"
                            class="btn btn-success">
                            <i class="fas fa-plus"></i>
                            Сонголт нэмэх
                        </button>
                    </div>
                </div>
                <div class="col-12 p-0 row candidates">
                    <div class="col-12 mt-3" v-for="(item, index) in candidates" :key="index">
                        <candidate-form
                            :index="index"
                            @setVal="setVal($event)"
                            @remove="remove($event)"
                        ></candidate-form>
                    </div>
                </div>
                <div class="col-12 mt-3 text-right">
                    <button 
                        @click="back" 
                        class="btn btn-secondary mr-1">
                        Буцах
                    </button>
                    <button 
                        @click="createPoll" 
                        class="btn btn-success">
                        Санал асуулга үүсгэх
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CandidateForm from './../../components/poll/candidate.vue'
import PollService from './../../services/PollService.js'
export default {
    name: 'PollCreate',

    components: {
        'candidate-form': CandidateForm
    },

    data: function() {
        return {
            question: '',
            candidates: ['', ''],
        }
    },

    methods: {
        addCandidate: function() {
            this.candidates.push('');
        },

        createPoll: function() {
            let candidates = [];
            this.candidates.map(item => {
                if ( item.length > 0 ) {
                    candidates.push(item)
                } 
            })
            if ( candidates.length >= 2 ) {
                let params = this.getParams(candidates);
                PollService.create(params).then(res => {
                    if ( res && res.status === 201 ) {
                        this.$snotify.success(res.data.response, {
                            showProgressBar: false
                        })
                        this.$router.push({
                            name: 'PollList'
                        })
                    }
                })
                .catch(err => {
                    console.log('err when create poll => ', err)
                })
            }
        },
        
        setVal: function(item) {
            this.candidates[item.id] = item.value
        },

        getParams: function(candidates) {
            let params = {
                question: this.question,
                candidates: candidates
            }
            return params;
        },

        back: function() {
            this.$router.push({
                name: 'PollList'
            })
        },

        remove: function(index) {
            this.candidates = this.candidates.filter((item, i_index) => {
                return index !== i_index
            })
        }
    }
}
</script>
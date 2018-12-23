<template>
    <div class="input-group mb-3">
        <input 
            type="text" 
            class="form-control" 
            v-model="item"
            :placeholder="'Сонголт ' + (index + 1)" />
        <div class="input-group-append" v-if="index > 1">
            <button 
                @click="deleteCandidate"
                class="btn btn-outline-danger" 
                type="button">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CandidateForm',

    props: {
        index: {
            type: Number,
            required: true
        }
    },

    data: function() {
        return {
            item: ''
        }
    },

    watch: {
        item: function(val) {
            let obj = {
                id: this.index,
                value: val
            }
            this.$emit('setVal', obj)
        }
    },

    methods: {
        deleteCandidate: function() {
            this.$emit('remove', this.index)
        }
    }
}
</script>

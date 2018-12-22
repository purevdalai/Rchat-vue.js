<template>
    <div class="row mt-5">
        <div class="col-10">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Хайх" v-model="search" />
            </div>
        </div>
        <div class="col">
            <button class="btn btn-success" 
                @click="createArticle">
                <i class="fas fa-plus"></i>
                Мэдээ нэмэх
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArticleListFilter',


    data: function() {
        return {
            search: ''        
        }
    },

    watch: {
        search: function(val) {
            this.$emit('setFilter', val)
        }
    },

    methods: {
        createArticle: function() {
            this.$router.push({
                name: 'createArticle'
            });
        }
    }
}
</script>

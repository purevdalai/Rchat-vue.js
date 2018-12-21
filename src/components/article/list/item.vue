<template>
    <div class="row p-2 m-2">
        <div class="col-9">
            <div class="title">
                <h3>
                    <strong>
                        <a href="#" @click="view"> {{ article.title }} </a>
                    </strong>
                </h3>
            </div>
            <div class="content">
                <span v-html="article.content.substring(0, 250)">
                    {{ article.content.length > 250 ? '...' : '' }}
                </span>
            </div>
            <div class="created mt-3 float-left">
                <strong>
                    Үүсэн огноо: 
                    <span
                        data-toggle="tooltip" data-placement="top" 
                        :title="toFormatDate(article.created_at, 'LLL')"> 
                        {{ fromNow(article.created_at) }} 
                    </span>
                </strong>
            </div>
            <div>
                <button class="btn btn-info mt-3 float-right" @click="view">Унших</button>
            </div>
        </div>
        <div class="col-3">
            <img :src="article.image" class="img-fluid">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArticleItems',

    props: {
        article: {
            type: Object,
            required: true
        }
    },

    methods: {
        view: function() {
            this.$router.push({
                name: 'ArticleShow',
                params: {
                    id: this.article.id
                }
            });
        },
    }
}
</script>
<style scoped>
.created {
    cursor: pointer;
}
</style>

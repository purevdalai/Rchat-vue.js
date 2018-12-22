<template>
    <div class="container">
        <article-filter
            @setFilter="search = $event"
        ></article-filter>
        
        <article-item
            :article="item"
            :key="index"
            v-for="(item, index) in filteredArticle"
        ></article-item>
    </div>
</template>
<script>
import ArticleService from './../../services/ArticleService.js'
import Filter from './../../components/article/list/filter.vue'
import Item from './../../components/article/list/item.vue'

export default {
    name: 'ArticleList',

    components: {
        'article-filter': Filter,
        'article-item': Item,
    },

    data: function() {
        return {
            articles: [],
            search: null
        }
    },

    created: function() {
        this.fetchData()
    },

    computed: {
        filteredArticle: function() {
            let search = this.search
            if ( search !== null && search.length > 0 ) {
                let regex = new RegExp('(' + search + ')', 'i');
                return this.articles.filter(article => {
                    return article.title.match(regex)
                })
            }
            return this.articles
        }
    },

    methods: {
        fetchData: function() {
            ArticleService.getArticleList().then(res => {
                if ( res && res.status === 200 ) this.articles = res.data
            })
            .catch(err => {
                console.log('err when fetch articles => ', err)
            })
        }
    }
}
</script>

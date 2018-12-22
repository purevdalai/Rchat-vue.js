<template>
    <div class="container" v-if="user && article">
        <div class="row mt-5">
            <div class="col-1">
                <img :src="user.profile_img" class="img-fluid profile-img float-left"/>
            </div>
            <div class="col">
                <span class="username">
                    <strong> {{ username }} </strong>
                </span>
                <p>
                    <code> {{ user.code }}</code>
                </p>
            </div>
            <div class="float-right">
                <button 
                    @click="back"
                    class="btn btn-secondary">
                    <i class="fas fa-arrow-left"></i>
                    Буцах
                </button>
            </div>
        </div>
        <div class="row">
            <div class="title mt-2">
                <h2> <strong> {{ article.title }} </strong> </h2>
            </div>
        </div>
        <div class="row mt-1">
            <span v-html="article.content"></span>
        </div>
        <div class="row justify-content-center mt-3">
            <div>
                <img :src="article.image" class="img-fluid" />
            </div>
        </div>
    </div>
</template>
<script>
import ArticleService from './../../services/ArticleService.js'

export default {
    name: 'ArticleShow',

    props: {
        id: {
            type: String,
            required: true
        }
    },

    data: function() {
        return {
            article: null,
            user: null
        }
    },

    created: function() {
        this.fetchData()
    },

    computed: {
        username: function() {
            return this.user.first_name + ' ' + this.user.last_name;
        }
    },

    methods: {
        fetchData: function() {
            let params = {
                id: this.id
            }
            ArticleService.show(params).then(res => {
                if ( res && res.status === 200 ) {
                    this.article = res.data.article
                    this.user = res.data.user
                }
            })
            .catch(err => {
                console.log('err when fetch article show => ', err)
            })
        },

        back: function() {
            this.$router.push({
                name: 'ArticleList',
                params: {
                    id: this.article.id
                }
            });
        }
    }
}
</script>

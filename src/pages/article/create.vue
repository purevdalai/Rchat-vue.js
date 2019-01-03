<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-body p-5 row justify-content-center">
                <form @submit.prevent="createNews">
                    <div class="form-group">
                        <label>Гарчиг</label>
                        <input type="text" class="form-control" v-model="title" required />
                    </div>

                    <div class="form-group mb-4">
                        <label>Зураг хуулах</label>
                        <input 
                            type="file" 
                            id="image"
                            class="form-control-file" 
                            ref="file" name="file" required />
                    </div>

                    <div class="form-group">
                        <label>Агуулга</label>
                        
                        <quill-editor
                            v-model="content"
                            :options="editorOption">
                        </quill-editor>
                    </div>

                    <div class="float-right">
                        <button class="btn btn-success" @click="createNews">
                            Нийтлэх
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ArticleService from './../../services/ArticleService.js'

export default {
    name: 'ArticleCreate',

    data: function() {
        return {
            title: null,
            content: null,
            image: null,
            editorOption: {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'font': [] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                    ]
                }
            }
        }
    },
    
    computed: {
        ...mapState({
            auth: state => state.userStore.profile
        }),
    },

    methods: {
        createNews: function() {

            if ( this.title.length > 0 && this.content.length > 0) {
                let formData = new FormData();
                formData.append("image", document.getElementById('image').files[0]);
                formData.append('title', this.title);
                formData.append('content', this.content);

                ArticleService.create(formData).then(res => {
                    if ( res && res.status === 201 ) {
                        if ( res.data.status ) {
                            // this.$snotify.success(res.data.response, {
                            //     showProgressBar: false
                            // })

                            this.$router.push({
                                name: 'ArticleList'
                            })
                        }
                        else {
                            // this.$snotify.success(res.data.response, {
                            //     showProgressBar: false
                            // })
                        }
                    }
                })
            }
        }
    }
}
</script>


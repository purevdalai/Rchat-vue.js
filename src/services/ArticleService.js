import Api from './Api.js'
import apiPath from '../constant/api.js'

export default {
    getArticleList() {
        const response = Api().get(apiPath.getArticles)
        return response
    },

    show(params) {
        const response = Api().get(apiPath.getArticle + params.id + '/show' )
        return response    
    }
}
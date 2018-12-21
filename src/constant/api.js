const BASE_URL = "http://127.0.0.1:8000/"
const API_URL  = BASE_URL + "api/"

export default {
    login: BASE_URL + 'oauth/token',
    getAuthUser: API_URL + 'user',
    getEmployee: API_URL + 'employee',
    getArticles: API_URL + 'article', 
    getArticle: API_URL + 'article/',
    postArticle: API_URL + 'article',
}
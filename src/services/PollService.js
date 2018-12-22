import Api from './Api.js'
import apiPath from '../constant/api.js'

export default {
    create( params ) {
        const response = Api().post(apiPath.postPoll, params)
        return response
    }
}
import Api from './Api.js'
import apiPath from '../constant/api.js'

export default {
    getPolls() {
        const response = Api().get(apiPath.getPolls)
        return response
    },

    show( params ) {
        const response = Api().get(apiPath.getPoll + params.id + '/show')
        return response
    },

    create( params ) {
        const response = Api().post(apiPath.postPoll, params)
        return response
    },

    vote( params ) {
        const response = Api().post(apiPath.postVote, params)
        return response
    }
}
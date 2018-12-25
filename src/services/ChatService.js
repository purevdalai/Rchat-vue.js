import Api from './Api.js'
import apiPath from '../constant/api.js'

export default {
    getRooms() {
        const response = Api().get(apiPath.getRooms)
        return response
    },

    getRoomContent(params) {
        const response = Api().get(apiPath.getRoom + params.id + '/show')
        return response
    },

    storeMessage(params) {
        const response = Api().post(apiPath.postMessage, params)
        return response
    },

    storeRoom(params) {
        const response = Api().post(apiPath.postRoom, params)
        return response
    },

    updateRoom(id, params) {
        const response = Api().post(apiPath.updateRoom + id, params)
        return response
    }
}
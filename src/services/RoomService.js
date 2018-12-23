import Api from './Api.js'
import apiPath from '../constant/api.js'

export default {
    getRooms() {
        const response = Api().get(apiPath.getRooms)
        return response
    }
}
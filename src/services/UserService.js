import Api from './Api.js'
import apiPath from '../constant/api.js'

export default {
    async login(params) {
        const response = await Api().post(apiPath.login, params)
        return response
    },

    getAuthUser() {
        const response = Api().get(apiPath.getAuthUser)
        return response
    },

    getEmployeeList() {
        const response = Api().get(apiPath.getEmployee)
        return response
    }
}
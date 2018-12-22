import axios from 'axios'
import router from '../router/router.js'

export default() => {
    let apiHeaders = {
        'Content-Type': 'application/json'
    }

    if ( localStorage.getItem('auth') ) {
        const tokenData = JSON.parse(localStorage.getItem('auth'))
        if ( tokenData ) {
            apiHeaders = {
                ...apiHeaders,
                'Authorization': 'Bearer ' + tokenData.access_token
            }
        }
    }

    let apiRequest = axios.create({
        headers: apiHeaders
    })

    apiRequest.interceptors.response.use(response => {
        return response
    }, error => {
        if ( !error.response ) {
            return new Promise((resolve) => {
                resolve(axios(error.config))
            })
            // router.push({ name: 'logout' })
        }
        // else {
        //     router.push({ name: 'logout' })
        // }
    })

    return apiRequest
}
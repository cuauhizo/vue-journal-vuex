import axios from "axios"

const journalApi = axios.create({
    baseURL: 'https://vue-demos-58576-default-rtdb.firebaseio.com'
})

journalApi.interceptors.request.use((config) => {
    config.params = {
        auth: localStorage.getItem('idToken')
    }

    // tambien podria ser asi el backed lo solicita asi
    // config.headers = {
    //     authorization: 'bearer idToken'
    // }

    return config

})

export default journalApi
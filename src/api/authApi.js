import axios from "axios"

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDcaOwsoCzeHIQR6ayXWISzelrGT20fytM'
    }

})

export default authApi
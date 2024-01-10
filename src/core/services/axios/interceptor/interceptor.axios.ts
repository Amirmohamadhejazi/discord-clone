import axios from 'axios'
import { deleteCookie, getCookie } from 'cookies-next'
import qs from 'qs'

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true })
})

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response
    },
    (error) => {
        // Handle response errors here
        try {
            if (error.response.status === 401) {
                deleteCookie('token') // Clear current user token cookie
                window.location.href = '/' // Navigates the user to the auth page (login page or ...)
            }
            const expectedError = error.response && error.response.state >= 400 && error.response.status < 500

            // if error doesn't expected, can handle it below here
            if (!expectedError) {
                // console.error(error)
                try {
                    // console.error(error)
                } catch (error) {
                    // console.error(error)
                }
            }
        } catch (error) {
            // console.error(error)
        }
        return Promise.reject(error)
    }
)

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        // Modify the request config here (add headers, authentication tokens)
        const accessToken = getCookie('token')

        // If token is present add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.Authorization = accessToken
        }
        return config
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error)
    }
)

export default axiosInterceptorInstance

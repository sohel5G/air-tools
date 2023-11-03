import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://air-tools-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log('Err trucking in the Interceptor', err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                console.log('Logout the user')
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;

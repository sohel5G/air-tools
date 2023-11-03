import axios from "axios";
import { useContext, useEffect } from "react";
import { AllContext } from "../allContext/AllContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://air-tools-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const { userLogOut } = useContext(AllContext);


    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log('Err trucking in the Interceptor', err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                console.log('Logout the user')

                userLogOut()
                    .then(() => {
                        navigate('/login')
                    }).catch(() => {

                    });

            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;

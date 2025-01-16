import axios from "axios";
import { useNavigate } from "react-router";
import useAuthContext from "./useAuthContext";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
    // baseURL:'https://bistro-boss-restuarant-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {userLogOut} = useAuthContext()
    axiosSecure.interceptors.request.use(function (config) {
        
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    axiosSecure.interceptors.response.use(function (response) {
        return response;
      },async(error) =>{
        // Do something with request error
        const status = error.response.status;
        if(status === 401 || status === 403){
            await userLogOut();
            navigate('/login')
            console.log(status)
        }
        return Promise.reject(error);
      });
    return axiosSecure
};

export default useAxiosSecure;
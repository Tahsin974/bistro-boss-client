import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
    // baseURL:'https://bistro-boss-restuarant-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;
import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://bistro-boss-restuarant-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;
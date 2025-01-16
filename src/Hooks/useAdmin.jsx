import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuthContext();
    const axiosSecure = useAxiosSecure()
    const {data : isAdmin,isPending : adminLoading} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data?.admin;
        }
    })

    return [isAdmin,adminLoading]
};

export default useAdmin;
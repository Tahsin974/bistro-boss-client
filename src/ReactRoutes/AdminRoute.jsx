import { Navigate, useLocation } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuthContext();
    const [isAdmin,adminLoading] = useAdmin();
    if(loading || adminLoading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    if(user?.email && isAdmin){
        return children;
    } 
    return <Navigate to={'/all-users'} state={location.pathname} replace></Navigate>
};

export default AdminRoute;
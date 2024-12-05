import { Navigate, useLocation } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuthContext();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    if(user?.email){
        return children;
    } 
    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
};

export default PrivateRoute;
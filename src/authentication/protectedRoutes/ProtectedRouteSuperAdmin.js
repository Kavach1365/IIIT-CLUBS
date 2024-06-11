import getUserInfo from "../utils/userInfo";
import { Navigate } from "react-router-dom";
const ProtectedRouteSuperAdmin = ({children}) =>{
    const userData = getUserInfo();

    
    if(userData && userData.isSuperAdmin){
        return children;
    }
    else{
        return <Navigate to="/login" />

    }
}
export default ProtectedRouteSuperAdmin;
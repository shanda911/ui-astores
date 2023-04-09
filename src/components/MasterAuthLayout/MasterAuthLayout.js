import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Headers from "./Header/Header"

const MasterAuthLayout = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <><Headers /><Outlet /></>
            : auth?.email
                ? <Navigate to="/login" state={{ from: location }} replace />/*FIXME: Unauth*/
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default MasterAuthLayout;
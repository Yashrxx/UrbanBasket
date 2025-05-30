import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated}) => {
    // const authToken = localStorage.getItem("authToken");

    return isAuthenticated ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;

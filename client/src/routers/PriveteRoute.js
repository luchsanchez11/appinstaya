
import { Navigate, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";


export default function PrivateRoute ({hasRole: role, rest}){
    const {user} = useAuth();

    if (!user) return <Navigate to="/login" />;
    return (
        <Route {...rest} />
    );
  };


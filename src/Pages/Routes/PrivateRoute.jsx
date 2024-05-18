import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading text-center loading-spinner loading-lg text-primary"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/sign-in"></Navigate>;
};

export default PrivateRoutes;

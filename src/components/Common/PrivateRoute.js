import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("access_token");
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

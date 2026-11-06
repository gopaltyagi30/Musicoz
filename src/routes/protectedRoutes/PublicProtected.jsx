import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

const PublicProtected = () => {
  const { loggedInUser } = useAuth();

  if (loggedInUser) {
    if (loggedInUser.role === "artist") {
      return <Navigate to="/main/artist" replace />;
    }

    if (loggedInUser.role === "listener") {
      return <Navigate to="/main" replace />;
    }
  }

  return <Outlet />;
};

export default PublicProtected;
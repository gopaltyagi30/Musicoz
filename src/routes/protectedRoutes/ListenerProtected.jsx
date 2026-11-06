import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

const ListenerProtected = () => {
  const { loggedInUser } = useAuth();

  if (!loggedInUser || loggedInUser.role !== "listener") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ListenerProtected;
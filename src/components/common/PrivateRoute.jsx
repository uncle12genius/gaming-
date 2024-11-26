import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, role }) => {
  const { auth } = useAuth();

  // Check if auth is available and the user is authenticated (has a token)
  if (!auth || !auth.token) {
    return <Navigate to="/login" />;
  }

  // If a role is provided and the user's role doesn't match, redirect to the home page
  if (role && auth.role !== role) {
    return <Navigate to="/" />;
  }

  // If all checks pass, render the children (the protected component)
  return children;
};

export default PrivateRoute;

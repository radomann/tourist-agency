import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user?.user_id ? <>{element}</> : <Navigate to="/login" />;
};

export const AdminProtectedRoute = ({ element }) => {
  const { userdetail } = useContext(UserContext);

  return userdetail?.is_superuser ? <>{element}</> : <Navigate to="/" />;
};

export const PublicRoute = ({ element }) => {
  const { user } = useContext(UserContext);
  return user?.userId ? <Navigate to="/" /> : <>{element}</>;
};

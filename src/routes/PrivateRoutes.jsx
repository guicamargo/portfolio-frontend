import { Navigate, Outlet } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout';

const PrivateRoutes = () => {
  // Aqui você implementará sua lógica de autenticação
  const isAuthenticated = true; // Temporário - trocar pela sua lógica de auth

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default PrivateRoutes;
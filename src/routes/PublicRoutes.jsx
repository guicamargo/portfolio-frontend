import { Outlet } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRoutes;
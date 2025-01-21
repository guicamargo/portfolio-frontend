// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import Home from '../pages/public/home/index';
import AiMl from '../pages/private/aiMl/index';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Rotas Privadas */}
      <Route element={<PrivateRoutes />}>
        <Route path="/ai-ml" element={<AiMl />} />
      </Route>

      {/* Rota 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
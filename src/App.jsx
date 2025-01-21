// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeProvider } from './context/ThemeContext/index';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
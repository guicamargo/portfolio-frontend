// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeProvider } from './context/ThemeContext/index';
import ParticlesComponent from './components/background/index';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <ThemeProvider>
            <ParticlesComponent id="tsparticles" />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
    </>
  );
};

export default App;
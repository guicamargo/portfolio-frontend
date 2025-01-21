// src/layouts/PrivateLayout.jsx
import Header from '../components/Header';

const PrivateLayout = ({ children }) => {
  return (
    <div className="private-layout">
      <Header isPrivate={true} />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default PrivateLayout;
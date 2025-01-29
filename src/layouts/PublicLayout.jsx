// src/layouts/PublicLayout.jsx
import Header from '../components/Header';

const PublicLayout = ({ children }) => {
  return (
    <div className="public-layout">
      <Header isPrivate={false} />
      <main className="content" style={{ marginTop: '55px' }}>
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
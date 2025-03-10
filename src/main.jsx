import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/i18n"; // Importe o i18n antes de qualquer coisa
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext/index";
import { Analytics } from "@vercel/analytics/react";

// Em Vite, use import.meta.env em vez de process.env
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
// Aguarde o i18n inicializar
document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <App />
          <Analytics /> {/*analytics do vercel */}
        </AuthProvider>
      </GoogleOAuthProvider>
    </StrictMode>
  );
});

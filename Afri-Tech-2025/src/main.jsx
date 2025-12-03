import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AfriTechApp from "./AfriTechApp.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AfriTechApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

import React from "react";
import "./Privacy.css";

function Privacy() {
  return (
    <main className="privacy-wrapper">
      <div className="privacy-card">
        <h2>Privacy Policy</h2>
        <p>
          This is a simple demo privacy policy. We store minimal data (email,
          password, registration details) locally in the browser to demonstrate
          flows. For production, replace localStorage usage with a secure server
          and follow data protection laws.
        </p>
      </div>
    </main>
  );
}

export default Privacy;

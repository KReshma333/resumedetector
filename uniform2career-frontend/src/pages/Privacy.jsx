import React from "react";
import "../styles/privacy.css";

export default function Privacy() {
  return (
    <div className="page privacy">
      <h1>Privacy Policy</h1>
      <ul className="privacy-points">
        <li>
          <strong>Minimal Data Collection:</strong> We only collect information
          necessary to provide AI-driven job recommendations and CV generation services.
        </li>
        <li>
          <strong>Secure Storage:</strong> All personal data is stored safely and
          never shared with unauthorized third parties.
        </li>
        <li>
          <strong>User Control:</strong> You have full control over your data and
          can request modification or deletion at any time.
        </li>
        <li>
          <strong>Transparency & Trust:</strong> By using our platform, you agree
          to our ethical practices designed to protect the dignity and trust of Ex-Servicemen.
        </li>
      </ul>
    </div>
  );
}

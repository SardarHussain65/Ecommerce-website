import React from "react";

const WhatsAppButton = () => {
  return (
    <div
      className="fixed-bottom right-100 p-3"
      style={{ zIndex: 0, left: "initial" }}
    >
      <a
        href="https://wa.me/923369164460?text=Hello%20How%20can%20I%20help%20you%20?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/images/home/whatsapp.png" width="60" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppButton;

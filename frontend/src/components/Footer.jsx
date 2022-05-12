import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footerdiv">
      <a href="https://www.wwf.fr/" target="_blank" rel="noreferrer">
        <img
          className="footerimg"
          src="../src/assets/images-autres/wwf.png"
          alt="logo-wwf"
        />
      </a>
      <a
        href="https://www.conservation-nature.fr/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footerimg"
          src="../src/assets/images-autres/conservationnature.png"
          alt="logo-conservationnature"
        />
      </a>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./logoGiris.css";

const LogoGiris = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="arkaPlan">
        <div className="nameContainer">
          <p className="compName">
            {isMobile ? "ÖZ-ALADAĞ" : "ÖZ-ALADAĞ SİGORTA"}
          </p>
        </div>
      </div>
    </>
  );
};

export default LogoGiris;

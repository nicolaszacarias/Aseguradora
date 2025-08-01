import React, { useState, useEffect } from "react";
import "./Carrusel.css";
import secures from "../../utils/secures";

const SecureCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Extender para que al final nunca queden <4 elementos
  const extendedSecures = [...secures, ...secures.slice(0, 3)];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 4) % extendedSecures.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [extendedSecures.length]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 4) % extendedSecures.length);
  };
  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 4 + extendedSecures.length) % extendedSecures.length
    );
  };

  const visibleSecures = extendedSecures.slice(startIndex, startIndex + 4);

  return (
    <div className="secures-wrapper">
      <h2 className="secures-title">Nuestros Seguros</h2>
      <div className="secures-controls">
        <button className="carousel-button prev" onClick={handlePrev}>
          ‹
        </button>
        <div className="secures-grid">
          {visibleSecures.map((item, i) => (
            <div className="secure-card" key={i}>
              <div className="secure-icon">{item.icon}</div>
              <h3>{item.heading}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default SecureCarousel;

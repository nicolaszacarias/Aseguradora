import React, { useState, useEffect } from "react";
import "./Carrusel.css";
import secures from "../../utils/secures";

const SecureCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setItemsPerPage(1);
      } else if (width <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + itemsPerPage) % secures.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % secures.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + secures.length) % secures.length
    );
  };

  const getVisibleSecures = () => {
    const endIndex = startIndex + itemsPerPage;

    if (endIndex <= secures.length) {
      return secures.slice(startIndex, endIndex);
    }

    const firstPart = secures.slice(startIndex);
    const secondPart = secures.slice(0, endIndex % secures.length);
    return [...firstPart, ...secondPart];
  };

  const visibleSecures = getVisibleSecures();

  return (
    <div className="secures-wrapper">
      <h2 className="secures-title">Nuestros Seguros</h2>

      <div className="secures-controls">
        <button className="carousel-button prev" onClick={handlePrev}>
          ‹
        </button>

        <div className="secures-grid">
          {visibleSecures.map((item, i) => (
            <div className="secure-card" key={`${item.heading}-${i}`}>
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


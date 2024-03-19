// import React, { useState } from 'react';
// import secures from "../../utils/secures.jsx"; // Asegúrate de tener un archivo con la lista de seguros
// import "./Carrusel.css";
// const SecureCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? secures.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === secures.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={goToPrevious}>&lt;</button>
//       <div className="carousel-items">
//         {secures.map((secure, index) => (
//           <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
//             <div className="icon-container">
//               {secure.icon}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={goToNext}>&gt;</button>
//     </div>
//   );
// };

// export default SecureCarousel;
import React from 'react'
import image from "../assets/image1.png"
function Temp() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div
            className="group relative w-64 h-64 overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 group-hover:w-56 group-hover:h-56"
          >
            {/* Image */}
            <img
              src={image}
              alt="Zoom Effect"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 group-hover:bg-opacity-50"></div>
          </div>
        </div>
      );
    };
    


export default Temp
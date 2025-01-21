import React from 'react';
import image from "../assets/image1.png"
const Temp = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
            <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                </div>
                <img
                    alt=""
                    className="w-96 object-cover  aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    src={image}
                />
            </div>
        </div>
    );
};

export default Temp;

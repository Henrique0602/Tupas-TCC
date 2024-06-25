import  { useState, useEffect } from 'react';

const Carrossel = () => {
    const [images] = useState([
        'img1Carrossel.png',
        'img2Carrossel.png',
        'img3Carrossel.png',
        'img4Carrossel.png'
    ]);
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="flex justify-center items-center mb-10 mt-4">
                <div className="max-w-lg mx-auto">
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="w-full h-full object-cover ml-8 -mt-12" />
                </div>
            </div>
    );
};
export default Carrossel;
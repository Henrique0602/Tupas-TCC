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
        <div className="flex justify-center items-center ml-40">
                <div className="max-w-sm mx-auto ">
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`}/>
                </div>
            </div>
    );
};
export default Carrossel;

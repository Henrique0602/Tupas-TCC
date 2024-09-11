import { Link } from "react-router-dom"
import  { useRef } from 'react';


export default function Confirmacao() {
    const inputRefs = useRef([]);
    const handleInputChange = (index, event) => {
        if (event.target.value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };
    return (    
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md w-auto h-full flex flex-row ">

                    <div className="flex-col w-96 items-center">
                        <img src="./verificacao.png" alt="" className="p-12" />

                        <div className="p-4">
                            <h2 className=" font-bold text-xl">Codigo de verificação</h2>
                            <span className="text-wrap ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi voluptatum culpa.</span>
                        </div>

                        <div className="flex flex-row gap-6 justify-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div className="relative mb-6" key={index}>
                                    <input
                                        type="text"
                                        maxLength="1"
                                        className="w-16 h-20 text-3xl text-center rounded-xl bg-white placeholder:text-colortxt_preto focus:outline-none drop-shadow-md"
                                        onChange={(event) => handleInputChange(index, event)}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center">
                            <Link to="/">
                                <button type="submit" className="bg-color_verde text-colortxt_white py-2 rounded-3xl w-60 mb-2 text-center font-semibold">Confirmar código</button>
                            </Link>
                        </div>

                      
                    </div>

                </div>
            </div>

        </>
    );
}

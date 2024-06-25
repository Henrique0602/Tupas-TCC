import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

function Planos() {

    const el = useRef(null);
    const tl = useRef(null);

    useLayoutEffect(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: el.current,
                scrub: true,
                //markers: true,
                start: "top 600px",
                end: "bottom 900px" 
            }
        })
    
        .fromTo("#plano1", { opacity: 0, y: 160 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .fromTo("#plano2", { opacity: 0, y: 160 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5") // Delay para começar meio segundo depois do anterior
            .fromTo("#plano3", { opacity: 0, y: 160 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5"); // Delay para começar meio segundo depois do anterior

        

        return()=>{
            gsap.killTweensOf(".cards")

        }
    },[])

    return (
        <div className="card-container bg-color_bg bg-opacity-75 shadow-md  w-full h-screen">
            <h1 className="text-4xl text-color text-color_vinho font-bold p-20 ml-4 ">
                Planos Exclusivos
            </h1>
            <div className='cards' ref={el}>
                <div className="flex flex-col md:flex-row gap-20 p-10 justify-center items-center " >
                    {/* Gratis */}
                    <div className="bg-color_vinho text-white rounded-lg shadow-lg p-10 flex flex-col justify-between skew-y-6 hover:scale-110 transition-transform duration-300 ease-in-out" id='plano1'>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Gratis</h3>
                            <p className="text-4xl font-bold">
                                R$ 00,00
                                <span className="text-base font-medium">/mês</span>
                            </p>
                            <p className="mt-4 mb-8">
                                O plano gratis da Tupã's, você tem direito ao mínimos recursos
                            </p>
                            <ul className="mb-4">
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                            </ul>
                        </div>
                        <button className="mt-6 py-2 px-4 bg-color_bg rounded text-color_vinho font-bold">
                            Selecionar Plano
                        </button>
                    </div>

                    {/* TRIMESTRAL */}
                    <div className="bg-color_vinho text-white rounded-lg shadow-lg p-8 flex flex-col justify-between skew-y-6 hover:scale-110 transition-transform duration-300 ease-in-out  " id='plano2'>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">TRIMESTRAL</h3>
                            <p className="text-4xl font-bold">
                                R$ 49,00
                                <span className="text-base font-medium">/mês</span>
                            </p>
                            <p className="mt-4 mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <ul className="mb-4">
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>

                                </li>
                            </ul>
                        </div>
                        <button className="mt-6 py-2 px-4 bg-color_bg rounded text-color_vinho font-bold">
                            Selecionar Plano
                        </button>
                    </div>

                    {/* Anual */}
                    <div className="bg-color_vinho text-white rounded-lg shadow-lg p-8 flex flex-col justify-between skew-y-6 hover:scale-110 transition-transform duration-300 ease-in-out" id='plano3'>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Anual</h3>
                            <p className="text-4xl font-bold">
                                R$ 150,00
                                <span className="text-base font-medium">/mês</span>
                            </p>
                            <p className="mt-4 mb-8">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <ul className="mb-4">
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                                <li className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>

                                </li>
                            </ul>
                        </div>
                        <button className="mt-6 py-2 px-4 bg-color_bg rounded text-color_vinho font-bold">
                            Selecionar Plano
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Planos;
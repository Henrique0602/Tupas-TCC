import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../Componentes/Header/Header";
import Planos from "../Componentes/Planos/Planos";
import Footer from "../Componentes/Footer/Footer";
import { FaKeyboard } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const el = useRef(null);
    const tl = useRef()

    useLayoutEffect(() => {
        gsap.to(".Servicos", {
            x: 0,
            opacity: 1,
            rotate: "0deg",
            scrollTrigger:{
                trigger: ".Servicos",
                //markers: true,
                start : "top 400px",
                end : "bottom 600px",
                scrub: true        
              }
           
        });

        return()=>{
            gsap.killTweensOf(".Servicos")


        }
    }, [])


    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            tl.current=gsap.timeline({
                scrollTrigger: {
                    trigger: ".cards",
                    scrub: true,
                    markers: true,
                    start:"top 800px",
                    end: "bottom 920px"
                }
            })
            .fromTo("#card1", {
                opacity:0,
                y:150,
            },{
                opacity:1,
                y:0
            })
        }, el)

        return()=>{
            gsap.killTweensOf(".cards")

        }
    },[])


    return (
        <div className=" home min-h-screen bg-Fundo bg-cover">
            <Header />
            <div className="p-20 w-full h-full flex flex-row bg-color_bg bg-opacity-75 ">
                <div className="flex-col text-color_vinho ml-12 mt-6 mb-10">
                    <h2 className=" font-bold text-4xl mb-10">Home</h2>
                    <div className="flex-col ">
                        <h1 className="text-2xl font-semibold text-wrap w-80 mb-2">
                            Seu guia para o sucesso físico e mental.
                        </h1>
                        <p className="text-wrap w-80 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Id luctus a a sed lectus
                            aenean aenean tortor. Ultrices felis sed donec est urna aliquet.
                        </p>
                    </div>
                </div>


            </div>

            <div className="Servicos">
                <h1 className="text-4xl text-color text-color_bg font-bold px-20 mt-24 ml-10 mb-32 ">
                    Serviços
                </h1>
                <div className=" flex flex-col md:flex-row  p-10 justify-around items-center  ">
                    <div className="flex flex-col items-center">
                        <h1 className="text-colortxt_white font-semibold mb-8 text-2xl ">
                            Estética Física
                        </h1>
                        <img className="w-80 rounded-xl mt-5 hover:scale-110 transition-transform duration-300 ease-in-out  mb-10" src="/Public/Físico.jpg" />
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-colortxt_white font-semibold mb-8 text-2xl">
                            Saúde Corporal
                        </h1>
                        <img className="w-80 rounded-xl mt-5 hover:scale-110 transition-transform duration-300 ease-in-out  mb-10" src="/Public/SaudeCorporal.jpg" />
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-colortxt_white font-semibold mb-8 text-2xl">
                            Saúde Mental
                        </h1>
                        <img className="w-80 rounded-xl mt-5 hover:scale-110 transition-transform duration-300 ease-in-out mb-10" src="/Public/Mente.jpg" />
                    </div>
                </div>

                <div className="w-full flex flex-row justify-center mt-28 mb-24">
                    <button
                        type="submit"
                        className="bg-color_bg text-color text-color_vinho py-2 rounded-xl w-60 mb-2 text-center font-semibold ">
                        Saber Mais
                    </button>
                </div>

            </div>

            <Planos />

            <div className="px-4 md:px-10 h-full w-full p-10 mb-10 ">
                <h1 className="text-4xl font-bold text-color_bg p-10 ml-4 mb-10">Consultas Online</h1>

                <div className="flex flex-row justify-around">
                    <div className="flex flex-col">
                        <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start mb-5 " >
                            <img className="w-32 rounded-full object-cover md:ml-4 mb-4 md:mb-0" src="/Public/Ellipse 56.png" alt="" />
                            <div className="flex flex-col ml-4">
                                <h1 className="font-bold p-2 ">Dr.Fulano Ciclano</h1>
                                <p className="p-2 ">XX Anos</p>
                                <p className="p-2 "> Nutricionista</p>
                            </div>

                        </div>

                        <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start mb-5 ">

                            <img className="w-32  rounded-full object-cover md:ml-4 mb-4 md:mb-0" src="/Public/Ellipse 56 (1).png" alt="" />
                            <div className="flex flex-col ml-4">
                                <h1 className="font-bold p-2 ">Fulano Ciclano</h1>
                                <p className="p-2 ">XX Anos</p>
                                <p className="p-2 "> Personal</p>
                            </div>


                        </div>


                        <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start mb-5 ">

                            <img className="w-32  rounded-full object-cover md:ml-4 mb-4 md:mb-0" src="/Public/Ellipse 57.png" alt="" />
                            <div className="flex flex-col ml-4">
                                <h1 className="font-bold p-2 ">Fulana Ciclana</h1>
                                <p className="p-2 ">XX Anos</p>
                                <p className="p-2 "> Psicóloga</p>
                            </div>

                        </div>
                    </div>


                    <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg h-full text-wrap w-80 text-ls " >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis reprehenderit, officia recusandae architecto voluptatibus rem. Cupiditate temporibus quidem quos iure vero eos earum, optio deserunt, totam corrupti beatae doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis reprehenderit, officia recusandae architecto voluptatibus rem. Cupiditate temporibus quidem quos iure vero eos earum, optio deserunt, totam corrupti beatae doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis reprehenderit, officia recusandae architecto voluptatibus rem. Cupiditate temporibus quidem quos iure vero eos earum, optio deserunt, totam corrupti beatae doloribus!
                        </p>
                    </div>
                </div>


            </div>

            <div className="card-container bg-color_bg bg-opacity-75 shadow-md  mt-5">
                <h1 className="text-4xl text-color text-color_vinho font-bold p-20 ml-4 ">
                    Compras no APP
                </h1>

                <div className="flex flex-col">
                    <div className="flex justify-center items-center">
                        <img className="rounded-3xl" src="/Public/Buy.jpg" alt="" />
                    </div>
                    <div className="flex flex-row justify-center p-10 gap-32">
                        <h2 className="font-bold">Produto XX</h2>
                        <p className="font-medium">Marca</p>
                        <p className="font-bold">R$ 00,00</p>
                    </div>

                    <div className="flex justify-center items-center text-justify">

                        <p>
                            <span className="font-bold text-xl">Descrição: </span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
                            Fuga itaque error ipsam. Sequi doloribus, enim harum, velit illo consequuntur<br></br>
                            ullam quibusdam at quod odio fugit possimus asperiores vel quis corporis!
                        </p>
                    </div>

                </div>
                <div className="w-full flex flex-row justify-center mt-28 ">
                    <button
                        type="submit"
                        className="bg-color_vinho  text-color_bg py-2 rounded-xl w-60 mb-10 text-center font-semibold ">
                        Saber Mais
                    </button>
                </div>
            </div>

            <div className="px-4 md:px-10 h-full w-full p-10 mb-10 ">
                <h1 className="text-4xl font-bold text-color_bg p-10 ml-4 mb-10">Chat Box</h1>
                <div className="bg-color_bg bg-opacity-75 p-8 rounded-xl shadow-md w-auto flex flex-col justify-start">
                    <img className="w-20" src="/Public/Logo.png" alt="" />
                    <div className="ml-10 bg-color_bg p-8 rounded-lg shadow-md h-16 w-96 flex items-center mt-5 mb-4">
                        <h1>Ola</h1>
                    </div>
                    <div className="ml-10 bg-color_bg p-8 rounded-lg shadow-md h-16 w-96 flex items-center  mb-4">
                        <h1>Me diga seu Nome / Sua Idade / Seu Peso</h1>
                    </div>

                    <div className="flex justify-end ">
                        <div className="mr-10 bg-color_bg p-8 rounded-lg shadow-md h-16 w-96 flex items-center">
                            <h1>lorem...</h1>
                        </div>
                        <img className="w-18 h-15 " src="/Public/Pessoa.png" alt="" />
                    </div>

                    <img className="w-20" src="/Public/Logo.png" alt="" />
                    <div className="ml-10 bg-color_bg p-8 rounded-lg shadow-md h-16 w-96 flex items-center mt-4">
                        <h1>Lorem ...</h1>
                    </div>

                    <div className="flex justify-end ">
                        <div className="mr-10 bg-color_bg p-8 rounded-lg shadow-md h-16 w-96 flex items-center">
                            <h1>lorem...</h1>
                        </div>
                        <img className="w-18 h-15 " src="/Public/Pessoa.png" alt="" />
                    </div>

                    <div className="bg-color_bg p-8 rounded-lg shadow-md w-full flex justify-center items-center mt-8">
                        <FaKeyboard className="text-3xl mr-3 text-color_vinho" />
                        <h1 className="text-color_vinho font-bold">Digite aqui sua resposta</h1>
                    </div>
                </div>



                <div className="w-full flex flex-row justify-center mt-28 ">

                    <button
                        type="submit"
                        className="bg-color_bg  text-color_vinho py-2 rounded-xl w-60 mb-10 text-center font-bold ">
                        Saber Mais
                    </button>
                </div>
            </div>
            <Footer />
        </div>




    )
}
export default Home
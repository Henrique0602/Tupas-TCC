import Header from "../Componentes/Header/Header";
import Footer from "../Componentes/Footer/Footer";
import CardsSlider from "../Componentes/CardsSlider/CardsSlider";

function Home() {
    return (
        <>
            <div className="min-h-screen bg-Fundo bg-cover">
                <Header />
                <div className="bg-color_bg rounded-lg flex flex-row my-16 mx-16">
                    <div className="flex flex-col">
                        <h2 className="text-color_vinho font-bold text-lg p-10">Bem - vindo</h2>
                        <h1 className="text-color_vinho font-bold text-4xl text-wrap max-w-sm ml-10 mb-4">Seu guia para o sucesso fisíco e mental.</h1>
                        <p className="text-color_vinho text-wrap max-w-72 ml-10"> 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus provident corporis sapiente saepe,
                            amet delectus eligendi similique beatae deserunt? Maxime, sapiente omnis? Doloremque cum ea deserunt ad?
                            Sunt, repellat perspiciatis!
                        </p>
                    </div>
                    <CardsSlider/>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Home

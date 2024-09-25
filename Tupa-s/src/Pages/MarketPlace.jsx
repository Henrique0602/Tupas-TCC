import Header from "../Componentes/Header/Header";
import '../../styles/output.css';
import '../../styles/style.css';



const products = [
    {
        name: "Hamburguer Smash",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 18.90,
        image: "../../assets/hamb-1.png"
    },
    {
        name: "Hamburguer Duplo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 32.90,
        image: "../../assets/hamb-2.png"
    },
    {
        name: "Hamburguer Salada",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 25.50,
        image: "../../assets/hamb-3.png"
    },
    {
        name: "Hamburguer Fish",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 30.50,
        image: "../../assets/hamb-4.png"
    },
    {
        name: "Hamburguer Triplo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 40.00,
        image: "../../assets/hamb-5.png"
    },
    {
        name: "Hamburguer Da Casa",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 35.90,
        image: "../../assets/hamb-6.png"
    },
    {
        name: "Hamburguer Onion",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 35.90,
        image: "../../assets/hamb-7.png"
    },
    {
        name: "Hamburguer Vegetariano",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 40.00,
        image: "../../assets/hamb-8.png"
    },
];

export default function MarketPlace() {
    return (
        <div>
            {/* Header */}
            <Header />

            <h2 className="text-xl md:text-2xl font-bold text-center mt-5 mb-4 text-gray-800 hover:text-green-600 transition-colors">
                Conheça o nosso Cardápio
            </h2>



            {/* Menu */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-15">
                {products.map((product, index) => (
                    <div className="flex gap-2" key={index}>
                        <img src={product.image} alt={product.name} className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                        <div>
                            <p className="font-bold">{product.name}</p>
                            <p className="text-sm">{product.description}</p>
                            <div className="flex items-center gap-2 justify-between mt-3">
                                <p className="font-bold text-lg">R${product.price.toFixed(2)}</p>
                                <button className="bg-gray-900 px-5 rounded add-to-cart-btn">
                                    <i className="fa fa-cart-plus text-lg text-white mt-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Footer */}
            <footer className="w-full bg-red-500 py-2 fixed bottom-0 z-40 flex items-center justify-center">
                <button className="flex items-center gap-2 text-white font-bold">
                    (<span id="cart-count">0</span>) Veja meu carrinho
                    <i className="fa fa-cart-plus text-lg text-white"></i>
                </button>
            </footer>
        </div>
    );
}

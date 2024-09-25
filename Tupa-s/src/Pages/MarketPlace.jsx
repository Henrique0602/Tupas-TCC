import { useState, useEffect } from "react";
import Header from "../Componentes/Header/Header";
import '../../styles/output.css';
import '../../styles/style.css';
import 'toastify-js/src/toastify.css';
import whey1 from '../../assets/WheyPure.png';
import whey2 from '../../assets/whey2.png';
import Creatina from '../../assets/Creatina.png';
import Glutamina from '../../assets/Glutamina-removebg-preview.png';
import Creme from '../../assets/Creme-removebg-preview.png';
import Pomada from '../../assets/Pomada.png';
import Alivium from '../../assets/Alivium.png';
import Gel from '../../assets/Gel-de-Limpeza-GL-01-Principia---350g-removebg-preview.png';

const products = [
    {
        name: "Whey Protein Concentrado 900g",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit! ",
        price: 146.19,
        image: whey1
    },
    {
        name: "Whey Protein Concentrado Pouch 900g",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit! ",
        price: 137.13,
        image: whey2
    },
    {
        name: "Creatina 100% Pura 300g",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 111.92,
        image: Creatina
    },
    {
        name: "Glutamina 300g em pó",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 71.32,
        image: Glutamina
    },
    {
        name: "Creme Hidratante Masculino  Nivea Men 30g",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 20.00,
        image: Creme
    },
    {
        name: "QOD Barber Shop Pomada Capilar Walk",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 30.00,
        image: Pomada
    },
    {
        name: "Alivium Ibuprofeno 400mg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 7.00,
        image: Alivium
    },
    {
        name: "Gel de limpeza Facil",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
        price: 45.00,
        image: Gel
    }
];

export default function MarketPlace() {
    const [cart, setCart] = useState([]);
    const [cartModalVisible, setCartModalVisible] = useState(false);
    const [address, setAddress] = useState('');
    const [addressWarning, setAddressWarning] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);

    // Recalcular o total do carrinho sempre que o carrinho mudar
    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        setCartTotal(total);
    }, [cart]);



    const addToCart = (name, price) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.name === name);

            if (existingItem) {
                return prevCart.map(item =>
                    item.name === name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { name, price, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (name) => {
        setCart((prevCart) => {
            const item = prevCart.find(item => item.name === name);
            if (item.quantity > 1) {
                return prevCart.map(item =>
                    item.name === name ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return prevCart.filter(item => item.name !== name);
        });
    };

    const handleCheckout = () => {
      

        if (cart.length === 0 || address === '') {
            setAddressWarning(true);
            return;
        }

        const cartItems = cart.map(item => `
            Nome: ${item.name} 
            Quantidade: ${item.quantity} 
            Preço: R$ ${item.price.toFixed(2)}
        `).join('');

        const message = encodeURIComponent(cartItems + ` Endereço: ${address}`);
        const phone = '5511995750602';
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

        setCart([]);
    };


    // Função para alternar a visibilidade do modal
    const toggleModal = () => {
        setCartModalVisible(!cartModalVisible);
    };

    return (
        <div>
            {/* Header */}
            <Header />

            <h2 className="text-xl md:text-2xl font-bold text-center mt-5 mb-4 text-gray-800 hover:text-green-600 transition-colors">
                Nossa Loja 
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
                                <button 
                                    className="bg-gray-900 px-5 rounded add-to-cart-btn"
                                    onClick={() => addToCart(product.name, product.price)}
                                >
                                    <i className="fa fa-cart-plus text-lg text-white mt-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Modal do Carrinho */}
            {cartModalVisible && (
                <div className="bg-black/65 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
                    <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
                        <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
                        <div id="cart-items" className="flex justify-between mb-2 flex-col">
                            {cart.map(item => (
                                <div key={item.name} className="flex justify-between mb-4 flex-col">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                            <p>Qtd: {item.quantity}</p>
                                            <p className="font-medium mt-2">R$ {item.price.toFixed(2)}</p>
                                        </div>
                                        <button className="remove-from-cart-btn" onClick={() => removeFromCart(item.name)}>
                                            Remover
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold">Total: <span>{cartTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
                        <p className="font-bold mt-4">Endereço de Entrega:</p>
                        <input
                            type="text"
                            placeholder="Digite seu endereço completo..."
                            className={`w-full border-2 p-1 rounded my-1 mt-2 ${addressWarning ? 'border-red-500' : ''}`}
                            value={address}
                            onChange={e => { setAddress(e.target.value); setAddressWarning(false); }}
                        />
                        {addressWarning && <p className="text-red-600">Digite seu endereço correto</p>}
                        <div className="flex items-center justify-between mt-5 w-full">
                            <button onClick={() => setCartModalVisible(false)}>Fechar</button>
                            <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-1 rounded">Finalizar Pedido</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="w-full bg-red-500 py-2 fixed bottom-0 z-40 flex items-center justify-center">
                <button className="flex items-center gap-2 text-white font-bold" onClick={toggleModal}>
                    ({cart.length}) Veja meu carrinho
                    <i className="fa fa-cart-plus text-lg text-white"></i>
                </button>
            </footer>
        </div>
    );
}

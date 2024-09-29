import React, { useState, useEffect } from 'react'; 
import Header from '../Componentes/Header'; 
import ListaProdutos from '../Componentes/ListaProdutos'; 
import CartModal from '../Componentes/CartModal'; 
import FooterMkP from '../Componentes/FooterMarketPlace'; 
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

    const toggleModal = () => {
        setCartModalVisible(!cartModalVisible);
    };

    return (
        <div>
            <Header />
            <h2 className="text-xl md:text-2xl font-bold text-center mt-5 mb-4 text-gray-800 hover:text-green-600 transition-colors">
                Nossa Loja 
            </h2>

            <ListaProdutos products={products} addToCart={addToCart} />

            {cartModalVisible && (
                <CartModal 
                    cart={cart} 
                    cartTotal={cartTotal}
                    address={address}
                    setAddress={setAddress}
                    addressWarning={addressWarning}
                    handleCheckout={handleCheckout}
                    setCartModalVisible={setCartModalVisible}
                    removeFromCart={removeFromCart}
                />
            )}

            <FooterMkP cartLength={cart.length} toggleModal={toggleModal} />
        </div>
    );
}

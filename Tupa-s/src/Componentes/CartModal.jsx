function CartModal ({ cart, cartTotal, address, setAddress, addressWarning, handleCheckout, setCartModalVisible, removeFromCart }) {
    return (
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
                    onChange={e => setAddress(e.target.value)}
                />
                {addressWarning && <p className="text-red-600">Digite seu endereço correto</p>}
                <div className="flex items-center justify-between mt-5 w-full">
                    <button onClick={() => setCartModalVisible(false)}>Fechar</button>
                    <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-1 rounded">Finalizar Pedido</button>
                </div>
            </div>
        </div>
    );
};
export default CartModal
function ItemProduto ({ product, addToCart }) {
    return (
        <div className="flex gap-2">
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
    );
};
export default ItemProduto
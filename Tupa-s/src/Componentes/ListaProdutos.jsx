import ItemProduto from "./ItemProduto";

function ListaProdutos({ products, addToCart }) {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-15">
            {products.map((product, index) => (
                <ItemProduto key={index} product={product} addToCart={addToCart} />
            ))}
        </main>
    );
};
export default ListaProdutos;
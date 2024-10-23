function FooterMkP ({ cartLength, toggleModal }) {
    return (
        <footer className="w-full bg-green-500 py-2 fixed bottom-0 z-40 flex items-center justify-center">
            <button className="flex items-center gap-2 text-white font-bold" onClick={toggleModal}>
                ({cartLength}) Veja meu carrinho
                <i className="fa fa-cart-plus text-lg text-white"></i>
            </button>
        </footer>
    );
};
export default FooterMkP
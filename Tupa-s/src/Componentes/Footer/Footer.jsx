function Footer(){
    return(
        <footer className=" bg-color_bg text-color_branco p-3 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
            <h1 className="text-6xl mt-3 mb-3 ml-3 mr-8 text-color_vinho font-medium tracking-widest">Tupã's</h1>
            <div className="flex flex-col font-medium text-color_preto text-xs space-y-2 ">
                <h2>Aspectos Legais e Privacidade</h2>
                <h2>Politíca de Privacidade</h2>
            </div>
            </div>
            <div className="flex flex-row">
                <ul className="flex flex-row space-x-4">
                    <li><img src="insta_footer.png"></img></li>
                    <li><img src="face_footer.png"></img></li>
                    <li><img src="ttk_footer.png"></img></li>
                    <li><img src="twt_footer.png"></img></li>
                </ul>
               
            </div>
        </footer>
    )
}
export default Footer
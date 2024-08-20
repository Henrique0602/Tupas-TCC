export default function CardsSlider() {
    return (
        <div className="py-10 ml-20">
            <div className="container w-[600px] flex justify-center ml-52" >
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div className="row">                       
                        <div className="description"></div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">                       
                        <div className="description"></div>
                    </div>
                    
                </label>
                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="description"></div> 
                    </div>

                </label>
                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card">
                    <div className="row">
                        <div className="description"></div>
                    </div>
                </label>

            </div>
        </div>
    );
}
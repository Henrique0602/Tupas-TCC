export default function CardsSlider() {
    return (
        <div className="wrapper">
            <div className="container w-[600px] flex justify-center" >
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
               
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                 
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                          
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card">
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}
const HeroSection =  () => {
    return (
        <main className="hero container">
            <div className="hero-content"> 
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES </p>

                <div className="hero-btn">
                <button >Shop Now</button>
                <button className="secondary-btn">Category</button>
             </div>

             <div className="Shopping">
                <p>Also Available on</p>

                <div className="icons">
                    <img src="/images/flipkart.png" alt="flipkartlogo" />
                    <img src="/images/amazon.png"  alt="amazonlogo" />
                </div>

            </div>
             </div>
             <div className="hero-img">
             <img src="/images/hero-image.png" alt="heroimglogo" />
                 </div>
        </main>
    );

};

export default HeroSection;

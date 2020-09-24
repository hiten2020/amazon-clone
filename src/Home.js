import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home" >
             <div className="home__container">
                <img className="home__image" src="https://i.ibb.co/7ktf9bT/1500x600-Hero-Tall-np-CB404803728.jpg" alt="1500x600-Hero-Tall-np-CB404803728" border="0"/>
             {/* </div> */}

             <div className="home__row">
                 <Product 
                 id="757576"
                 title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                 price={29.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
                 rating={5} />
                <Product 
                 id="999999"
                 title="HONOR Band 5 (MidnightNavy)- Waterproof Full Color AMOLED"
                 price={49.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/810jwmTfQML._SL1500_.jpg"
                 rating={4} />
                 
             </div>
             <div className="home__row">
             <Product 
                id="4908976"
                 title="LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor"
                 price={199.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/81U4T6K5wQL._SL1500_.jpg"
                 rating={3} />
               
                <Product 
                 id="555555"
                 title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                 price={98.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/61XclfIKcbL._SL1000_.jpg"
                 rating={5} />
                 
                 <Product 
                 id="6666666"
                 title="Apple iPad Mini (Wi-Fi + Cellular, 64GB) - Space Grey"
                 price={589.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/81h-QuXax6L._SL1500_.jpg"
                 rating={4} />
             </div>
             <div className="home__row">
                <Product 
                 id="7777777"
                 title="Energie Fitness Imported EHT 001 Home use 1.25 HP"
                 price={399.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/31KXdGG-NwL.jpg"
                 rating={5} />
             </div>
            </div>
        </div>
    )
}

export default Home

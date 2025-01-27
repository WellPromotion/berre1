import React from 'react';
import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import Nav from "../Components/Nav/Nav";

export default function Thank() {

    const headData = {
        title : "Thank You - Berre namještaj",
        meta : ""
    }

  return (
  <>
    <HeadTags headData={headData}/>
    <Nav current=""/>

    <section className="section __account sec__home">
        <img src="https://shop.berre.ba/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
            <div className="account__placeholder">
                <div className="account__wrap">
                    <h1><span>Hvala ti</span> - Za vašu kupovinu</h1>
                    <p>Hvala vam što koristite Berre namještaj, a e-mail sa sažetkom narudžbe bit će poslan uskoro!</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </>
  );
}

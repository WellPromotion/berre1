import React from 'react';
import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import Nav from "../Components/Nav/Nav";

export default function AccountPage() {

    const headData = {
        title : "Odjeljak za račune - Berre namještaj",
        meta : ""
    }

    // image : seoData.seoImage.sourceUrl

  return (
  <>
    <HeadTags headData={headData}/>
    <Nav current="account"/>

    <section className="section __account sec__home">
        <img src="https://shop.berre.ba/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
            <div className="account__placeholder">
                <div className="account__wrap">
                    <h1><span>Odjeljak za račune</span> - Uskoro dolazi</h1>
                    <p>Uskoro stiže poseban odjeljak računa za veletrgovce i druge poslovne partnere!</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </>
  );
}

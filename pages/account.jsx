import React from 'react';
import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import Nav from "../Components/Nav/Nav";

export default function AccountPage() {

    const headData = {
        title : "Account Section - Berre Furniture",
        meta : ""
    }

    // image : seoData.seoImage.sourceUrl

  return (
  <>
    <HeadTags headData={headData}/>
    <Nav current="account"/>

    <section className="section __account sec__home">
        <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
            <div className="account__placeholder">
                <div className="account__wrap">
                    <h1><span>Account Section</span> - Coming Soon</h1>
                    <p>A seperate account section for wholesalers and other business partners will be arriving soon!</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </>
  );
}

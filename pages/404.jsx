import React from 'react';
import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import Nav from "../Components/Nav/Nav";

const Custom404 = () => {

    const headData = {
        title : "404 - Berre Furniture",
        meta : ""
    }

  return (
  <>
    <HeadTags headData={headData}/>
    <Nav current=""/>

    <section className="section __account sec__home">
        <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
            <div className="account__placeholder">
                <div className="account__wrap">
                    <h1><span>404</span> - Page not found</h1>
                    <p>We can't find the page you were looking for, please use the links at the top of the page to return to the site!</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </>
  );
}

export default Custom404
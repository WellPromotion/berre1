import React from 'react';
import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import Nav from "../Components/Nav/Nav";

const CustomError = () => {

    const headData = {
        title : "Error - Berre Furniture",
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
                    <h1><span>Error</span></h1>
                    <p>An error has occured, we apologise for the inconvenience</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </>
  );
}

export default CustomError
import React from 'react';
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Global/Footer';
import HeadTags from '../Components/Global/HeadTags'
import CartPage from '../Components/Cart/CartPage';

export default function Cart() {

    const headData = {
        title : "Cart - Berre Furniture",
        meta : ""
    }

  return (
  <>
    <HeadTags headData={headData}/>
    <Nav current="cart"/>
        <section className="section sec__cart">
            <div className="container">
                <CartPage/>
            </div>
        </section>
    <Footer/>
  </>
  );
}

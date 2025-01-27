import React from 'react';
import Footer from '../Components/Global/Footer';
import HeadTags from '../Components/Global/HeadTags';
import Nav from '../Components/Nav/Nav';
import { AppContext } from "../Components/Context/AppContext";
import { useState, useContext, useEffect } from 'react';
import UPDATE_CART from '../mutations/update-cart';
import { useMutation } from "@apollo/client";
import CartItems from '../Components/Cart/CartItems';
import PaymentMethods from '../Components/Checkout/PaymentMethods';
import Billing from '../Components/Checkout/Billing';
import CHECKOUT_MUTATION from '../mutations/checkout';
import { v4 } from 'uuid';
import Link from 'next/link'
import Success from '../Components/Checkout/Success';

export default function Checkout() {

    const headData = {
        title : "Provjeri - Berre namještaj",
        meta : ""
    }

    // INITIAL CUSTOMER DATA

    const initialState = {
		firstName: '',
		lastName: '',
		company: '',
		country: '',
		address1: '',
		address2: '',
		city: '',
		state: 'N/A',
		postcode: '',
		phone: '',
		email: '',
	}

    const [ cart, setCart, refetch ] = useContext( AppContext );
	const [ input, setInput ] = useState( initialState );
    const [ orderData, setOrderData ] = useState( null );
    const [ error, setError ] = useState("");

    const handleOnChange = ( event ) => {

        const newState = { ...input, [event.target.name]: event.target.value };
        setInput( newState );

	};

    // console.log("CART", cart)

    // RELATED TO CART

    const productsCount = (null != cart && Object.keys(cart).length) ? cart.totalProductsCount : '';

    // UPDATE CART

	const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation( UPDATE_CART, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
                
				console.log("ERROR", error)
			}
		}
	} );

	// HANDLE REMOVE

	const handleRemoveProductClick = ( event, cartKey, products ) => {

		event.stopPropagation();
		if ( products.length ) {

			const newQty = 0;
			const updatedItems = getUpdatedItems( products, newQty, cartKey );

			updateCart( {
				variables: {
					input: {
						clientMutationId: v4(),
						items: updatedItems
					}
				},
			} );
		}
	};

    // CHECKOUT MUTATION

	const [ checkout, { data: checkoutResponse, loading: checkoutLoading, error: checkoutError } ] = useMutation( CHECKOUT_MUTATION, {
		variables: {
			input: {
                clientMutationId: v4(),
                billing: orderData,
                paymentMethod: "cod"
            }
		},
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				console.log("ERROR", error)
                setError("Došlo je do greške, molimo provjerite informacije koje ste dali")
			}
		}
	} );

    // CHECKOUT CODE

    const handleFormSubmit = ( event ) => {
		event.preventDefault();

        if(input.paymentMethod === ""){
            setError("Please input a payment method")
        } else{
            // setError("")
            // console.log("INPUT", input)
            setOrderData(input)
        }
	};

    useEffect( () => {

		if ( null !== orderData ) {
            // console.log(orderData)
			checkout();
		}

	}, [ orderData ] );

    


    console.log("CHECKOUT RESPONSE", checkoutResponse)

  return (
    <>
        <HeadTags headData={headData}/>
        <Nav current="cart"/>
        {
        checkoutResponse === undefined ?
        <section className="section checkout__main">
            <div className="container">
                <h1><span>Naplata</span> - obavite kupovinu</h1>


                <form onSubmit={ handleFormSubmit } className="checkout__form">
                <div className="columns">

                    <div className="column is-6">

                        <h3>Vaše informacije:</h3>

                        <Billing input={ input } handleOnChange={ handleOnChange } />

                    </div>

                    <div className="column is-6">
                        {/* CART */}
                        {
                          cart && undefined !== cart.products ? (

                            <div className="checkout__payment">
                                <h3>Vaša narudžba:</h3>
                                <h4>Cart - <span>{productsCount} predmeti </span></h4>
                                <div className="divider"></div>

                                <div className="cart__item__wrapper">
                                    <div className="cart__item__wrap">
                                        {cart.products.length && (
                                            cart.products.map(item => (
                                                <CartItems
                                                    key={item.productId}
                                                    item={item}
                                                    updateCartProcessing={ updateCartProcessing }
                                                    products={ cart.products }
                                                    handleRemoveProductClick={ handleRemoveProductClick }
                                                    updateCart={ updateCart }
                                                />
                                            ))
                                        )}
                                    </div>
                                </div>

                                <div className="cart__text__sum">
                                    <div className="__flex-price">
                                        <p>Popust:</p>
                                        <p><b>{cart.discountTotal}</b></p>
                                    </div>
                                    <div className="__flex-price __last">
                                        <p>Dostava:</p>
                                        <p><b>{cart.shippingTotal}</b></p>
                                    </div>
                                    <div className="__flex-price __last">
                                        <p>Ukupan iznos:</p>
                                        <p><b>{cart.totalProductsPrice}</b></p>
                                    </div>
                                </div>
                            </div>
                          ):""
                        }

                        {/* PAYMENT */}
                        <div className="checkout__payment __nf">
                            <h3>Način plaćanja:</h3>
                            <PaymentMethods input={ input }/>
                        </div>

                        {/* FINISH */}

                        {
                            error !== "" ?
                            <div className="checkout__error">
                                <p>{error}</p>
                            </div>
                            : ""
                        }
                        
                        
                        <button className="button check__out" type="submit"> Završi kupovinu</button>

                        {/* TERMS */}
                        <p className="check__terms">Klikom na "Završi kupovinu" slažete se s našim <Link href="/odredbe-i-uslovi"><a>Odredbe i uslovi</a></Link>, i naše <Link href="/uslovi-isporuke"><a>Uslovi isporuke</a></Link> .</p>

                        {/* {checkoutLoading && <p>Processing Order...</p>}
						{checkoutError && <p>An Error has occured</p>} */}
                    </div>

                </div>
                </form>

            </div>
        </section>
        : ""
        }
        

        {/* ORDER SUCCESS */}
        <Success response={ checkoutResponse }/>

        <Footer/>
    </>
  );
}

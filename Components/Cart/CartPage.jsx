import {useContext, useState, useEffect } from 'react';
import {AppContext} from "../Context/AppContext";
import { getUpdatedItems } from '../../functions';
import Link from 'next/link';
import { v4 } from 'uuid';
import { useMutation } from "@apollo/client";
import UPDATE_CART from "../../mutations/update-cart";
import ADD_COUPON from "../../mutations/add-coupon";
import CartItems from './CartItems';


const CartPage = () => {

    const [ cart, setCart, refetch ] = useContext( AppContext );
	const [requestError, setRequestError] = useState( null );

    const productsCount = (null != cart && Object.keys(cart).length) ? cart.totalProductsCount : '';

    // console.log("CART", cart)


	// Update Cart Mutation.
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

	// Handle remove product click.
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

	//COUPON
	const initialState = {
		clientMutationId: v4(),
  	};

	const [ input, setInput ] = useState( initialState );
	const [ couponData, setCouponData ] = useState( null );
	const [ success, setSuccess ] = useState( 0 );

	const handleOnChange = ( event ) => {
        const newState = { ...input,  "code": event.target.value };
        setInput( newState );
    };

	const [ addCoupon, {  data: couponRes, loading: couponLoad, error: couponError } ] = useMutation( ADD_COUPON, {
		variables: {
		  input: couponData
		},
		onCompleted: () => {
		  refetch()
		  setSuccess(1)
		},
        onError: ( error ) => {
            console.log("ERROR", error)
            setSuccess(2)
        }
	});
      
	const handleFormSubmit = ( event ) => {
		event.preventDefault();
		setCouponData(input)
	};

	useEffect( () => {

        if ( null !== couponData ) {
         addCoupon()
        }
    
      }, [ couponData ] );

	  if(success !== 0){
		setTimeout(function () {
            setSuccess(0)
        }, 5000);
	}


    return(
        <>
            {cart ? <>
            <div className="__new-cart-wrap"><div className="__new-cart columns is-gapless">

                {/* CART SUMMARY */}

                <div className="column is-8 __first-col">
                    <div className="new-cart__cart">
                        <h1>Cart - <span>{productsCount} Predmeti </span></h1>
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
                            
                            { requestError ? <div className="error"> { requestError } </div> : '' }
                            
                        </div>
                    </div>

                    {/* SHIPPING */}

                    <div className="new-cart__cart">
                        <h1 className="two__v">Dostava</h1>
                        {/* <div className="divider"></div> */}

                        <p className="new-cart__shipping">U Berre namještaja želimo da naši kupci uvijek imaju ugodno iskustvo. Molimo da se upoznate sa politikom povrata i zamjene prije nego što završite narudžbu.</p>
                        <Link href="/uslovi-isporuke"><a><p className="new-cart__shipping"><b>Za više informacija molimo <span>Kliknite ovdje</span></b></p></a></Link>
                    </div>

                    {/* PAYMENTS */}

                    <div className="new-cart__cart">
                        <h1 className="two__v">Mogućnosti plaćanja</h1>
                        <div className="payment-options-uni">
                            <img src="/mastercard.png" alt="" style={{backgroundColor: "#fff", padding: "0.1rem"}}/>
                            <img src="/visa.png" alt=""/>
                            <img src="/paypal.png" alt="" style={{backgroundColor: "#fff", padding: "0.1rem"}}/>
                            <img src="/maestro.png" alt="" style={{backgroundColor: "#fff", padding: "0.1rem"}}/>
                        </div>
                    </div>
                </div>

                {/* LEFT */}

                <div className="column is-4 __first-col">

                    {/* TOTAL */}

                    <div className="new-cart__cart">
                        <h1 className="two__v">Ukupno</h1>
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
                        <div className="__divider-two"></div>
                        <Link href="/checkout"><button className="button button-white">Idi na naplatu</button></Link>
                    </div>

                    {/* COUPONS */}

                    <div className="new-cart__cart">
                        <h1 className="one__v">Kupon <span>(Opciono)</span></h1>
                        {/* <div className="divider"></div> */}

                        <form className="coupons" onSubmit={ handleFormSubmit } >
                            <h3>Unesite kod:</h3>
                            <div className="coupon">
                                <input type="text" className="input" onChange={handleOnChange}/>
                                <input type="submit" className="input__button" value="OK"/>
                            </div>
                            
                        </form>
                        {
                            success === 1 ?
                            <div className="coupons-succ has-text-centered">
                                <p>Kupon je dodan u vašu korpu</p>
                            </div>
                            :
                            success === 2 ?
                            <div className="coupons-succ alt has-text-centered">
                                <p>Kôd kupona nije tačan</p>
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>
            </div></div>

            </>
            
            : 
            <>
                <h1>Vaša korpa</h1>
                <div className="divider"></div>
                <div className="has-text-centered cart__empty">
                        <h3 className="has-text-centered">Vaša korpa je prazna, dodajte neke proizvode u nju da nastavite!</h3>
                        <Link href="/proizvodi"><button className="has-text-centered button">Idi u prodavnicu</button></Link>
                </div>
            </>
            
        }

        </>
    )
    
};

export default CartPage
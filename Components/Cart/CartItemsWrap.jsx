import {useContext} from 'react';
import {AppContext} from "../Context/AppContext";
import { getUpdatedItems} from '../../functions';
import { v4 } from 'uuid';
import { useMutation } from "@apollo/client";
import UPDATE_CART from "../../mutations/update-cart";
import CartItems from './CartItems';


const CartItemsWrap = () => {

    const [ cart, setCart, refetch ] = useContext( AppContext );

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

    return(
        <>
            {cart && undefined !== cart.products ? (
                <div className="cart__item__wrapper">
                    <div className="cart__item__wrap">
                    
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItems
                                        key={item.cartKey}
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
            ) : <h3 className="cart__empty has-text-centered">Your Cart is empty</h3>}
        </>
    )
};

export default CartItemsWrap
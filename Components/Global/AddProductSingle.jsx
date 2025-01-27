import { useMutation } from "@apollo/client";
import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import { v4 } from 'uuid';
import ADD_TO_CART from "../../mutations/add-to-cart";

const AddProductSingle = (props) => {

	const { product, variable } = props;
	
	function getIndex(value, arr, prop) {
		if(undefined !== arr){
			for(var i = 0; i < arr.length; i++) {
				if(arr[i][prop] === value) {
					return i;
				}
			}
			return -1;
		} else {
			return -1;
		}
	}
		
    const productQryInput = variable === undefined ?
	{
		clientMutationId: v4(),
		productId: product.databaseId,
    }
	:
	{
		clientMutationId: v4(),
		productId: variable,
    }
	;
	
    const [ cart, setCart, refetch ] = useContext( AppContext );
	const [ index, setIndex ] = useState(null !== cart ? getIndex(product.id, cart.products, 'productId') : 0);

    const [ addToCart, { data: addToCartRes, loading: addToCartLoading, error: addToCartError }] = useMutation( ADD_TO_CART, {
		variables: {
			input: productQryInput,
		},
		onCompleted: () => {
			console.log("CART RES", addToCartRes)
			refetch();
			setIndex(getIndex(product.id, cart.products, 'productId'))
		},

		onError: ( error ) => {
			if ( error ) {
				// localStorage.removeItem('berre-cart')
				// setCart('')
				console.log("error add", error)
			}
		}
    } );

    return(
        <React.Fragment>
            <button className="button product-single__cart" onClick={ () => addToCart() }> <img src="/cart.svg" alt="" /> Dodaj u korpu</button>
        </React.Fragment>
	)
 };

export default AddProductSingle;

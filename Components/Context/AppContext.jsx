import React, { useState, useEffect } from 'react';
import GET_CART from '../../queries/get-cart';
import { useQuery } from "@apollo/client";
import { getFormattedCart} from '../../functions';


export const AppContext = React.createContext( [
    {},
    () => {}
] );

export const AppProvider = ( props ) => {
    const [ cart, setCart ] = useState( process.browser ? null !== localStorage.getItem( 'berre-cart' ) ? JSON.parse( localStorage.getItem( 'berre-cart' ) ) : '' : '' );
    // useEffect( () => {
    //     if ( process.browser ) {
    //         let cartData = localStorage.getItem( 'berre-cart' );
    //         cartData = null !== cartData ? JSON.parse( cartData ) : '';
    //         setCart( cartData );
    //     }
    // }, [] );

    const { loading, error, data, refetch } = useQuery( GET_CART, {
    notifyOnNetworkStatusChange: true,
		onCompleted: () => {
            // console.log("CART DATA", data)
			const updatedCart = getFormattedCart( data );
			localStorage.setItem( 'berre-cart', JSON.stringify( updatedCart ) );
			setCart( updatedCart );
		},
		onError: ( error ) => {
			if ( error ) {
				console.log(error)
				localStorage.removeItem('berre-cart')
				localStorage.removeItem('berre-session')
				setCart('')
			}
		}
	} );

    // console.log("CART APPCONTEXT", cart)

    return (
        <AppContext.Provider value={[ cart, setCart, refetch ]}>
            { props.children}
        </AppContext.Provider>
    )
}
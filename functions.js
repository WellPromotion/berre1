export const getFloatVal = ( string ) => {

	let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
	return ( null !== floatValue ) ? parseFloat( parseFloat( floatValue ).toFixed( 2 ) ) : '';

};

// Number(products[0].price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0])

export const getFormattedCart = ( data ) => {

	let formattedCart = null;

	if ( undefined === data || ! data.cart.contents.nodes.length ) {
		return formattedCart;
	}

	const givenProducts = data.cart.contents.nodes;

	// Create an empty object.
	formattedCart = {};
	formattedCart.products = [];
	let totalProductsCount = 0;

	for( let i = 0; i < givenProducts.length; i++  ) {
		const givenProduct = givenProducts[ i ].product.node;
		const product = {};
		const total = Number(givenProducts[ i ].subtotal.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0]);

		product.productId = givenProduct.id;
		product.databaseId = givenProduct.databaseId
		product.cartKey = givenProducts[ i ].key;
		product.name = data.cart.contents.nodes[i].product.simpleVariations.length ? givenProduct.name + " " + data.cart.contents.nodes[i].product.simpleVariations[0].value : givenProduct.name;
		product.qty = givenProducts[ i ].quantity;
		product.price = total / product.qty;
		product.totalPrice = givenProducts[ i ].subtotal;
		product.image = null !== givenProduct.image ? givenProduct.image.sourceUrl : "/placeholder.jpg";

		totalProductsCount += givenProducts[ i ].quantity;

		// Push each item into the products array.
		formattedCart.products.push( product );
	}

	formattedCart.discountTotal = data.cart.discountTotal;
	formattedCart.shippingTotal = data.cart.shippingTotal;
	formattedCart.totalProductsCount = totalProductsCount;
	formattedCart.subProductsPrice = data.cart.subtotal;
	formattedCart.totalProductsPrice = data.cart.total;
	formattedCart.coupons = data.cart.appliedCoupons;

	return formattedCart;

};

export const getUpdatedItems = ( products, newQty, cartKey ) => {

	const updatedItems = [];

	products.map( ( cartItem ) => {

		if ( cartItem.cartKey === cartKey ) {			
			updatedItems.push( {
				key: cartItem.cartKey,
				quantity: parseInt( newQty )
			} );
		} else {
			updatedItems.push( {
				key: cartItem.cartKey,
				quantity: cartItem.qty
			} );
		}
	} );

	return updatedItems;
};

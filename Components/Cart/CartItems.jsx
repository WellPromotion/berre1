import {useState, useEffect} from 'react';
import { v4 } from "uuid";
import { getUpdatedItems } from "../../functions";


const CartItems = ({
                    item, 
                    updateCartProcessing, 
                    handleRemoveProductClick,
                    updateCart,
                    products,
                }) => {

    const[ productCount, setProductCount] = useState(item.qty);


    useEffect( () => {

        setProductCount(item.qty)
    
      }, [ item.qty ] );

    const handleQtyChange = (e, cartKey) => {
        if(process.browser) {

            e.stopPropagation();

            if ( updateCartProcessing ) {
				return;
            }
            
            const newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;

            setProductCount(newQty)

            
			if ( products.length ) {

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

        }
    };

    const handleQtyChangeClick = (newNum, cartKey) => {

            if ( updateCartProcessing ) {
				return;
            }
            
            const newQty = newNum <= 0 ? 1 : newNum;

            setProductCount(newQty)

            
			if ( products.length ) {

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

    // console.log("ITEM", item)

    return(
        <div className="product__cart__wrap">
            <div className="__left">
                <img className="cart__image" src={item.image}/>
                <div className="__info">
                    <h5>{item.name}</h5>
                    <p>{ ( 'string' !== typeof item.price ) ? "$ " + item.price.toFixed( 2 ) : item.price }</p>
                </div>
            </div>
            

            <div className="cart__cancel">
                <button className="close__icon" onClick={(e) => {
                    handleRemoveProductClick(e, item.cartKey, products)
                }}><img src="/x-mark.svg" alt="" /></button>
                <div className="input__wrap">
                    <input 
                    className="input" 
                    min="1"
                    data-cart-key={ item.cartKey }
                    type="number" 
                    value={productCount}
                    onChange={ ( e ) => handleQtyChange( e, item.cartKey ) }
                    />

                    <div className="cont__wrap">
                        <div className="cont plus" onClick={ () => handleQtyChangeClick((productCount + 1), item.cartKey) }></div>
                        <div className="cont min" onClick={ () => handleQtyChangeClick((productCount - 1), item.cartKey) }></div>
                    </div>
                    
                </div>
                
                <p>{ ( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice }</p>
            </div>
        </div>
    )
};


export default CartItems;
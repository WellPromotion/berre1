import {AppContext} from '../Context/AppContext'
import Link from 'next/link'
import React,{ useState, useEffect, useContext} from 'react';
import CartItemsWrap from '../Cart/CartItemsWrap';

const NavCart = (props) => {

    const {current} = props

    const [cart] = useContext(AppContext);
    const productsCount = null !== cart ? cart.totalProductsCount : 0;
    const [cartActive, setCartActive] = useState(0);
    const [firstRender, setFirstRender] = useState(true);
  

    useEffect(() => {
        if(firstRender === true){
            const timer = setTimeout(() => {
            setCartActive(0)
            setFirstRender(false)
            }, 1000);
        } else{
            if(cartActive === 2){
                setCartActive(2)
            } else {
                setCartActive(1)
            }
        } 
    }, [productsCount]);


    if(cartActive === 1){
		setTimeout(function () {
            setCartActive(0)
        }, 5000);
	}

    return (
        <React.Fragment>
        <li className={cartActive === 1 ? " menu__icon menu__cart __active" : " menu__icon menu__cart"}>
            <Link href="/cart"><a className={current === "cart" ? "__uni __alt" : "uni"}>
                <div className="__icon nav__cart">
                    <span>{productsCount}</span>
                </div>
                Cart
            </a></Link> 
            {
                current !== "cart" ?
            <div className="menu__cart__wrap">
                <div className="menu__cart__push">
                    <div className="menu__cart__head">
                        <p className="menu__cart__title">Your cart</p>
                        <button className="close__icon" onClick={cartActive === 0 ? () => setCartActive(1) : () => setCartActive(0)}><img src="/x-mark.svg" alt="" /></button>
                    </div>
                    <div className="menu__cart__body">
                        <CartItemsWrap/>
                    </div>
                    <div className="menu__cart__end">
                        <Link href="/cart"><a> <button className="button">View your cart</button></a></Link>
                    </div>
                </div>
            </div>
                : ""
            }
        
        
        </li>
        </React.Fragment>
    )
};

export default NavCart;
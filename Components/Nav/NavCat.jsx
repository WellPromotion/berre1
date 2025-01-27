import Link from 'next/link'
import React,{ useState, useEffect} from 'react';

const NavCat = (props) => {

    const {current} = props


    return (
        <React.Fragment>
        <li className={current === "cat" ? "active menu__cat" : "menu__cat"}>
            <Link href="/products"><a className="__main">
                Products
            </a></Link>

            <div className="menu__cat__wrap">
                {/* <div className="menu__catt__head">
                    <p className="menu__catt__title">Your cart</p>
                    <button className="close__icon" onClick={cartActive === 0 ? () => setCartActive(1) : () => setCartActive(0)}><img src="/x-mark.svg" alt="" /></button>
                </div> */}
                <div className="menu__cat__body">
                    <div className="__left">
                        <div className="__sub">
                            <h4>Categories</h4>
                            <Link href="/products"><a>All products</a></Link>
                            <Link href="/products/4-seater-sofa"><a>4 Seater Sofas</a></Link>
                            <Link href="/products/love-seat"><a>Love Seat Sofas</a></Link>
                            <Link href="/products/armchair"><a>Armchairs</a></Link>
                            <Link href="/products/sofa-set"><a>Sofa Sets</a></Link>
                            <Link href="/products/home-decor"><a>Home Décor</a></Link>
                        </div>
                        <div className="__sub">
                            <Link href="/products/bed-bedding"><a>Bed & Bedding</a></Link>
                            {/* <Link href="/products/sofa"><a>Sofas</a></Link> */}
                            <Link href="/products/sofa-bed"><a>Sofa Beds</a></Link>
                            <Link href="/products/3-seater-sofa"><a>3 Seater Sofas</a></Link>
                            <Link href="/products/sectional-sofa"><a>Sectional Sofas</a></Link>
                            <Link href="/products/occasional-tables"><a>Occasional Tables</a></Link>
                        </div>
                    </div>
                    <div className="__right">
                        <img src="https://shop.berre.ca/wp-content/uploads/2022/05/bianka-1.png" alt="" />
                    </div>
                </div>
            </div>
        
        
        </li>
        </React.Fragment>
    )
};

export default NavCat;
import Link from 'next/link'
import React,{ useState, useEffect} from 'react';

const NavCat = (props) => {

    const {current} = props


    return (
        <React.Fragment>
        <li className={current === "cat" ? "active menu__cat" : "menu__cat"}>
            <Link href="/proizvodi"><a className="__main">
                Proizvodi
            </a></Link>

            <div className="menu__cat__wrap">
                {/* <div className="menu__catt__head">
                    <p className="menu__catt__title">Your cart</p>
                    <button className="close__icon" onClick={cartActive === 0 ? () => setCartActive(1) : () => setCartActive(0)}><img src="/x-mark.svg" alt="" /></button>
                </div> */}
                <div className="menu__cat__body">
                    <div className="__left">
                        <div className="__sub">
                            <h4> KATEGORIJE</h4>
                            <Link href="/proizvodi"><a>Svi proizvodi</a></Link>
                            <Link href="/proizvodi/cetvorosjed"><a>Četvorosjed</a></Link>
                            <Link href="/proizvodi/dvosjed"><a>Dvosjed</a></Link>
                            <Link href="/proizvodi/fotelja"><a>Fotelja</a></Link>
                            <Link href="/proizvodi/garniture"><a>Garniture</a></Link>
                        </div>
                        <div className="__sub">
                            <Link href="/proizvodi/kreveti"><a>Kreveti</a></Link>
                            <Link href="/proizvodi/sofe-na-razvlacenje"><a>Sofe na razvlacenje</a></Link>
                            <Link href="/proizvodi/stolovi-stolice-i-ostalo"><a>Stolovi, stolice i ostalo</a></Link>
                            <Link href="/proizvodi/trosjed"><a>Trosjed</a></Link>
                            <Link href="/proizvodi/ugaone-garniture"><a>Ugaone garniture</a></Link>
                        </div>
                    </div>
                    <div className="__right">
                        <img src="https://shop.berre.ba/wp-content/uploads/2022/05/bianka-1.png" alt="" />
                    </div>
                </div>
            </div>
        
        
        </li>
        </React.Fragment>
    )
};

export default NavCat;
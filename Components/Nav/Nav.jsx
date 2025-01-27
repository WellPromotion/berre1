import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import NavSearch from './NavSearch';
import NavCart from './NavCart';
import NavCat from './NavCat';
import {AppContext} from '../Context/AppContext'


export default function Nav(props) {

    const { current } = props;
    const [cart] = useContext(AppContext);
    const productsCount = null !== cart ? cart.totalProductsCount : 0;

    //ACTIVE
    const [hamBurger, setHamBurger] = useState(0);

    function menuState(){
        if(hamBurger == 1){

        return "active"
        } else if(hamBurger == 0) {
        return ""
        }
    }

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() =>{
        const offset=window.scrollY;
        if(offset > 75 ){
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses=['nav-container'];
    if(scrolled){
        navbarClasses.push('__stick');
    }


    return (
        <>
            <nav className={navbarClasses.join(" ")}>
                {/* <div className="nav__top__bar">
                    <p>Use coupon code <span>"BERRE-2022"</span> for a 10% discount on your next purchase!</p>
                </div> */}
                <div className="nav-top">
                    <div className="nav-top-wrap">
                        <div className="cont-wrap __nav-review">
                            <div className="__stars">
                                <img src="/star.svg" alt="" className="__star" />
                                <img src="/star.svg" alt="" className="__star" />
                                <img src="/star.svg" alt="" className="__star" />
                                <img src="/star.svg" alt="" className="__star" />
                                <img src="/star.svg" alt="" className="__star" />
                                {/* <img src="/info.svg" alt="" className="__info" /> */}
                            </div>
                            <div className="__stars-info">
                                <p>Pridružite se našoj dugačkoj <br/> listi <span>SRETNIH KLIJENATA</span></p>
                            </div>
                        </div>

                        <div className="icon-wrap">
                            <Link href="/"><a><img src="/berre-icon.png" alt="" className="main-icon" /></a></Link>
                        </div>

                        <div className="cont__search">
                            <NavSearch/>
                        </div>

                        {/* MOBILE ONLY HAMBURGER */}
                        <div className={"hamburger " + menuState()} onClick={() => hamBurger == 0 ? setHamBurger(1) : setHamBurger(0)}>
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                            <div className="ham__nav__cart">
                                {productsCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"nav__bottom " + menuState()}>
                    <ul className="main-menu">
                        <li className={current === "home" ? "active" : ""}><Link href="/"><a>POČETNA</a></Link></li>
                        <NavCat current={current}/>

                        {/* <li className={current === "style" ? "active menu__cat __alt" : "menu__cat __alt"}>
                            <a href="#">Stilovi</a>
                            <div className="menu__cat__wrap">
                            <div className="menu__cat__body">
                                <div className="__left">
                                    <div className="__sub">
                                        <h4>Naši stilovi</h4>
                                        <Link href="/stilovi/compact-furniture"><a>Compact Furniture</a></Link>
                                        <Link href="/stilovi/middle-eastern-furniture"><a>Middle Eastern Furniture</a></Link>
                                        <Link href="/stilovi/italian-furniture"><a>Italian Furniture</a></Link>
                                        <Link href="/stilovi/european-furniture"><a>European Furniture</a></Link>
                                        <Link href="/stilovi/modern-furniture"><a>Modern Furniture</a></Link>
                                        <Link href="/stilovi/turkish-furniture"><a>Turkish Furniture</a></Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </li> */}
     
                        <li className={current === "blogs" ? "active" : ""}><Link href="/blogs"><a>Blog</a></Link></li>
                        <li className={current === "sales" ? "active" : ""}><Link href="/rasprodaja"><a><b>RASPRODAJA</b></a></Link></li>
                        <li className={current === "kontakt" ? "active" : ""}><Link href="/kontakt"><a>KONTAKT</a></Link></li>
                        <li className={current === "account" ? "active menu__icon" : "menu__icon"}><Link href="/racun"><a>
                            <div className="__icon">
                                <img src="/user.svg" alt="" /> 
                            </div>
                            RAČUN
                        </a></Link></li>
                        <NavCart current={current} />
                        <li className='socialIconz'>
                            <a href="https://www.facebook.com/namjestajberre.ba"><img src="../../facebook.png" alt="facebook-icon" /></a>
                        </li>
                        <li className='socialIconz'>
                            <a href="https://www.instagram.com/namjestajberre.ba/"><img src="../../instagram.png" alt="instagram-icon" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

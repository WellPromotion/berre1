import { useState, useEffect } from 'react';
import ProductSingle from '../Global/ProductSingle';

export default function AllCat(props) {

    const [isHidden, setIsHidden] = useState(false);
    const [stockOnly, setStockOnly] = useState(false);
    const [priceOnly, setPriceOnly] = useState("3000");
    const [amountProducts, setAmountProducts] = useState(24);
    const [sortBy, setSortBy] = useState("N-O");
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
      
        setPageNumber(1)

    }, [stockOnly, priceOnly, amountProducts, sortBy]);
    

    const {products} = props

    function filterAll(priceF, stockF) {
        
        
        const returnedProductsFirst = []

        const returnedProductsFinal = []

        if (stockF === true) {
            for(let a = 0; a < products.length; a++){
                if(products[a].stockStatus === "IN_STOCK"){
                    returnedProductsFirst.push(products[a])
                }
            }
        } else if (stockF === false) {
            for(let b = 0; b < products.length; b++){
                returnedProductsFirst.push(products[b])
            }
        }

        if( priceF === "3000" ) {
            return returnedProductsFirst
        } else {
            for(let c = 0; c < products.length; c++){
                if (Number(returnedProductsFirst[c].price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0]) <= parseInt(priceOnly) ) {
                    returnedProductsFinal.push(returnedProductsFirst[c])
                }
            }
        }

        return returnedProductsFinal

    }

    function generateProduct( amount, sort, page ) {

        const product = filterAll(priceOnly, stockOnly)

        // SORTING

        const productSorting = (x) => {
            if(x === "N-O"){
                return product.slice().sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
            }
            if(x === "O-N"){
                return product.slice().sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date);
                });
            }
            if(x === "A-Z"){
                return product.slice().sort(function (a, b) {
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                    return 0;
                });
            }
            if(x === "Z-A"){
                return product.slice().sort(function (a, b) {
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                    return 0;
                });
            }
            if(x === "L-H"){
                return product.slice().sort(function (a, b) {
                    if(Number(a.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0]) < Number(b.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0])) { return -1; }
                    if(Number(a.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0]) > Number(b.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0])) { return 1; }
                    return 0;
                });
            }
            if(x === "H-L"){
                return product.slice().sort(function (a, b) {
                    if(Number(a.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0]) < Number(b.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0])) { return 1; }
                    if(Number(a.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0]) > Number(b.price.replace(/,/g, '').match( /[+-]?\d+(\.\d+)?/g )[0])) { return -1; }
                    return 0;
                });
            }
        }

        const skip = amount * (page - 1)

        return productSorting(sort).slice(skip, (skip + parseInt(amount)))

    }


    function handlePages(amount){

        const pageNumbers = []

        const numberPot = filterAll(priceOnly, stockOnly).length / amount

        for(let i = 0; i < numberPot; i++){
            pageNumbers.push({number: i})
        }
        return pageNumbers
    }



  return (
      <section className="section all__products__wrap">
        <div className="container">

            <div className="filters__top columns is-vcentered">
              <div className="column is-2">
                <button className="button __filter" onClick={isHidden === false ? ()=> setIsHidden(true): ()=> setIsHidden(false)}>{isHidden === false ?"Sakrij filtere" : "Prikaži filtere"}</button>
              </div>

              <div className="column is-10">
                <div className="filters__left">
                    <p className="__count">
                        {
                            filterAll(priceOnly, stockOnly).length > amountProducts ?
                                pageNumber === 1 ?
                                `1 - ${parseInt(amountProducts)} od ${products.length}`
                                :
                                `${(pageNumber - 1) * parseInt(amountProducts)} - ${(((pageNumber - 1) * parseInt(amountProducts)) + parseInt(amountProducts)) > filterAll(priceOnly, stockOnly).length ? filterAll(priceOnly, stockOnly).length : (((pageNumber - 1) * parseInt(amountProducts)) + parseInt(amountProducts))} od ${filterAll(priceOnly, stockOnly).length}`
                            :
                            `1 - ${filterAll(priceOnly, stockOnly).length} od ${filterAll(priceOnly, stockOnly).length}`
                        }
                    </p>
                    <div className="sorting__left">

                        <div className="__sorting sorting__amount">
                            <p>Prikaži:</p>
                            <div className="select">
                                <select defaultValue={24} onChange={(e) => setAmountProducts(e.target.value)}>
                                    <option value={12}>12</option>
                                    <option value={24}>24</option>
                                    <option value={36}>36</option>
                                    <option value={48}>48</option>
                                    <option value={60}>60</option>
                                </select>
                            </div>
                        </div>

                        <div className="__sorting sorting__by">
                            <p>Sortiraj po:</p>
                            <div className="select">
                                <select defaultValue={"N-O"} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="N-O">Datum: od novog do starog</option>
                                    <option value="O-N" >Datum: od starog do novog</option>
                                    <option value="A-Z">Ime: A do Z</option>
                                    <option value="Z-A">Ime: Z do A</option>
                                    <option value="L-H">Cijena: niske do visoke</option>
                                    <option value="H-L">Cijena: visoke do niske</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>
              </div>
              
              
            </div>

            <div className="columns">
                {
                    isHidden === false ?
                    <div className="column is-2">
                        <div className="change__left">

                            <div className="change__item">
                                <h4>Dostupnost</h4>
                                <div className={ stockOnly === true ? "change__check __active" : "change__check" } onClick={ stockOnly !== true ? ()=> setStockOnly(true) : ()=> setStockOnly(false)}>
                                    <div className="change__box">
                                        <div className="change__active"></div>
                                    </div>
                                    <p>Na lageru</p>
                                </div>
                            </div>

                            <div className="change__item">
    
                                <h4 className="__alt">Cijena</h4>
                                <div className="price__top">
                                    <p>0</p>
                                    <p>{parseInt(priceOnly) >= 2500 ? "Unlimited" : priceOnly + "KM" }</p>
                                </div>
                                
                                
                                <div className={`price__slider s${priceOnly}`} >
                                    <button className={parseInt(priceOnly) >= 500 ? "__active" : ""} onClick={()=> setPriceOnly("500")}></button>
                                    <button className={parseInt(priceOnly) >= 1000 ? "__active" : ""} onClick={()=> setPriceOnly("1000")}></button>
                                    <button className={parseInt(priceOnly) >= 1500 ? "__active" : ""} onClick={()=> setPriceOnly("1500")}></button>
                                    <button className={parseInt(priceOnly) >= 2000 ? "__active" : ""} onClick={()=> setPriceOnly("2000")}></button>
                                    <button className={parseInt(priceOnly) >= 2500 ? "__active" : ""} onClick={()=> setPriceOnly("3000")}></button>
                                </div>

                            </div>

                        </div>
                    </div>

                    : ""
                }
                <div className={isHidden === false ? "column is-10": "column is-12"}>
                    <div className="res__grid">
                    {
                        generateProduct( amountProducts, sortBy, pageNumber ).length ? (
                            generateProduct( amountProducts, sortBy, pageNumber ).map( p => 
                                <ProductSingle
                                    key={ p.id } 
                                    product= {p} 
                                />)
                        ) 
                        : 
                        <h4 className="__noprod">No products found</h4>
                    }
                    </div>
                    {
                        filterAll(priceOnly, stockOnly).length <  parseInt(amountProducts)
                        ? ""
                        :
                    <div className="__pagination">
                        <button className={pageNumber === 1 ?"__pag __inactive" : "__pag"} onClick={pageNumber === 1 ? ()=> setPageNumber(1) : ()=> setPageNumber(pageNumber - 1)}>{"<"}</button>
                        {
                            handlePages(amountProducts).length ?
                                handlePages(amountProducts).map(page => 
                                    <button key={page.number} className={page.number + 1 === pageNumber ? "__active" : ""} onClick={()=> setPageNumber(page.number + 1)}>{page.number + 1}</button>
                                )
                            :
                            ""
                        }
                        <button className={handlePages(amountProducts).length === pageNumber ? "__pag __inactive" : "__pag"} onClick={handlePages(amountProducts).length !== pageNumber ? ()=> setPageNumber(pageNumber + 1) : ()=> console.log("At max")}>{">"}</button>
                    </div>
                    }


                </div>
            </div>

            

        </div>
      </section>
  );
}

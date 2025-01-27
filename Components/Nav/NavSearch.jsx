import React, { useState } from 'react';
import GET_SEARCH from "../../queries/nav-search";
import Link from 'next/link'
import { useQuery} from '@apollo/client';

export default function NavSearch() {


    const [search, setSearch] = useState("")

    const { data } = useQuery(GET_SEARCH, {
        variables: {
            search: search,
        },
    });

    // console.log("DATA", data)

    return (
        <form action="" className={search !== "" ? "head__search active" : "head__search"}>
            <div className="head__search">
                <div className="nav__search">
                    <div className="nav__search-wrap">
                    <input onChange={ e => setSearch(e.target.value)} type="text" value={search} className="input search__input" placeholder="Search for a product..." />
                        {
                            search === "" ?
                            <img src="/magnifier.svg" alt="" className="search__img" />
                            :
                            <img src="/x-mark.svg" alt="" className="search__img __active" onClick={()=> setSearch("")}/>
                        }
                    </div>
                    { search !== "" ? data !== undefined ? data.products.nodes.length ?
                        <div className="search__products">
                        {
                        data.products.nodes.map(res => 
                            <Link key={res.id} href={`/products/${res.productCategories.nodes[0].slug}/${res.slug}`}><a>
                                {/* href={`/produkte/${res.productCategories.nodes.filter(r => null === r.ancestors)[0].slug.slice(1)}/${res.slug}`} */}
                            <div className="product__search" key={res.id} onClick={()=>setSearch("")}>

                                <img src={undefined !== res.productAdditional.additionalProduct.productThumbnail ? res.productAdditional.additionalProduct.productThumbnail.mediaItemUrl : res.image !== null ? res.image.sourceUrl : '/placeholder.jpg'}/>
                                
                                <div className="search__info">
                                    <p className="info__name">{res.name}</p>
                                    <p className="info__cat">{null !== res.productCategories.nodes[0].name ? res.productCategories.nodes[0].name : "undefined"}</p>
                                    <p className="info__price">{res.price}</p>
                                </div>
                            </div>
                            </a></Link>                     
                        )
                        }
                            <Link href={{ pathname: '/search', query: { search: search } }}>
                                <button className="button search__butt">See all results</button>
                            </Link>
                        </div>
                        : 
                        <div className="search__products">
                            <p className="p__error">No products found</p>
                            <button className="button search__butt" onClick={()=> setSearch("")}>Clear search</button>
                        </div>
                        :
                        <div className="search__products">
                            <p className="p__error">Loading...</p>
                        </div>
                        : ""
                    } 
                </div>
            </div>
        </form>
    )
}

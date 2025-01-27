import Link from 'next/link'

export default function Hero(props) {

    const {featured} = props

    // console.log("Featured", featured)

    const name = featured[0].name.match(/[a-zA-Z]+/g);

    // console.log(name)

  return (
    <section className="section home__hero ">
        <div className="container">
        <Link href={`/proizvodi/${featured[0].productCategories.nodes[0].slug}/${featured[0].slug}`}><a>
            <div className="home__hero__main" style={{ backgroundImage:`url(${featured[0].productAdditional.additionalProduct.productThumbnail.mediaItemUrl})` }}>

                <div className="home__hero__deal">
                    <div className="deal__wrap">
                        <div className="__wrap">
                            <h4 className="__main">Odlične<br/>ponude</h4>
                            <p>Kvalitetan namještaj</p>
                        </div>
                    </div>
                </div>

                <div className="home__hero__deal hero__alt">
                    <div className="deal__wrap">
                        <div className="__wrap">
                            <h4 className="__name">{name[0]}</h4>
                            <p className="__cat">{featured[0].productCategories.nodes[0].name}</p>
                            {/* <p className="__price">{featured[0].price}</p> */}
                        </div>
                    </div>
                </div>

            </div>
        </a></Link>

            {/* <div className="hero__shipping">
                <div className="__right">
                    <div className="shipping__image__wrap">
                        <img src="/delivery.svg" alt="" />
                    </div>
                    <p><span>BESPLATNA DOSTAVA</span> NAMJEŠTAJA ZA NARUDŽBE VEĆE OD 1000 KM</p>
                </div>
                <Link href="/uslovi-isporuke"><a><button className="button">Vidi više</button></a></Link>
            </div> */}
        
        </div>
    </section>
  )
}

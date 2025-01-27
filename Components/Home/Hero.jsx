import Link from 'next/link'

export default function Hero(props) {

    const {featured} = props

    // console.log("Featured", featured)

    // const name = featured[0].name.match(/[a-zA-Z]+/g);

    // console.log(name)

  return (
    <section className="section home__hero ">
        <div className="container">
        <Link href={`/about-us`}><a>
                  {/* <div className="home__hero__main" style={{ backgroundImage:`url(https://shop.berre.ca/wp-content/uploads/2022/01/cetvorosjednewclass.jpg)` }}> */}
                   <div className="home__hero__main" style={{ backgroundImage:`url(https://shop.berre.ca/wp-content/uploads/2022/11/NEW-CLASS-17.jpg)` }}> 

                <div className="home__hero__deal">
                    <div className="deal__wrap">
                        <div className="__wrap">
                            <h4 className="__main">Great<br/>Deals</h4>
                            <p>Quality Furniture</p>
                        </div>
                    </div>
                </div>

                {/* <div className="home__hero__deal hero__alt">
                    <div className="deal__wrap">
                        <div className="__wrap">
                            <h4 className="__name">{name[0]}</h4>
                            <p className="__cat">{featured[0].productCategories.nodes[0].name}</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </a></Link>

            <div className="hero__shipping">
                <div className="__right">
                    <div className="shipping__image__wrap">
                        <img src="/delivery.svg" alt="" />
                    </div>
                    <p><span>Delivery</span> across all of the canada</p>
                </div>
                <Link href="/policies"><a><button className="button">Learn more</button></a></Link>
            </div>
        
        </div>
    </section>
  )
}

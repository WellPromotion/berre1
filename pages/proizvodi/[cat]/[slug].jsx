import Footer from "../../../Components/Global/Footer";
import HeadTags from "../../../Components/Global/HeadTags";
import client from '../../../Components/ApolloClient';
import Nav from "../../../Components/Nav/Nav";
import Link from 'next/link'
import GET_PRODUCT from "../../../queries/get-product";
import GET_PRODUCT_PATHS from "../../../queries/paths/product-paths";
// import ReactImageMagnify from "react-image-magnify";
import ReactSlick from 'react-slick';
import { useRouter } from 'next/router';
import AddProductSingle from "../../../Components/Global/AddProductSingle";
import { useState} from 'react';
import ProductSlider from "../../../Components/Home/ProductSlider";

export default function ProductPage( props ) {

  const { product } = props

  const [dropOne, setDropOne] = useState(false);
  const [dropTwo, setDropTwo] = useState(false);

  const [currentVar, setCurrentVar] = useState(0);

  const router = useRouter()

  const tempHeadData = {
    title : "Loading - Berre namještaj",
    meta : ""
}

  if (router.isFallback) {
    return <>
    <HeadTags headData={tempHeadData}/>
    <Nav current=""/>

    <section className="section __account sec__home">
      <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
            <div className="account__placeholder">
                <div className="account__wrap">
                    <h1><span>Učitavanje</span></h1>
                    <p>Učitavamo stranicu!</p>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </>
}


  const headData = {
    title : `${product.name} - Berre namještaj`,
    meta : "",
    image: product.productAdditional.additionalProduct.productThumbnail.sourceUrl
  }

  

  //   SLIDER INIT
    
  const settings = {
    customPaging: function(i) {
    return (
        i === 0 ?
        <a>
        {
            product.productAdditional.additionalProduct.productThumbnail !== null ?
            <img src={product.productAdditional.additionalProduct.productThumbnail.sourceUrl}/>
            :
            <img src="/placeholder.jpg" />
        }
        </a>
        : 
        <a>
        {
        product.galleryImages.edges.length ?
            undefined === product.galleryImages.edges[i-1] ?
            <img src={product.galleryImages.edges[0].node.sourceUrl}/>
            :
            <img src={product.galleryImages.edges[i-1].node.sourceUrl}/>
        :
        <img src="/placeholder.jpg" />
        }
    </a>
    );
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function sendVariation(x) {
    if(undefined !== product.variations){
      return product.variations.nodes[x].databaseId
    } else return undefined
  }

  return( 
    <>
      <HeadTags headData={headData}/>
      <Nav current="cat"/>

      <section className="section product__single__wrap">
        <div className="container">
          <div className="hero__breadcrumbs">
            <Link href="/"><a><p>Home</p></a></Link>
            <p className="bc__div">/</p>
            <Link href={`/proizvodi`}><a><p>Proizvodi</p></a></Link>
            <p className="bc__div">/</p>
            <Link href={`/proizvodi/${product.productCategories.nodes[0].slug}`}><a><p>{product.productCategories.nodes[0].name}</p></a></Link>
            <p className="bc__div">/</p>
            <Link href={`/proizvodi/${product.productCategories.nodes[0].slug}/${product.slug}`}><a className="__current"><p>{product.name}</p></a></Link>
          </div>
        
          <div className="columns">


            <div className="column is-8 has-text-centered ">
              {/* GAL START */}
              <div className="image__gal">
                <ReactSlick {...settings}>
                  { product.productAdditional.additionalProduct.productThumbnail !== null ?
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            isFluidWidth: true,
                            src: product.productAdditional.additionalProduct.productThumbnail.sourceUrl,
                          },
                          largeImage: {
                            src: product.productAdditional.additionalProduct.productThumbnail.sourceUrl,
                            width: 800,
                            height: 1300,
                          },
                          imageClassName: "small-img",
                          enlargedImageClassName: "large-img",
                          enlargedImageContainerClassName: "larg-img-cont",
                          enlargedImagePosition: "over",
                          lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                        }}
                      />
                    : 
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          isFluidWidth: true,
                          src: "/placeholder.jpg",
                        },
                        largeImage: {
                          src: "/placeholder.jpg",
                          width: 800,
                          height: 1300,
                        },
                        imageClassName: "small-img widescreen-img",
                          enlargedImageClassName: "large-img widescreen-img",
                          enlargedImageContainerClassName: "larg-img-cont",
                        enlargedImagePosition: "over",
                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                      }}
                    />}
                    {product.galleryImages.edges.length ?
                      <ReactImageMagnify
                      {...{
                        smallImage: {
                          isFluidWidth: true,
                          src: product.galleryImages.edges[0].node.sourceUrl,
                        },
                        largeImage: {
                          src: product.galleryImages.edges[0].node.sourceUrl,
                          width: 800,
                          height: 1300,
                        },
                        imageClassName: "small-img widescreen-img",
                        enlargedImageClassName: "large-img widescreen-img",
                        enlargedImageContainerClassName: "larg-img-cont",
                        enlargedImagePosition: "over",
                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                      }}
                    />
                    : ""}
                    {product.galleryImages.edges.length >= 2 ?
                      <ReactImageMagnify
                      {...{
                        smallImage: {
                          isFluidWidth: true,
                          src: product.galleryImages.edges[1].node.sourceUrl,
                        },
                        largeImage: {
                          src: product.galleryImages.edges[1].node.sourceUrl,
                          width: 800,
                          height: 1300,
                        },
                        imageClassName: "small-img widescreen-img",
                        enlargedImageClassName: "large-img widescreen-img",
                        enlargedImageContainerClassName: "larg-img-cont",
                        enlargedImagePosition: "over",
                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                      }}
                    />
                  : ""} 
                </ReactSlick>
              </div>
              {/* GAL END */}
            </div>

            <div className="column is-4">

              <div className="product__desc__wrap">

                <h1 className="desc__name">{product.name}</h1>


                
                {
                  product.type === "VARIABLE" ?

                  <div className="desc__rates">
                    <p>Odaberite opciju:</p>
                    {
                      product.variations.nodes.length ?
                        product.variations.nodes.map((variable, key) => 
                          <button key={variable.attributes.nodes[0].id} className={currentVar === key ? "button __active" : "button"} onClick={()=> setCurrentVar(key)}>{variable.attributes.nodes[0].value}</button>
                        )
                      :
                      "An error has occured :("
                    }

                    <div className="desc__buy">
                      <div className="desc__price-wrap">
                        {
                          currentVar !== null ?
                          product.variations.nodes[currentVar].onSale !== true ?
                          <div className="desc__price-wrap">
                            <h6 className="desc__price-txt">Cijena:</h6>
                            <p className="desc__price">{product.variations.nodes[currentVar].price}</p>
                          </div> 
                          :
                          <div className="desc__price-wrap">
                            <h6 className="desc__price-txt">Cijena:</h6>
                            <div className="desc__discount">
                              <p className="desc__discount__price">{product.variations.nodes[currentVar].regularPrice}</p>
                              <p className="desc__price">{product.variations.nodes[currentVar].price}</p>
                            </div>
                          </div>
                          :
                          <>
                            <h6 className="desc__price-txt">Cijena:</h6>
                            <p className="desc__price __alt">{"Odaberite opciju"}</p>
                          </>
                        }
                        
                      </div>
                      {
                        currentVar !== null ?
                        <AddProductSingle product={product} variable={sendVariation(currentVar)}/>
                        :
                        <button className="button product-single__cart __inactive"> <img src="/cart.svg" alt="" /> 
                        Dodaj u korpu</button>
                      }
                      
                      
                    </div>

                    

                  </div>
                  :
                  <div className="desc__buy">
                    {
                      product.onSale !== true ? 
                      <div className="desc__price-wrap">
                        <h6 className="desc__price-txt">Cijena:</h6>
                        <p className="desc__price">{product.price}</p>
                      </div> 
                      :
                      <div className="desc__price-wrap">
                        <h6 className="desc__price-txt">Cijena:</h6>
                        <div className="desc__discount">
                          <p className="desc__discount__price">{product.regularPrice}</p>
                          <p className="desc__price">{product.price}</p>
                        </div>
                      </div>
                    }
                    <AddProductSingle product={product} variable={undefined}/>
                  </div>
                }
                

                <div className="desc__info">
                  <div className="desc__desc" dangerouslySetInnerHTML={{ __html: product.productAdditional.additionalProduct.productDescription }} />


                  {
                    product.productAdditional.additionalProduct.setsDimensions.value1Name !== null ?
                    <div className="desc__table table-container">
                      <table className="table is-bordered is-fullwidth">
                        <thead>
                          <tr>
                            <th>Ime</th>
                            <th>Visina</th>
                            <th>Dubina</th>
                            <th>Širina</th>
                          </tr>
                          
                        </thead>
                        <tbody>
                          <tr>
                            <th>{product.productAdditional.additionalProduct.setsDimensions.value1Name}</th>
                            <td>{product.productAdditional.additionalProduct.setsDimensions.value1Height}</td>
                            <td>{product.productAdditional.additionalProduct.setsDimensions.value1Depth}</td>
                            <td>{product.productAdditional.additionalProduct.setsDimensions.value1Width}</td>
                          </tr>

                          {
                            product.productAdditional.additionalProduct.setsDimensions.value2Name !== null ?
                            <tr>
                              <th>{product.productAdditional.additionalProduct.setsDimensions.value2Name }</th>
                              <td>{product.productAdditional.additionalProduct.setsDimensions.value2Height}</td>
                              <td>{product.productAdditional.additionalProduct.setsDimensions.value2Depth}</td>
                              <td>{product.productAdditional.additionalProduct.setsDimensions.value2Width}</td>
                            </tr>
                            : ""
                          }
                          {
                            product.productAdditional.additionalProduct.setsDimensions.value3Name !== null ?
                            <tr>
                              <th>{product.productAdditional.additionalProduct.setsDimensions.value3Name }</th>
                              <td>{product.productAdditional.additionalProduct.setsDimensions.value3Height}</td>
                              <td>{product.productAdditional.additionalProduct.setsDimensions.value3Depth}</td>
                              <td>{product.productAdditional.additionalProduct.setsDimensions.value3Width}</td>
                            </tr>
                            : ""
                          }

                        </tbody>
                      </table>
                    </div>

                    : ""
                  }
                  

                  <Link href={`/products/${product.productCategories.nodes[0].slug}`}><a><button className="button desc__cat">{product.productCategories.nodes[0].name}</button></a></Link>
                </div>

                <div className="desc__more">

                  <div className="desc__more-drop">
                    <div className="desc__more-drop-title">
                      <h5>Uputstva za sastavljanje</h5>
                      <button className="button __drop" onClick={dropOne === false ? ()=>setDropOne(true) : ()=>setDropOne(false)}>{dropOne === false ? "+" : "-"}</button>
                    </div>
                    {
                      dropOne === true ?
                      <div className="desc__more-drop-content">
                        <Link href={`/`}><a>Uputstva za sastavljanje</a></Link>
                      </div>
                      :
                      ""
                    }
                    
                  </div>

                  {/* <div className="desc__more-drop">
                    <div className="desc__more-drop-title">
                      <h5>Uslovi isporuke</h5>
                      <button className="button __drop" onClick={dropTwo === false ? ()=>setDropTwo(true) : ()=>setDropTwo(false)}>{dropTwo === false ? "+" : "-"}</button>
                    </div>
                    {
                      dropTwo === true ?
                      <div className="desc__more-drop-content">
                        
                        <Link href="/uslovi-isporuke"><a>Uslovi isporuke</a></Link>
                      </div>
                      :
                      ""
                    }
                    
                  </div> */}
                  
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductSlider title={"Slični proizvodi"} products={product.related.nodes}/>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export async function getStaticProps({ params: {slug} }) {

  console.log(`Building slug: ${slug}`)

  const id = slug;

  const res = await client.query(({
    query:  GET_PRODUCT,
    variables: { id }
  }))

  return{
    props: {
      product: res.data.product
    },
    revalidate: 10,
  }

}

export async function getStaticPaths() {

  const { data } = await client.query({
      query: GET_PRODUCT_PATHS
  })

  const parentCat = data.products.nodes
  
  const pathsData = []

  parentCat.map(product =>{
      pathsData.push({params: {cat: product.productCategories.nodes[0].slug, slug: product.slug} })
  })
  
  return {
    paths: pathsData,
    fallback: true
  };
}
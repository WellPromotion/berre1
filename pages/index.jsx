import HeadTags from '../Components/Global/HeadTags'
import ProductSlider from '../Components/Home/ProductSlider'
import Nav from '../Components/Nav/Nav'
import client from '../Components/ApolloClient';
import GET_HOME from '../queries/home';
import Link from 'next/link'
import Footer from '../Components/Global/Footer';
import Hero from '../Components/Home/Hero';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {useState, useEffect} from 'react';

export default function Home(props) {

  const { newProducts, saleProducts, categories, featured, page, seo, posts, styles} = props;

  const pageData = page.homePage.homePage
  const seoData = seo.seoTags.seoData

  // console.log("PAGE", pageData)
  // console.log("STYLES", styles)

  const headData = {
    title : seoData.titleTag,
    meta : seoData.metaTag,
    image : seoData.seoImage.sourceUrl
  }

  //INFO FOR PDF WIDGET

  const [current, setCurrent] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fullscreen, setFullscreen] = useState(0);
  const [pdf, setPdf] = useState("");

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
  }

  function pdfDown() {
      if(pageNumber === 1){
          setPageNumber(1)
      } else {
          setPageNumber(pageNumber - 1)
      }
  }

  function pdfUp() {
      if(pageNumber === numPages){
          setPageNumber(1)
      } else {
          setPageNumber(pageNumber + 1)
      }
  }

  // console.log("PDF", pdf)

  return (
    <>
      <HeadTags headData={headData}/>

      {
        pdf !== "" ?
            <div className={"pdf active"}>
                <div className="pdf-head">
                    <div className="__left">
                      <h5>{pageData.pdfOneFile.mediaItemUrl === pdf ? pageData.pdfOneName : pageData.pdfTwoName}</h5>
                    </div>
                    <div className="buttons">
                        <button className="button __exit" onClick={()=> setPdf("")}> Exit</button>
                    </div>
                </div>
                <div className="pdf-wrap">
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.log}> 
                        <Page pageNumber={pageNumber}/>
                    </Document>
                </div>
                <div className="cont-pdf">
                    <p className="cont" onClick={()=> pdfDown()}>{"< prev"}</p>
                    <p className="total">{pageNumber}<span>/</span>{numPages}</p>
                    <p className="cont" onClick={()=> pdfUp()}>{"next >"}</p>
                </div>
            </div>
        : ""
    }


      <Nav current="home"/>

      {/* HERO */}
      <Hero featured={featured}/>

      {/* CATEGORIES */}
      <section className="section sec__home">
      <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
          <div className="home__cat">
            <div className="home__cat__title">
              <h3>{pageData.titleOneCategories}</h3>
            </div>

            <div className="columns is-multiline home__cat__wrap">

              {
                categories.length ?
                  categories.map(cat => 
                    <div className="column is-4" key={cat.id}>
                      <div className="home__cat__item">
                        <div className="home__cat__img__wrap">
                          <img src={cat.image.sourceUrl} alt="" className="home__cat__img" />
                          {/* <div className="home__cat__price">

                            <div className="home__cat__txt">
                              <p className="__uni">From</p>
                              <p>{cat.products.nodes[0].price}</p>
                            </div>
                            
                          </div> */}
                        </div>
                        
                        <div className="home__cat__txt">
                          <h2>{cat.name}</h2>
                          <Link href={`/products/${cat.slug}`}><a>
                            <button className="button">View products</button>
                          </a></Link>
                        </div>
                      </div>
                      
                    </div>
                  )
                :
                <p className="has-text-centered">No Categories found</p>
              }

            </div>

          </div>
        </div>
      </section>

      {/* PDF */}
      {/* <section className="section pdf__sec">
        <div className="container">
          <div className="home__pdf">
            <div className="home__pdf__title">
              <h3>{pageData.titleTwoPdf}</h3>
            </div>

            <div className="home__pdf__wrap">
              <div className="columns">

                <div className="column is-half">
                  <div className="home__pdf__single">
                    <div className="home__pdf__image__wrap">
                      <img src={pageData.pdfOneImage.sourceUrl} alt="" />
                    </div>
                    <div className="home__pdf__text">
                      <h4>{pageData.pdfOneName}</h4>
                      <button className="button" onClick={()=> setPdf(pageData.pdfOneFile.mediaItemUrl)}>View More</button>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                <div className="home__pdf__single">
                    <div className="home__pdf__image__wrap">
                      <img src={pageData.pdfTwoImage.sourceUrl} alt="" />
                    </div>
                    <div className="home__pdf__text">
                      <h4>{pageData.pdfTwoName}</h4>
                      <button className="button __alt" onClick={()=> setPdf(pageData.pdfTwoFile.mediaItemUrl)}>View More</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
                
          </div>
        </div>
      </section> */}

      {/* NEW PRODUCTS */}
      <section className="section">
        <div className="container">
          <ProductSlider title={pageData.productListTitleOne} products={newProducts}/>
          <ProductSlider title={pageData.productListTitleTow} products={saleProducts}/>
        </div>
      </section>

      {/* BLOGS */}
      <section className="section blog__sec">
        <div className="container">
          <div className="home__blog">
            <div className="home__blog__title">
              <h3>{pageData.titleThreeBlogs}</h3>
            </div>
            {/* <div className="home__blog__subtitle">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quis soluta commodi esse qui quaerat consectetur sunt impedit accusantium placeat!</p>
            </div> */}

            <div className="__blog-wrap">
                <div className="columns is-gapless">

                  {
                    posts.length ?
                    posts.slice(0, 4).map(blog => 
                        <div className="column is-3" key={blog.id}>
                            <div className="__blog">
                                <img className="__main-img" src={blog.featuredImage.node.sourceUrl} alt="" />
                                <p className="__date">{blog.date.split("T").shift()}</p>
                                <p className="__title">{blog.title}</p>
                                <div dangerouslySetInnerHTML={{  __html: blog.excerpt }}></div>
                                <Link href={"/blogs/" + blog.slug}><a><button className="button __img">Read more <img src="/but-next.svg" alt="" /></button></a></Link>
                            </div>
                        </div>
                    )
                    : ""
                  }

                </div>
            </div>
                
          </div>
        </div>
      </section>

      {/* STYLES */}
      <section className="section sec__home">
      <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
        <div className="container">
          <div className="home__cat  __alt">
            <div className="home__cat__title">
              <h3>{pageData.titleFourStyles}</h3>
            </div>

            <div className="columns is-multiline home__cat__wrap">

              {
                styles.length ?
                  styles.map(style => 
                    <div className="column is-6" key={style.id}>
                      <div className="home__cat__item">
                        <div className="home__cat__img__wrap">
                          <img src={style.styles.styleMainImage.sourceUrl} alt="" className="home__cat__img" />
                        </div>
                        
                        <div className="home__cat__txt">
                          <h2>{style.title}</h2>
                          <p>{style.styles.styleExcerpt}</p>
                          <Link href={`/style/${style.slug}`}><a>
                            <button className="button">View more</button>
                          </a></Link>
                        </div>
                      </div>
                      
                    </div>
                  )
                :
                <p className="has-text-centered">No Styles found</p>
              }

            </div>

          </div>
        </div>
        
      </section>
      
      <section id="endParagraph" className="section">
      <div className="container">
          <div className="columns">
            <div className="column">
              <p>
              Welcome to<b> Berre Furniture</b>, home of <b>Turkish Furniture in Toronto</b>, where traditional craftsmanship meets modern luxury. Our exclusive collection of custom furniture is hand-crafted by skilled artisans in Turkey using the finest materials and techniques.
 <br /> <br />
From <b>ornate sofas and chairs to intricately carved beds and tables</b>, each piece in our collection is a work of art that will elevate the style and sophistication of any space.
 <br />  <br />
Our designers work with you in mind to create the perfect piece for your home or business, using our expertise to bring your dream furniture to life. From start to finish, our team is dedicated to ensuring that your experience with <b>Berre Furniture</b> is unparalleled.
 <br /> <br />
We invite you to explore our collection and discover the timeless beauty and exceptional quality of our luxury furniture. <b>Contact us today</b> to get your own piece of art.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* FOOTER */}
      <Footer/>
      

    </>
  )
}

export async function getStaticProps() {
  const result = await client.query( { query: GET_HOME } )
  return{
    props: {
      newProducts: result.data.newProducts.nodes,
      saleProducts: result.data.saleProducts.nodes,
      categories: result.data.categories.nodes,
      featured: result.data.featured.nodes,
      page: result.data.page,
      seo: result.data.seo,
      posts: result.data.posts.nodes,
      styles: result.data.styles.nodes
    },
    revalidate: 10,
  }
}

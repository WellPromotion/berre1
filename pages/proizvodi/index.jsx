import Footer from "../../Components/Global/Footer";
import HeadTags from "../../Components/Global/HeadTags";
import client from '../../Components/ApolloClient';
import Nav from "../../Components/Nav/Nav";
import GET_ALL from "../../queries/get-all";
import Link from 'next/link'
import AllCat from "../../Components/AllProducts/AllCat";
import ALL_PRODUCTS_PAGE from "../../queries/pages/allProducts";

export default function CatPageAll(props) {

    const { products, page, seo } = props

    const pageData = page.catHero.categoryBasic
    const seoData = seo.seoTags.seoData


    const headData = {
        title : seoData.titleTag,
        meta : seoData.metaTag,
        image : seoData.seoImage.sourceUrl
    }


    return (
        <>
        <HeadTags headData={headData}/>
        <Nav current="cat"/>

        <section className="section cat__hero">
            <div className="container">
                <div className="cat__hero__main" style={{ backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${pageData.heroImage.sourceUrl})` }}>
                    <h2>{pageData.heroText}</h2>
                </div>
                <div className="hero__breadcrumbs">
                    <Link href="/"><a><p>Home</p></a></Link>
                    <p className="bc__div">/</p>
                    <Link href={`/proizvodi`}><a className="__current"><p>Proizvodi</p></a></Link>
                </div>
            </div>
        </section>

        <AllCat products={products}/>

        <Footer/>
        </>
    )
  }
  
export async function getStaticProps() {

    const result = await client.query( { query: GET_ALL } )
    const result2 = await client.query( { query: ALL_PRODUCTS_PAGE } );
    return{
      props: {
        products: result.data.products.nodes,
        page: result2.data.page,
        seo: result2.data.seo
      },
      revalidate: 10,
    }
}
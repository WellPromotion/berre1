import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import client from '../Components/ApolloClient';
import Nav from "../Components/Nav/Nav";
import GET_SEARCH from "../queries/get-search";
import Link from 'next/link'
import AllCat from "../Components/AllProducts/AllCat";
import { useRouter } from 'next/router'

export default function SearchPage(props) {

    const { products} = props

    const router = useRouter()

    const search = router.query.search;

    const headData = {
        title : `Rezultati za ${search} - Berre namještaj`,
        meta : ""
    }


    return (
        <>
        <HeadTags headData={headData}/>
        <Nav/>

        <section className="section cat__hero">
            <div className="container">
                <div className="cat__hero__main" style={{ backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(https://shop.berre.ba/wp-content/uploads/2022/05/scalabasehead.jpg)` }}>
                    <h2>{`Rezultati za "${search}"`}</h2>
                </div>
                <div className="hero__breadcrumbs">
                    <Link href="/"><a><p>Home</p></a></Link>
                    <p className="bc__div">/</p>
                    <Link href={`/`}><a className="__current"><p>Traži</p></a></Link>
                </div>
            </div>
        </section>

        <AllCat products={products}/>

        <Footer/>
        </>
    )  
}
  
SearchPage.getInitialProps = async function( context ) {

    let{query: {search} } = context;

    const searchTag = search;

    const result = await client.query( { query: GET_SEARCH, variables: { searchTag } } )
    return{
        products: result.data.products.nodes
    }
}
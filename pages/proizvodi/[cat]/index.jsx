import Footer from "../../../Components/Global/Footer";
import HeadTags from "../../../Components/Global/HeadTags";
import client from '../../../Components/ApolloClient';
import Nav from "../../../Components/Nav/Nav";
import { useRouter } from 'next/router';
import GET_CAT from "../../../queries/get-cat";
import GET_CAT_PATHS from "../../../queries/paths/cat-paths";
import Link from 'next/link'
import AllCat from "../../../Components/AllProducts/AllCat";

export default function CatPage(props) {

    const { categories, products} = props

    const router = useRouter()

    const tempHeadData = {
        title : "Loading - Berre Furniture",
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

    const currentCat = router.query.cat

    

    // const notCurrent = [];
    // let currentMain

    // for (let i = 0; i < categories.length; i++){
    //     if(categories[i].slug === currentCat){
    //         currentMain = categories[i]
    //     } else {
    //         notCurrent.push(categories[i])
    //     }
    // }

    const headData = {
        title : `${categories.name} - Berre namještaj`,
        meta : categories.description
    }


    return (
        <>
        <HeadTags headData={headData}/>
        <Nav current="cat"/>

        <section className="section cat__hero">
            <div className="container">
                <div className="cat__hero__main" style={{ backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${categories.image.sourceUrl})` }}>
                    <h2>{categories.name}</h2>
                </div>
                <div className="hero__breadcrumbs">
                    <Link href="/"><a><p>Home</p></a></Link>
                    <p className="bc__div">/</p>
                    <Link href={`/proizvodi`}><a><p>Proizvodi</p></a></Link>
                    <p className="bc__div">/</p>
                    <Link href={`/proizvodi/${categories.slug}`}><a className="__current"><p>{categories.name}</p></a></Link>
                </div>
            </div>
        </section>

        <AllCat products={products}/>

        <Footer/>
        </>
    )
  }
  
export async function getStaticProps({ params: {cat} }) {

    console.log(`Building category slug: ${cat}`)

    const category = cat;
    const category_id = cat;

    const result = await client.query( { query: GET_CAT, variables: { category, category_id } } );
    
    return{
      props: {
        categories: result.data.productCategory,
        products: result.data.products.nodes,
      },
      revalidate: 10,
    }
}

export async function getStaticPaths() {

    const { data } = await client.query({
        query: GET_CAT_PATHS
    })
  
    const parentCat = data.categories.nodes
    
    const pathsData = []
  
    parentCat.map(categories =>{
        pathsData.push({params: {cat: categories.slug} })
    })
    
    return {
      paths: pathsData,
      fallback: true
    };
}
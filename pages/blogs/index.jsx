import React from 'react'
import BlogSingle from '../../Components/Global/Blog';
import GET_BLOGS from "../../queries/get-blogs";
import Footer from "../../Components/Global/Footer";
import HeadTags from "../../Components/Global/HeadTags";
import client from '../../Components/ApolloClient';
import Nav from "../../Components/Nav/Nav";
import Link from 'next/link'

export default function index(props) {

    const { posts, page } = props;

    const seoData = page.seoTags.seoData;
    const pageData = page.blogsPage.blogsMainContent;


    const headData = {
        title : seoData.titleTag,
        meta : seoData.metaTag,
        image : seoData.seoImage.sourceUrl
    }

  return (
    <>
    <HeadTags headData={headData}/>
    <Nav current="blogs"/>

    <section className="section cat__hero">
        <div className="container">
            <div className="cat__hero__main" style={{ backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${pageData.image.sourceUrl})` }}>
                <div className="blogs__hero">
                    <h2>{pageData.title}</h2>
                    <p>{pageData.description}</p>
                </div>
                
            </div>
            <div className="hero__breadcrumbs">
                <Link href="/"><a><p>Home</p></a></Link>
                <p className="bc__div">/</p>
                <Link href={`/blogs`}><a className="__current"><p>Blogs</p></a></Link>
            </div>
        </div>
    </section>
    <section className="section posts__more __alt">
        <div className="container">
            <div className="more__wrap">
                <div className="columns is-multiline posts__wrap">

                    {
                        posts.length ? 
                        posts.map(p =>
                            <div className="column is-6" key={p.id}>

                                <div className="single__wrap">

                                    <img src={p.featuredImage.node.sourceUrl} alt="" className="__feat"/>
                                    <div className="single__content">
                                        <h3>{p.title}</h3>
                                        <div dangerouslySetInnerHTML={{  __html: p.excerpt }}></div>
                                        <Link href={"/blogs/" + "/" + p.slug}><a><button className="button post__more">Read more <img src="/but-next.svg" alt="" /></button></a></Link>
                                    </div>

                                </div>

                            </div>
                                
                        )
                        : ""
                    }

                </div>
            </div>
        </div>
    </section>

    <Footer/>
        
    </>
  )
}

export async function getStaticProps() {
    const result = await client.query( { query: GET_BLOGS } )
      return{
        props: {
          posts: result.data.posts.nodes,
          page: result.data.page
        },
        revalidate: 10,
    }
}
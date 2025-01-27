import React from 'react'
import Footer from "../../Components/Global/Footer";
import HeadTags from "../../Components/Global/HeadTags";
import client from '../../Components/ApolloClient';
import Nav from "../../Components/Nav/Nav";
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

export default function Blog(props) {

    const { post } = props;

    const headData = {
        title : post.title + " - Berre Furniture",
        meta : post.excerpt.replace(/(<([^>]+)>)/gi, "").split("&").shift(),
        image : post.featuredImage !== null ? post.featuredImage.node.mediaItemUrl : ""
    }

  return (
    <>
    <HeadTags headData={headData}/>
    <Nav current="blogs"/>

    <section className="section post__hero">
        <div className="container">
            <div className="hero__wrap">
                <h3>Objavljeno na {post.date.split("T").shift()}</h3>
                <h1>{post.title}</h1>
                {/* <h2>{post.categories.nodes[0].name}</h2> */}
                <img src={post.featuredImage.node.sourceUrl} alt="" className="__main"/>
            </div>
        </div>
    </section>

    <section className="section post__single">
        <div className="container">
            <div className="single__wrap">
                
                <div className="single__txt">
                    <div dangerouslySetInnerHTML={{  __html: post.content }}/>
                </div>

            </div>
        </div>  
    </section>
        
    <section className="section posts__more">
        <div className="container">
            <div className="more__wrap">
                <div className="__top">
                    <p>Pročitajte više članaka</p>
                    <Link href="/blogs"><a><button className="button post__more">More <img src="/but-next.svg" alt="" /></button></a></Link>
                </div>
            
                    
                <div className="columns is-multiline posts__wrap">

                    {
                        post.categories.nodes[0].posts.nodes.length ? 
                        post.categories.nodes[0].posts.nodes.map(p =>
                            <div className="column is-6" key={p.id}>

                                <div className="single__wrap">

                                    <img src={p.featuredImage.node.sourceUrl} alt="" className="__feat"/>
                                    <div className="single__content">
                                        <h3>{p.title}</h3>
                                        <div dangerouslySetInnerHTML={{  __html: p.excerpt }}></div>
                                        <Link href={"/blogs/" + "/" + p.slug}><a><button className="button post__more">Vidi više <img src="/but-next.svg" alt="" /></button></a></Link>
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

Blog.getInitialProps = async function( context ){
    
    let{query: {slug} } = context;
    const id = slug ? slug : context.query.id;
  
  
    const POST_QUERY = gql` query Post( $id: ID! ) {
  
      post( id: $id, idType: SLUG ) {
          date
          excerpt
          slug
          title
          featuredImage {
            node {
              mediaItemUrl
              sourceUrl
              id
            }
          }
          id
          content
          databaseId
          categories {
            nodes {
              id
              slug
              name
              posts(first: 2) {
                nodes {
                    date
                    excerpt
                    slug
                    title
                    featuredImage {
                      node {
                        mediaItemUrl
                        sourceUrl(size: LARGE)
                        id
                      }
                    }
                    id
                    categories {
                      nodes {
                        id
                        name
                        slug
                      }
                    }
                    tags {
                      nodes {
                        id
                        name
                        slug
                      }
                    }
                  }
              }
            }
          }
          tags {
            nodes {
              id
              name
              slug
            }
          }
      }
    }`;
  
    const res = await client.query(({
       query:  POST_QUERY,
       variables: { id }
    }))
  
    return{
      post: res.data.post,
    }
  
}
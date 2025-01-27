import React from 'react'
import HeadTags from '../Components/Global/HeadTags'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Global/Footer';
import { gql, useQuery } from '@apollo/client';
import client from '../Components/ApolloClient';

export default function Shipping(props) {

    const { page } = props

    const seoData = page.seoTags.seoData

    const headData = {
        title : seoData.titleTag,
        meta : seoData.metaTag,
        image : seoData.seoImage.sourceUrl
    }  

  return (
    <>
        <HeadTags headData={headData}/>
        <Nav current=""/>

        <section className="section dynamic__hero">
            
            <div className="container">
                <div className="dynamic__hero__wrap">
                    <h1>{page.title}</h1>
                    <h2>Berre Furniture</h2>
                </div>
            </div>
        </section>

        <section className="section post__single">
            <div className="container">
                <div className="single__wrap">
                    
                    <div className="single__txt" style={{textAlign: "center"}}>
                        <div dangerouslySetInnerHTML={{  __html: page.content }}/>
                    </div>

                </div>
            </div>  
        </section>

        {/* FOOTER */}
        <Footer/>
    </>
  )
}


Shipping.getInitialProps = async function(){
    
    const PAGE_QUERY = gql` query ABOUT {
        page(id: "2521", idType: DATABASE_ID) {
            id
            slug
            title
            content
            seoTags {
              seoData {
                metaTag
                titleTag
                seoImage {
                  id
                  mediaItemUrl
                }
              }
            }
        }
    }`;
  
    const res = await client.query(({
       query:  PAGE_QUERY,
    }))
  
    return{
      page: res.data.page,
    }
  
}
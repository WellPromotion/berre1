import React from 'react'
import Footer from "../../Components/Global/Footer";
import HeadTags from "../../Components/Global/HeadTags";
import client from '../../Components/ApolloClient';
import Nav from "../../Components/Nav/Nav";
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import AllCat from '../../Components/AllProducts/AllCat';

export default function Blog(props) {

    const { style, arabic, compact, euro, italian, modern, turkish } = props;

    const seoData = style.seoTags.seoData;

    const headData = {
        title : seoData.titleTag,
        meta : seoData.metaTag,
        image : seoData.seoImage.sourceUrl
    }


  return (
    <>
    <HeadTags headData={headData}/>
    <Nav current="style"/>

    <section className="section cat__hero" style={{marginBottom: "3rem"}}>
        <div className="container">
            <div className="cat__hero__main" style={{ backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${style.styles.styleMainImage.mediaItemUrl})` }}>
                <div className="blogs__hero">
                    <h2>{style.title}</h2>
                    <p>{style.styles.styleExcerpt}</p>
                </div>
            </div>
            <div className="hero__breadcrumbs">
                <Link href="/"><a><p>Home</p></a></Link>
                <p className="bc__div">/</p>
                <Link href={`/${style.slug}`}><a className="__current"><p>{style.title}</p></a></Link>
            </div>
        </div>
    </section>



    <section className="section post__single">
        <div className="container">
            <div className="single__wrap">
                
                <div className="single__txt">
                    <div dangerouslySetInnerHTML={{  __html: style.content }}/>
                </div>

            </div>
        </div>  
    </section>

    {
        style.slug === "middle-eastern-furniture" ?
        <AllCat products={arabic}/>
        :
        style.slug === "italian-furniture" ?
        <AllCat products={italian}/>
        :
        style.slug === "european-furniture" ?
        <AllCat products={euro}/>
        :
        style.slug === "modern-furniture" ?
        <AllCat products={modern}/>
        :
        style.slug === "turkish-furniture" ?
        <AllCat products={turkish}/>
        :
        style.slug === "compact-furniture" ?
        <AllCat products={compact}/>
        :
        ""
    }
    
        

    <Footer/>
        
    </>
  )
}

Blog.getInitialProps = async function( context ){
    
    let{query: {slug} } = context;
    const id = slug ? slug : context.query.id;
  
  
    const STYLE_QUERY = gql` query Style( $id: ID! ) {
      style( id: $id, idType: SLUG ) {
        id
        slug
        title
        databaseId
        content
        styles {
          styleExcerpt
          styleMainImage {
            mediaItemUrl
            id
          }
        }
        seoTags {
            seoData {
                titleTag
                metaTag
                seoImage {
                sourceUrl(size: MEDIUM)
                id
                }
            }
        }
        }
        arabic: products(first: 9999, where: {tagId: 71, orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              databaseId
              onSale
              name
              productCategories {
                nodes {
                  ancestors {
                    nodes {
                      count
                    }
                  }
                  name
                  slug
                  id
                }
              }
              image {
                id
                title
                sourceUrl(size: SHOP_SINGLE)
              }
              attributes {
                nodes {
                  id
                  name
                }
              }
              ... on SimpleProduct {
                id
                price
                regularPrice
                stockStatus
              }
              ... on VariableProduct {
                id
                price
                regularPrice
                stockStatus
                productAdditional {
                    additionalProduct {
                        productThumbnail {
                        mediaItemUrl
                        }
                    }
                }
              }
              slug
            }
        }
        compact: products(first: 9999, where: {tagId: 76, orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              databaseId
              onSale
              name
              productCategories {
                nodes {
                  ancestors {
                    nodes {
                      count
                    }
                  }
                  name
                  slug
                  id
                }
              }
              image {
                id
                title
                sourceUrl(size: SHOP_SINGLE)
              }
              attributes {
                nodes {
                  id
                  name
                }
              }
              ... on SimpleProduct {
                id
                price
                regularPrice
                stockStatus
              }
              ... on VariableProduct {
                id
                price
                regularPrice
                stockStatus
                productAdditional {
                    additionalProduct {
                      productThumbnail {
                        mediaItemUrl
                      }
                    }
                  }
              }
              slug
            }
        }
        euro: products(first: 9999, where: {tagId: 73, orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              databaseId
              onSale
              name
              productCategories {
                nodes {
                  ancestors {
                    nodes {
                      count
                    }
                  }
                  name
                  slug
                  id
                }
              }
              image {
                id
                title
                sourceUrl(size: SHOP_SINGLE)
              }
              attributes {
                nodes {
                  id
                  name
                }
              }
              ... on SimpleProduct {
                id
                price
                regularPrice
                stockStatus
              }
              ... on VariableProduct {
                id
                price
                regularPrice
                stockStatus
                productAdditional {
                    additionalProduct {
                      productThumbnail {
                        mediaItemUrl
                      }
                    }
                  }
              }
              slug
            }
        }
        italian: products(first: 9999, where: {tagId: 72, orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              databaseId
              onSale
              name
              productCategories {
                nodes {
                  ancestors {
                    nodes {
                      count
                    }
                  }
                  name
                  slug
                  id
                }
              }
              image {
                id
                title
                sourceUrl(size: SHOP_SINGLE)
              }
              attributes {
                nodes {
                  id
                  name
                }
              }
              ... on SimpleProduct {
                id
                price
                regularPrice
                stockStatus
              }
              ... on VariableProduct {
                id
                price
                regularPrice
                stockStatus
                productAdditional {
                    additionalProduct {
                      productThumbnail {
                        mediaItemUrl
                      }
                    }
                  }
              }
              slug
            }
        }
        modern: products(first: 9999, where: {tagId: 74, orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              databaseId
              onSale
              name
              productCategories {
                nodes {
                  ancestors {
                    nodes {
                      count
                    }
                  }
                  name
                  slug
                  id
                }
              }
              image {
                id
                title
                sourceUrl(size: SHOP_SINGLE)
              }
              attributes {
                nodes {
                  id
                  name
                }
              }
              ... on SimpleProduct {
                id
                price
                regularPrice
                stockStatus
              }
              ... on VariableProduct {
                id
                price
                regularPrice
                stockStatus
                productAdditional {
                    additionalProduct {
                      productThumbnail {
                        mediaItemUrl
                      }
                    }
                  }
              }
              slug
            }
        }
        turkish: products(first: 9999, where: {tagId: 75, orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              databaseId
              onSale
              name
              productCategories {
                nodes {
                  ancestors {
                    nodes {
                      count
                    }
                  }
                  name
                  slug
                  id
                }
              }
              image {
                id
                title
                sourceUrl(size: SHOP_SINGLE)
              }
              attributes {
                nodes {
                  id
                  name
                }
              }
              ... on SimpleProduct {
                id
                price
                regularPrice
                stockStatus
              }
              ... on VariableProduct {
                id
                price
                regularPrice
                stockStatus
                productAdditional {
                    additionalProduct {
                      productThumbnail {
                        mediaItemUrl
                      }
                    }
                  }
              }
              slug
            }
        }
        
    }`;
  
    const res = await client.query(({
       query:  STYLE_QUERY,
       variables: { id }
    }))
  
    return{
      style: res.data.style,
      arabic: res.data.arabic.nodes,
      compact: res.data.compact.nodes,
      euro: res.data.euro.nodes,
      italian: res.data.italian.nodes,
      modern: res.data.modern.nodes,
      turkish: res.data.turkish.nodes,
    }
  
}
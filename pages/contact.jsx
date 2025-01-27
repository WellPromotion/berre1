import React from 'react';
import Footer from "../Components/Global/Footer";
import HeadTags from "../Components/Global/HeadTags";
import Nav from "../Components/Nav/Nav";
import Link from 'next/link'
import Form from '../Components/Contact/Form';
import GET_CONTACT from '../queries/pages/contact';
import client from '../Components/ApolloClient';

export default function kontakt( props ) {

    const { page, seo } = props;

    const pageData = page.contactPage.contactInformation
    const seoData = seo.seoTags.seoData

    // console.log("PAGE", pageData)
    // console.log("SEO", seoData)

    const headData = {
        title : seoData.titleTag,
        meta : seoData.metaTag,
        image : seoData.seoImage.sourceUrl
    }


  return (
  <>
    <HeadTags headData={headData}/>
    <Nav current="kontakt"/>
    
    <section className="section cat__hero">
        <div className="container">
            <div className="cat__hero__main" style={{ backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${pageData.heroImage.sourceUrl})` }}>
                <h2>{pageData.heroText}</h2>
            </div>
            <div className="hero__breadcrumbs">
                <Link href="/"><a><p>Home</p></a></Link>
                <p className="bc__div">/</p>
                <Link href={`/kontakt`}><a className="__current"><p>Contact</p></a></Link>
            </div>
        </div>
    </section>

    <section className="section __contact-markets">
        <div className="container">
            <div className="__markets-wrap">
                <div className="__wrap">
                    <h2>{pageData.firstParagraphHeader}</h2>
                    <div dangerouslySetInnerHTML={{ __html: pageData.firstParagraphText }} />
                </div>

                <div className="__market" style={{ backgroundImage:`url(${pageData.locationOneImage.sourceUrl})`, backgroundPosition: "left", backgroundSize: "50%" }}>
                    <div className="__market-txt">
                        <div className="__top">
                            <h4>{pageData.locationOneType}</h4>
                            <h3>{pageData.locationOneName}</h3>
                            {/* <p>{pageData.locationOneDetails}</p> */}
                        </div>

                        <div className="__points">
                            <div className="__point">
                                <img src="/contact-clock.svg" alt="" />
                                <p>{pageData.locationOneOpeningOne}<br/>{pageData.locationOneOpeningTwo}</p>
                                  </div>
                                  <div className="__point">
                                <img src="/telephone-call.png" alt="" />
                               <a href="tel:+16475323839"> <p>{pageData.locationOneDetails}</p></a>
                            </div>
                            <div className="__point">
                                <img src="/contact-pin.svg" alt="" />
                                <a href="https://goo.gl/maps/EVJrycSPG5VLVzhg7"><p>{pageData.locationOneLocation}</p></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="__market" style={{ backgroundImage:`url(${pageData.locationTwoImage.sourceUrl})`, backgroundPosition: "right", backgroundSize: "50%" }}>
                    <div className="__market-txt">
                        <div className="__top">
                            <h4>{pageData.locationTwoType}</h4>
                            <h3>{pageData.locationTwoName}</h3>
                            {/* <p>{pageData.locationTwoDetails}</p> */}
                        </div>

                        <div className="__points">
                            <div className="__point">
                                <img src="/contact-clock.svg" alt="" />
                                <p>{pageData.locationTwoOpeningOne}<br/>{pageData.locationTwoOpeningTwo}</p>
                                  </div>
                                  <div className="__point">
                                <img src="/telephone-call.png" alt="" />
                               <a href="tel:+16476423773"> <p>{pageData.locationTwoDetails}</p></a>
                            </div>
                            <div className="__point">
                                <img src="/contact-pin.svg" alt="" />
                                <a href="https://goo.gl/maps/3mmUmqM5VCNQAdDb9"><p>{pageData.locationTwoLocation}</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                      
                <div className="__market" style={{ backgroundImage:`url(${pageData.locationThreeImage.sourceUrl})`, backgroundPosition: "right", backgroundSize: "28%" }}>
                    <div className="__market-txt">
                        <div className="__top">
                            <h4>{pageData.locationThreeType}</h4>
                            <h3>{pageData.locationThreeName}</h3>
                            {/* <p>{pageData.locationTwoDetails}</p> */}
                        </div>

                        <div className="__points">
                            <div className="__point">
                                <img src="/contact-clock.svg" alt="" />
                                <p>{pageData.locationThreeOpeningOne}<br/>{pageData.locationThreeOpeningTwo}</p>
                                  </div>
                                  <div className="__point">
                                <img src="/telephone-call.png" alt="" />
                               <a href="tel:613 890 7290"> <p>{pageData.locationThreeDetails}</p></a>
                            </div>
                            <div className="__point">
                                <img src="/contact-pin.svg" alt="" />
                                <a href="https://goo.gl/maps/9doPsr9PJyn3qfKE9"><p>{pageData.locationThreeLocation}</p></a>
                            </div>
                        </div>
                    </div>
                </div>

                     
                      
            </div>
              </div>
              <div className="container mapContainer">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.3199203032777!2d-79.49745469999999!3d43.786974199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f41e86b7007%3A0x67971c99b0059fc3!2sBerre%20-%20Turkish%20Furniture%20Vaughan!5e0!3m2!1sen!2sba!4v1669103529355!5m2!1sen!2sba" width="600" height="450"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
              <div className="container mapContainer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.644568750361!2d-79.57265437009487!3d43.59311919756871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47b1a65a6689%3A0x58312792381d32aa!2sBerre!5e0!3m2!1sen!2sba!4v1672261606832!5m2!1sen!2sba" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
              <div className="container mapContainer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28911.431940246217!2d-75.70760569956704!3d45.39285212807529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0521bdab3233%3A0xca59d5b64c14f545!2sBerre%20-%20Turkish%20Furniture%20Ottawa!5e0!3m2!1sen!2sba!4v1672261945486!5m2!1sen!2sba" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
    </section>

    {/* FORM */}

    <Form miscText={pageData}/>



    <Footer/>
  </>
  );
}

export async function getStaticProps() {
    const result = await client.query( { query: GET_CONTACT } )
    return{
      props: {
        page: result.data.page,
        seo: result.data.seo,
      },
      revalidate: 10,
    }
  }
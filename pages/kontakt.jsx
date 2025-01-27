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
                <Link href={`/kontakt`}><a className="__current"><p>Kontakt</p></a></Link>
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

                <div className="__market" style={{ backgroundImage:`url(${pageData.locationOneImage.sourceUrl})` }}>
                    <div className="__market-txt">
                        <div className="__top">
                            <h4>{pageData.locationOneType}</h4>
                            <h3>{pageData.locationOneName}</h3>
                            <p>{pageData.locationOneDetails}</p>
                        </div>

                        <div className="__points">
                            <div className="__point">
                                <img src="/contact-clock.svg" alt="" />
                                <p>{pageData.locationOneOpeningOne}<br/>{pageData.locationOneOpeningTwo}</p>
                            </div>
                           
                                  <div className="__point">
                                <img className='pointIcon' src="/contact-pin.svg" alt="" />
                              <a href="https://www.google.com/maps/place/Salon+Namje%C5%A1taja+Berre/@43.83076,18.338308,18z/data=!4m6!3m5!1s0x4758cba0b8f9114b:0x66a9ee08927a68e0!8m2!3d43.8307598!4d18.3383083!16s%2Fg%2F11v18w52ql?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"><p>{pageData.locationTwoLocation}</p></a>  
                                  </div>
                                  {/* <div className="__point">
                                <img className='pointIcon' src="/contact-pin.svg" alt="" />
                            <a href="https://www.google.com/maps/place/Salon+Namje%C5%A1taja+Berre+-+Novo+Sarajevo/@43.855462,18.3872178,20.03z/data=!4m15!1m8!3m7!1s0x4758c91621e22a27:0x92f45ff3ffeb125!2sKolodvorska+12,+Sarajevo+71000!3b1!8m2!3d43.8548174!4d18.385781!16s%2Fg%2F11c11wjrdy!3m5!1s0x4758c9eef369cf99:0x85e73d7909ea7b7a!8m2!3d43.8554115!4d18.3874866!16s%2Fg%2F11lpj0hdk2?entry=ttu"><p>{pageData.locationOneLocation}</p></a>    
                                  </div> */}
                                  
                        </div>
                    </div>
                </div>

                {/* <div className="__market" style={{ backgroundImage:`url(${pageData.locationTwoImage.sourceUrl})` }}>
                    <div className="__market-txt">
                        <div className="__top">
                            <h4>{pageData.locationTwoType}</h4>
                            <h3>{pageData.locationTwoName}</h3>
                            <p>{pageData.locationTwoDetails}</p>
                        </div>

                        <div className="__points">
                            <div className="__point">
                                <img src="/contact-clock.svg" alt="" />
                                <p>{pageData.locationTwoOpeningOne}<br/>{pageData.locationTwoOpeningTwo}</p>
                            </div>
                            <div className="__point">
                                <img src="/contact-pin.svg" alt="" />
                                <p>{pageData.locationTwoLocation}</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                      
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.0540335573482!2d18.324656788838226!3d43.84265977337119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cba0b8f9114b%3A0x66a9ee08927a68e0!2sSalon%20Namje%C5%A1taja%20Berre%20-%20Stup!5e0!3m2!1sen!2sba!4v1695901041343!5m2!1sen!2sba" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      
                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.020127126129!2d18.387486600000003!3d43.855411499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9eef369cf99%3A0x85e73d7909ea7b7a!2sNamje%C5%A1taj%20Berre%20-%20Salon%20namje%C5%A1taja!5e0!3m2!1sen!2sba!4v1661776356450!5m2!1sen!2sba" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       */}
                      

            </div>
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
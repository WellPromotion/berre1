import React, {useState} from 'react'

export default function Form(props) {

    const { miscText } = props;

    const [formOption, setFormOption] = useState(1);

    return (
        <section className="section contact__form">
            <div className="container">
                <div className="__form-wrap">
                    <div className="__wrap">
                        <h2>{miscText.contactFormHeader}</h2>
                        <div className="__divider"></div>
                        <div dangerouslySetInnerHTML={{ __html: miscText.contactFormText }} />
                    </div>

                    <div className="__buttons-wrap">
                        <button className={formOption === 1 ? "button __form __active" : "button __form"} onClick={()=> setFormOption(1)}>
                            <div className="img__wrap">
                                <img src="/contact-button.svg" alt=""/>
                            </div>
                            Product
                        </button>
                        <button className={formOption === 2 ? "button __form __active" : "button __form"} onClick={()=> setFormOption(2)}>
                            <div className="img__wrap">
                                <img src="/contact-button.svg" alt=""/>
                            </div>
                            Service
                        </button>
                        <button className={formOption === 3 ? "button __form __active" : "button __form"} onClick={()=> setFormOption(3)}>
                            <div className="img__wrap">
                                <img src="/contact-button.svg" alt=""/>
                            </div>
                            Question
                        </button>
                        
                    </div>
                    <div className="__buttons-wrap __2">
                        <button className={formOption === 4 ? "button __form __active" : "button __form"} onClick={()=> setFormOption(4)}>
                            <div className="img__wrap">
                                <img src="/contact-button.svg" alt=""/>
                            </div>
                            Installation
                        </button>
                        <button className={formOption === 5 ? "button __form __active" : "button __form"} onClick={()=> setFormOption(5)}>
                            <div className="img__wrap">
                                <img src="/contact-button.svg" alt=""/>
                            </div>
                            Delivery & misc
                        </button>
        
                    </div>

                    <div className="__form-main">
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <p>First name</p>
                                <input type="text" className="input" placeholder="John"/>
                            </div>
                            <div className="column is-6">
                                <p>Last name</p>
                                <input type="text" className="input" placeholder="Doe"/>
                            </div>
                            <div className="column is-6">
                                <p>Email Address</p>
                                <input type="email" className="input" placeholder="help@berre.ca"/>
                            </div>
                            <div className="column is-6">
                                <p>Phone number</p>
                                <input type="email" className="input" placeholder="+334 249 2994"/>
                            </div>
                            <div className="column is-12">
                                <p>Your message</p>
                                <textarea name="" id="" cols="30" rows="10" className="textarea" placeholder="Message"></textarea>
                            </div>
                            <div className="column is-12">
                                <input type="submit" value="Send your message" className="__submit"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

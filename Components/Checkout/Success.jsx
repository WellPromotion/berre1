import React from 'react'

export default function Success(props) {
    const { response } = props;

    if ( ! response ) {
		return null;
	}

    return (
		<>
			<section className="section __account sec__home">
                <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="home__watermark"/>
                <div className="container">
                    <div className="account__placeholder">
                        <div className="account__wrap">
                            <h1><span>Thank You</span> - For your purchase</h1>
                            <p>Thank you for using Berre Furniture, and email with an order summary will be sent soon!</p>
                        </div>
                    </div>
                </div>
            </section>
			
		</>
	)
}

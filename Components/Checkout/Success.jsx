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
                            <h1><span>Hvala ti</span> - Za vašu kupovinu</h1>
                            <p>Hvala vam što koristite Berre namještaj, a e-mail sa sažetkom narudžbe će uskoro biti poslan!</p>
                        </div>
                    </div>
                </div>
            </section>
			
		</>
	)
}

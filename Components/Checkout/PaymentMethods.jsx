import {useState} from 'react';

const PaymentMethods = ( { input } ) => {

	const [ activeInfo, setActiveInfo ] = useState(0)

	return (
		<>
			{/* Cash on Delivery */}
			<div className="checkbox-wrap" >
				<label className="checkbox">
					<input value="cod" className="checkbox" name="paymentMethod" type="radio" onClick={()=>setActiveInfo(0)} />
					<span className="checkbox-txt">Pay on delivery</span>
				</label>
			</div>

			{/*Pay with Paypal*/}
			{/* <div className="checkbox-wrap">
				<label className="checkbox">
					<input onChange={ handleOnChange } value="paypal" className="checkbox" name="paymentMethod" type="radio" onClick={()=>setActiveInfo(0)}/>
					<span className="checkbox-txt">Pay with paypal</span>
				</label>
			</div> */}

			{/* BACS */}
			{/* <div className="checkbox-wrap" >
				<label className="checkbox">
					<input onChange={ handleOnChange } value="bacs" className="checkbox" name="paymentMethod" type="radio" onClick={()=>setActiveInfo(0)}/>
					<span className="checkbox-txt">Direct Bank Payment</span>
				</label>
			</div> */}
			
		</>
	)
};

export default PaymentMethods;

import React from 'react';
import countryList from './country-list';

const Billing = ( { input, handleOnChange } ) => {

	return (
		<React.Fragment>
			<div className="__billing">
				<div className="">
					<div className="control">
						<label htmlFor="first-name" className="label">
							Ime
							<abbr className="required" title="required">*</abbr>
						</label>
						<input onChange={ handleOnChange } value={ input.firstName } type="text" name="firstName" className="input" id="first-name" placeholder="Vaše ime" required/>
					</div>
				</div>
				<div className="">
					<div className="control">
						<label htmlFor="last-name" className="label">
						Prezime
							<abbr className="required" title="required">*</abbr>
						</label>
						<input onChange={ handleOnChange } value={ input.lastName } type="text" name="lastName" className="input" id="last-name" placeholder="Tvoje prezime" required/>
					</div>
				</div>
			
			{/* Company Name */}
			<div className="control">
				<label htmlFor="first-name" className="label">Ime kompanije</label>
				<input onChange={ handleOnChange } value={ input.company } type="text" name="company" className="input" id="company" placeholder="Naziv kompanije"/>
			</div>
			{/* Country */}
			<div className="control">
				<label className="label" htmlFor="country-select">
					Zemlju:
					<abbr className="required" title="required">*</abbr>
				</label>
				<div className="select is-fullwidth">
					<select onChange={ handleOnChange } value={ input.country } name="country" id="country-select" required>
						<option value="">Odaberite svoju zemlju</option>
						{ countryList.length && (
							countryList.map( ( country, index ) => (
								<option key={ `${country}-${index}` } value={ country.countryCode }>{ country.countryName }</option>
							) )
						) } 
					</select>
				</div>
			</div>
			{/* Street Address */}
			<div className="control">
				<label htmlFor="street-address" className="label">
					Adresa
					<abbr className="required" title="required">*</abbr>
				</label>
				<input type="text" onChange={ handleOnChange } value={ input.address1 } name="address1" placeholder="Vaša adresa" className="input" id="street-address" required/>
			</div>
			{/* Town/City */}
			<div className="control">
				<label htmlFor="city" className="label">
					Grad
					<abbr className="required" title="required">*</abbr>
				</label>
				<input onChange={ handleOnChange } value={ input.city } type="text" name="city" className="input" id="city" required/>
			</div>
			{/* Post Code */}
			<div className="control">
				<label htmlFor="post-code" className="label">
					Poštanski broj
					<abbr className="required" title="required">*</abbr>
				</label>
				<input onChange={ handleOnChange } value={ input.postcode } type="text" name="postcode" className="input" id="post-code" required/>
			</div>
			{/*Phone & Email*/}
			<div className="columns">
				<div className="column is-6">
					<div className="control">
						<label htmlFor="phone" className="label">
							Telefon (opciono)
						</label>
						
						<input onChange={ handleOnChange } value={ input.phone } type="text" name="phone" className="input" id="phone"/>
					
					</div>
				</div>
				<div className="column is-6">
					<div className="control">
						<label htmlFor="email" className="label">
							E-Mail
							<abbr className="required" title="required">*</abbr>
						</label>
						<input onChange={ handleOnChange } value={ input.email } type="email" name="email" className="input" id="email" required/>
					</div>
				</div>
			</div>
            </div>
		</React.Fragment>
	);
};

export default Billing;

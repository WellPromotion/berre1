import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import CONTACT_MUTATION from '../../queries/pages/contact-form';

export default function Form(props) {
    const { miscText } = props;
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ success: false, message: '' });
    const [errors, setErrors] = useState({});

    const [submitForm, { loading, error }] = useMutation(CONTACT_MUTATION);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Ime je obavezno';
        if (!formData.lastName) newErrors.lastName = 'Prezime je obavezno';
        if (!formData.email) newErrors.email = 'E-mail adresa je obavezna';
        if (!formData.message) newErrors.message = 'Poruka je obavezna';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await submitForm({
                variables: {
                    input: {
                        to: "contact@berre.ba", // Replace with the recipient email
                        from: formData.email,
                        subject: "Nova poruka sa web stranice berre.ba",
                        body: `Ime: ${formData.firstName} ${formData.lastName}<br>
                        Email: ${formData.email}<br>
                        Telefon: ${formData.phone}<br>
                        Poruka: ${formData.message}`,
                    },
                },
            });

            if (response.data.sendEmail.sent) {
                setFormStatus({ success: true, message: 'Poruka uspješno poslana. Hvala vam na javljanju!' });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setErrors({});
            } else {
                setFormStatus({ success: false, message: 'Slanje poruke nije uspjelo ' + response.data.sendEmail.message });
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            setFormStatus({ success: false, message: 'Došlo je do greške prilikom slanja obrasca: ' + err.message });
        }
    };

    return (
        <section className="section contact__form">
            <div className="container">
                <div className="__form-wrap">
                    <div className="__wrap">
                        <h2>{miscText.contactFormHeader}</h2>
                        <div className="__divider"></div>
                        <div dangerouslySetInnerHTML={{ __html: miscText.contactFormText }} />
                    </div>
                    <div className="__form-main">
                    <form onSubmit={handleSubmit}>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <p>Ime</p>
                                <input
                                    type="text"
                                    className="input"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                            </div>
                            <div className="column is-6">
                                <p>Prezime</p>
                                <input
                                    type="text"
                                    className="input"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                />
                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                            </div>
                            <div className="column is-6">
                                <p>E-mail adresa</p>
                                <input
                                    type="email"
                                    className="input"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contact@berre.ba"
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="column is-6">
                                <p>Broj telefona</p>
                                <input
                                    type="text"
                                    className="input"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+38762 492 994"
                                />
                            </div>
                            <div className="column is-12">
                                <p>Vaša poruka</p>
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="10"
                                    className="textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Poruka..."
                                ></textarea>
                                {errors.message && <p className="error">{errors.message}</p>}
                            </div>
                            <div className="column is-12">
                                <input
                                    type="submit"
                                    value={loading ? "Slanje..." : "Pošaljite svoju poruku"}
                                    className="__submit"
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        {error && <p className="error">Došlo je do greške: {error.message}</p>}
                        {formStatus.message && (
                            <p className={formStatus.success ? "success" : "error"}>{formStatus.message}</p>
                        )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

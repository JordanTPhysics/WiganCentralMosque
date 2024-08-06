import React from "react";

export default function Contact() {

    return (

        <div className="contact-section bg-secondary m-3 p-3 rounded-md">

            <h1 className="text-heading">Contact Us</h1>
            <p className="text-heading">For any inquiries, please call or email us:</p>
            <ul>
                <li className="text-heading">
                    <a className="text-heading" href="https://maps.app.goo.gl/XgjYja8afdffop7w9" target="_blank">📍240 Warrington Rd, Ince-in-Makerfield, Wigan WN3 4NH</a><br />
                </li>
                {/* <li className="text-heading">
                    <a className="text-heading" href="tel:12345 678910" target="_blank">📞 12345 678910</a>
                </li> */}
                <li className="text-heading">
                    <a className="text-heading" href="mailto:info@impactcommunity.uk" target="_blank">📧 wigancitymosque@gmail.com</a>
                </li>
            </ul>

        </div>
    );
}

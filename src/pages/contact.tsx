"use client";

import React from "react";
import Link from "next/link";

export default function Contact() {

  return (

    <main className="contact-section bg-secondary m-3 p-3 rounded-md">
      <div>
        <h1 className="text-heading">Contact Us</h1>
        <p className="text-heading">For any inquiries, please email us:</p>
        <ul>
          <li className="text-heading">
            <Link className="text-heading" href="https://maps.app.goo.gl/XgjYja8afdffop7w9" target="_blank">📍240 Warrington Rd, Ince-in-Makerfield, Wigan WN3 4NH</Link><br />
          </li>
          {/* <li className="text-heading">
                    <Link className="text-heading" href="tel:12345 678910" target="_blank">📞 12345 678910</Link>
                </li> */}
          <li className="text-heading">
            <Link className="text-heading" href="mailto:info@impactcommunity.uk" target="_blank">📧 info@impactcommunity.uk</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

"use client"
import React, { useState } from 'react'

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        number: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleChangeTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

        function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log(form)
        }

        return (
            <div className='text-3xl text-center text-menu'>
                Contact form Coming soon. Please reach out via email or social media.
            </div>
            // <main className="contact-section bg-secondary m-3 p-3 rounded-md">

            //     <form onSubmit={handleSubmit} className="text-nowrap justify flex flex-col text-center items-center">
            //         <h2 className="text-heading">Fill in the form to get in touch</h2> <br />
            //         <label htmlFor="name" className="text-heading">Name</label>
            //         <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className="border border-3 border-heading rounded-md p-2 w-60" />
            //         <label htmlFor="email" className="text-heading">Email</label>
            //         <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="border border-3 border-heading rounded-md p-2 w-60" />
            //         <label htmlFor="number" className="text-heading">Phone Number</label>
            //         <input type="tel" name="number" id="number" value={form.number} onChange={handleChange} className="border border-3 border-heading rounded-md p-2 w-60" />
            //         <label htmlFor="message" className="text-heading">Message</label>
            //         <textarea name="message" id="message" value={form.message} onChange={handleChangeTextArea} className="border border-3 border-heading rounded-md p-2 w-60" />
            //         <button type="submit" className="bg-primary text-heading p-2 rounded-md">Submit</button>
            //     </form>
            // </main>
        )
    }

export default ContactForm

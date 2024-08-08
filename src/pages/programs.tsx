import React from "react";

import Card from "../components/Card";
import "../styles/Card.css";

export default function Programs() {

    return (

        <main className="bg-primary/90 rounded-sm w-screen p-4">
            <h1 className="text-5xl text-heading">Our Programs and Events</h1>
            <p className="text-lg text-menu/90">Programs and Events Coming soon! Head over to our Donations section to speed up the process!</p>
            {/* <p className="">We offer a range of programs for all ages:</p>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Card title="Hifz Class" description="Work towards Full Qur'an Memorization" image="/resources/images\Quran.jpg" />
                    <Card title="Qur'an Class" description="Learn to read the Qur'an" image="/resources/images\salaah.jpg" />
                    <Card title="Aalim Class" description="Study the Islamic Sciences" image="/resources/images\WCMLogo.jpeg" />
                </div>
            </div> */}
        </main>
    );
}
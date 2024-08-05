import React from "react";
import Contact from "./Contact";

export default function Footer() {
    const buttonClassName = "text-heading text-xs md:text-lg lg:text-lg m-0 p-0 md:p-2 lg:p-2 md:m-2 lg:m-2 lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm custom-link text-nowrap transition-all";

    return (

        <footer className="w-full flex flex-grow bg-primary">

            <Contact />
                <ul className="navigation-menu flex flex-wrap justify-center lg:m-3 sm:m-1 md:m-2 px-0 md:col-span-5 lg:col-span-5 sm:col-span-1 sm:row-span-1">
                    <li>
                        <a className={buttonClassName} href="#">About</a>
                    </li>
                    <li>
                        <a className={buttonClassName} href="#">Donate</a>
                    </li>

                </ul>
                <div>
                    <img src="/resources/images/WCMLogo-removebg.png" alt="logo"></img>
                </div>
                <div>
                     &copy {new Date().getFullYear()}, Icons from Flaticon
                <a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/social-network" title="social network icons">Social network icons created by riajulislam - Flaticon</a>
                </div>
        </footer >
    );
}
"use client";

import React, { useState, useCallback, useEffect } from "react";
import "../styles/Header.css";
import Contact from "./Contact";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { ContactModal } from "./ContactModal";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });

const useMediaQuery = (width: Number) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      if (media.addEventListener) {
        media.addEventListener("change", updateTarget);
      } else {
        // compatibility for browser that dont have addEventListener
        media.addListener(updateTarget);
      }
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
      if (media.removeEventListener) {
        return () => media.removeEventListener('change', updateTarget);
      } else {
        // compatibility for browser that dont have removeEventListener
        return () => media.removeListener(updateTarget);
      }
    }, []);
  
    return targetReached;
  };

export default function Header() {

    const isBreakpoint = useMediaQuery(768);
    const buttonClassName = "text-heading text-xs md:text-lg lg:text-lg m-0 p-0 md:p-2 lg:p-2 md:m-2 lg:m-2 lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm lg:m-3 md:m-2 sm:m-1 m-2 custom-link text-nowrap transition-all";
    const listClassName = "navigation-menu flex flex-wrap flex-grow justify-center lg:m-3 sm:m-1 md:m-2 md:col-span-5 lg:col-span-5 sm:col-span-1 sm:row-span-1";
    return (
        <header className="w-full grid md:grid-cols-8 lg:grid-cols-8 bg-primary">
            <div className="logo  md:col-span-1 lg:col-span-1 sm:row-span-2">
                <a href="#">
                    <img src="/resources/images\WCMLogo-removebg.png" alt="logo"></img>
                </a>
            </div>
            <ul className={listClassName}>
                <li >
                    <a href="/" className={buttonClassName}>Home</a>
                </li>
                <li >
                    <a href="/donate" className={buttonClassName}>Donate </a>
                </li>
                <li >
                    <a href="/programs" className={buttonClassName}>Programs </a>
                </li>
                <li >
                    <a href="/about" className={buttonClassName}> About Us </a>
                </li>
                <li >
                    <a href="/contact" className={buttonClassName}>Timetable </a>
                </li>
                <li >
                    <ThemeSwitcher />
                </li>
            </ul>
            <div className="md:col-span-2 lg:col-span-2 sm:col-span-1 sm:row-span-1 justify-center text-center ">
                {isBreakpoint ?  <ContactModal/> : <Contact /> }
                
            </div>
        </header>
    );
}
"use client";

import React, { useState } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-b-2 border-black">

            <div className="flex justify-between py-3 ">
                <div className="sm:hidden">
                    <a className="ml-6 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>MENU</a>
                </div>
                <div className="hidden sm:block">
                    <a className="ml-6 cursor-pointer">SHOP</a>
                    <a className="ml-6 cursor-pointer">ABOUT</a>
                </div>
                <div>
                    <p>RHODE</p>
                </div>
                <div className="hidden sm:block">
                    <a className="mr-6 cursor-pointer">LOGIN</a>
                    <a className="mr-6 cursor-pointer">CART(0)</a>
                </div>
                <div className="sm:hidden">
                    <a className="mr-6 cursor-pointer">CART(0)</a>
                </div>
            </div>

            {/* This is the expandable menu on mobile */}
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out sm:hidden  ${menuOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="flex flex-col overflow-hidden">
                    <a className="cursor-pointer pl-6 py-2">SHOP</a>
                    <a className="cursor-pointer pl-6 py-2">ABOUT</a>
                    <a className="cursor-pointer pl-6 py-2">LOGIN</a>
                </div>
            </div>

        </div>

    );
}

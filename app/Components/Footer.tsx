import React from "react";

export default function Footer() {
    return (
        <footer className="md:border-t-2 md:border-black">
            {/* Top sections: Two divs taking 50% on desktop, stack on mobile */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:h-full">
                    {/* Left side: Newsletter sign up */}
                    <div className="w-full md:w-1/2 py-8 px-6 border-b-2 md:border-b-0 border-black">
                        <p className="font-bold uppercase">Newsletter</p>

                        {/* Newsletter sign-up description */}
                        <div className="mt-4">
                            <p className="text-sm mb-4">
                                Stay in touch. Join our newsletter and get 15% off your first order by subscribing.
                            </p>
                            
                            {/* Form container set to 50% width */}
                            <div className="w-1/2">
                                <form className="flex items-center border-b border-black">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-2 bg-transparent uppercase tracking-wide focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="p-2 uppercase tracking-wide font-bold hover:text-gray-600"
                                    >
                                        Join
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 py-8 px-6 md:border-l-2 border-black">
                        <div className="flex flex-col md:flex-row md:justify-between">
                            {/* Left side: ABOUT US */}
                            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                                <p className="font-bold mb-2">ABOUT US</p>
                                <ul className="space-y-2">
                                    <li><a className="font-light hover:underline">OUR STORY</a></li>
                                    <li><a className="font-light hover:underline">JOURNAL</a></li>
                                    <li><a className="font-light hover:underline">OUR PRINCIPLES</a></li>
                                </ul>
                            </div>

                            {/* Right side: FOLLOW US */}
                            <div className="w-full md:w-1/2">
                                <p className="font-bold mb-2">FOLLOW US</p>
                                <ul className="space-y-2">
                                    <li><a className="font-light hover:underline">FACEBOOK</a></li>
                                    <li><a className="font-light hover:underline">INSTAGRAM</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom border spanning full width */}
            <div className="border-t-2 border-black"></div>

            {/* Bottom section: Full-width on all devices */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 text-center pb-4">
                <p className="text-sm whitespace-nowrap">RHODE © 2024</p> {/* Added whitespace-nowrap */}
            </div>
        </footer>
    );
}

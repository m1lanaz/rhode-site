import React from "react";

export default function Footer() {
    return (
        <footer className="md:border-t-2 md:border-black">
            {/* Top sections: Two divs taking 50% on desktop, stack on mobile */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:h-full">
                    <div className="w-full md:w-1/2 py-8 px-6">
                        <p className="font-bold">Test</p>
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
                <p className="text-sm">RHODE © 2024</p>
            </div>
        </footer>
    );
}

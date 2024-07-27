import Image from "next/image";

export default function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:h-full">
            <div className="relative md:h-full lg:h-[65vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Imgs/MainImage.webp')" }}>
            </div>
            <div className="pl-4 pt-10 pb-8 border-l-0 border-b-2 flex flex-col justify-between md:border-l-2 md:border-b-0 border-black">
                <div>
                    <p className="text-4xl md:text-5xl lg:text-6xl leading-10 tracking-wide pb-10 md:pb-3">
                        FROM NATURE<br />TO YOUR SKIN</p>
                </div>
                <div>
                    <div className="w-[70%] lg:w-[65%]">
                        <p className="text-xl leading-relaxed md:pb-6 pb-7">
                            We craft SKINCARE using the most exquisite ingredients from the plant, earth, and mineral realms. Only organic botanicals and our formulas comply with the most stringent of clean beauty standards. Each of our products' efficiency is clinically proven through an extensive battery of tests.
                        </p>
                    </div>

                    <a className=" underline  underline-offset-4 decoration-1">SHOP NOW</a>
                </div>

            </div>
        </div>


    );
}

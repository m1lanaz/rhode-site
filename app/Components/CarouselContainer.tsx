import React from "react";
import ProductCards from "./ProductCard";

interface Product {
    image: string;
    name: string;
    description: string;
    price: string;
}

interface DisplayData {
    title: string;
    titleCut1: string;
    titleCut2: string;       
    linkTitle: string;
    linkUrl: string;
}

interface CarouselContainerProps {
    data: DisplayData;
    products: Product[];
}

export default function CarouselContainer({ data, products }: CarouselContainerProps) {
    const smallScreenProducts = products.slice(0, 2);

    return (
        <section>
            {/* Displayed on medium screens and larger */}
            <section className="hidden md:grid grid-cols-4 px-4 border-y-2 border-black">
                <div className="col-span-1 pt-6">
                    <p className="text-4xl md:text-5xl lg:text-6xl leading-10 tracking-wide pb-10 md:pb-3">
                        <span className="block md:hidden">{data.title}</span>
                        <span className="hidden md:block mt-4">{data.titleCut1}<br />{data.titleCut2}</span>
                    </p>
                    <a className="underline underline-offset-4 decoration-1 hidden md:block">{data.linkTitle}</a>
                </div>
                {products.map((product, index) => (
                    <div key={index} className="w-full">
                        <ProductCards
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                ))}
            </section>

            {/* Displayed on small screens */}
            <section className="md:hidden">
                <div className="flex flex-col">
                    <div className="pr-6 border-b-2 border-black">
                        <p className="text-4xl leading-10 tracking-wide pb-10">
                            <span className="block pt-8">{data.title}</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-2">
                        {smallScreenProducts.map((product, index) => (
                            <div
                                key={index}
                                className={`w-full ${index === 0 ? 'border-r-2 border-black' : ''}`}
                            >
                                <ProductCards
                                    image={product.image}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

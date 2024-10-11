import React from "react";
import ProductCards from "./ProductCard";

// Define the type for a slide
type Slide = {
    url: string;
    title: string;
};

// Define the type for the props
type CarouselProps = {
    slides: Slide[];
};

export default function Carousel({ slides }: CarouselProps) {


    return (
        <div className="flex justify-items-stretch">

        </div>
    );
}

import Image from "next/image";
import Navbar from "./Components/Navbar";
import Cards from "./Components/TwoColumnSection";
import CarouselContainer from "./Components/CarouselContainer";
import ThreePanel from "./Components/ThreePanel";
import TwoColumnSection from "./Components/TwoColumnSection";

export default function Home() {

  //top page
  const twoColumnSectionOneData = {
    image: "/Imgs/MainImage.webp",
    titleOne: "FROM NATURE",
    titleTwo: "TO YOUR SKIN",
    text: "We craft SKINCARE using the most exquisite ingredients from the plant, earth, and mineral realms. Only organic botanicals and our formulas comply with the most stringent of clean beauty standards. Each of our products' efficiency is clinically proven through an extensive battery of tests.",
    url: "SHOP NOW",
    urlLink: "#"
  };


  // Best seller row
  const bestSellerProducts = [
    {
      image: '/Imgs/product1.webp',
      name: 'Product 1',
      description: 'Brief product description for Product 1.',
      price: '15.00',
    },
    {
      image: '/Imgs/product2.webp',
      name: 'Product 2',
      description: 'Brief product description for Product 2.',
      price: '20.00',
    },
    {
      image: '/Imgs/product3.webp',
      name: 'Product 3',
      description: 'Brief product description for Product 3.',
      price: '25.00',
    },
  ];

  const bestSellerData = {
    title: "BEST SELLERS",
    titleCut1: "BEST-",
    titleCut2: "SELLERS",
    linkTitle: "SHOP NOW",
    linkUrl: "#",
  };

  //New arrivals
  const newArrivalsProducts = [
    {
      image: '/Imgs/product5.webp',
      name: 'Product 5',
      description: 'Brief product description for Product 1.',
      price: '15.00',
    },
    {
      image: '/Imgs/product6.webp',
      name: 'Product 6',
      description: 'Brief product description for Product 2.',
      price: '20.00',
    },
    {
      image: '/Imgs/product7.webp',
      name: 'Product 7',
      description: 'Brief product description for Product 3.',
      price: '25.00',
    },
  ];

  const newArrivalsData = {
    title: "NEW ARRIVALS",
    titleCut1: "NEW",
    titleCut2: "ARRIVALS",
    linkTitle: "SHOP ALL",
    linkUrl: "#",
  };

  const twoColumnSectioTwoData = {
    image: "/Imgs/PromotionalImage4.avif",
    titleOne: "OUR PRINCIPLES",
    titleTwo: "",
    text: "Designed to deeply nourish, balance, revitalize, and cultivate vibrancy in all skin types each product is created from a research-based blend of supportive, nutrient-dense ingredients. Always sustainably-sourced, genderless, multi- functional, and intentional in philosophy and design.",
    url: "READ MORE",
    urlLink: "#"
  };


  return (
    <main>
      <Navbar />
      <section className="relative">
        <TwoColumnSection data={twoColumnSectionOneData} />
      </section>
      {/* Pass data and products to CarouselContainer */}
      <CarouselContainer data={bestSellerData} products={bestSellerProducts} />
      <ThreePanel
        imageUrl="/Imgs/PromotionalImage2.jpg"
        firstPanel={{
          heading: "SKIN & BODY",
          items: ["FACE CARE", "BODY & HAND", "HAIR", "ROUTINES", "READY FOR SUMMER"],
          linkText: "SHOP ALL",
          linkUrl: "#",
          hasBottomBorder: true,
        }}
        secondPanel={{
          heading: "KITS & OBJECTS",
          items: ["ACCESSORIES", "GIFT COLLECTION"],
          linkText: "SHOP ALL",
          linkUrl: "#",
          hasBottomBorder: false,
        }}
      />
      <section className="border-black border-t-0 md:border-t-2">
        <TwoColumnSection data={twoColumnSectioTwoData} />
      </section>
      <CarouselContainer data={newArrivalsData} products={newArrivalsProducts} />
      <ThreePanel
        imageUrl="/Imgs/PromotionalImage.PNG"
        firstPanel={{
          heading: "YES",
          items: ["NATURALNESS WITHOUT BUT", "UNCOMPROMISING PURITY OF INGREDIENTS", "EFFICIENCY", "AN EASY SYSTEM OF SELECTION OF MEANS"],
          linkText: "",
          linkUrl: "#",
          hasBottomBorder: true,
        }}
        secondPanel={{
          heading: "NO",
          items: ["NO ANIMAL TESTING", "THE CHOICE BETWEENN SAFETY AND QUALITY", "OVERCOMPLICATION", "GREENWASHING AND GREEN SHEEN"],
          linkText: "",
          linkUrl: "#",
          hasBottomBorder: false,
        }}
      />
    </main>
  );
}

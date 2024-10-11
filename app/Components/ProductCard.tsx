import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border-l-0 sm:border-l-2 border-black">
      <div
        className="h-96 w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 font-semibold">{description}</p>
        <p className="text-m font-bold text-gray-900 ">{price}£</p>
      </div>
    </div>
  );
};

export default ProductCard;

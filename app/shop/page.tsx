// app/shop/page.tsx or app/shop/Shop.tsx (depending on structure)
"use client";
import React from 'react';
import Header from './Header';
import Navbar from '../Components/Navbar';

const Shop: React.FC = () => {
    return (
        <div>
          <Navbar/>
          <Header/>
        </div>
    );
};

export default Shop;

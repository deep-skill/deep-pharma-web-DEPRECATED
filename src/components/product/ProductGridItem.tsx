'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Product } from '../products/Product';
import { AddShoppingCart } from '@mui/icons-material';
import { cartStore } from '@/store/cart-store/cart-store';
interface Props {
  product: Product;
  image: string;
}
const ProductGridItem = ({ product, image }: Props) => {
  const onAddToCart = cartStore((state) => state.addToCart);
  return (
    <div>
      <div className="rounded-md overflow-hidden fade-in">
        <Link href={`/`}>
          <Image
            src={image}
            alt={product.name}
            className="w-full object-cover"
            width={400}
            height={400}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="p-4 flex flex-col">
          <Link href={`/`} className="hover:text-blue-600">
            {product.name}
          </Link>
          <span className="font-bold">$5.00</span>
        </div>
        <button className="pr-5" onClick={() => onAddToCart(product)}>
          <AddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductGridItem;

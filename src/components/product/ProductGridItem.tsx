'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
  name: string;
  image: string;
  price: number;
  description: string;
}
const ProductGridItem = ({ name, image, price, description }: Props) => {
  return (
    <div>
      <div className="rounded-md overflow-hidden fade-in">
        <Link href={`/`}>
          <Image
            src={image}
            alt={name}
            className="w-full object-cover"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col">
        <Link href={`/`} className="hover:text-blue-600">
          {name}
        </Link>
        <span className="font-bold">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductGridItem;

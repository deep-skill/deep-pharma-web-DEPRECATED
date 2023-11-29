'use client';

import Search from '@/components/Search';
import { useState, useEffect } from 'react';

type Product = {
  category: {
    creationAt: string;
    id: number;
    image: string;
    name: string;
    updatedAt: string;
  };
  creationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
};

export default function Page() {
  const [allProducts, setAllProducts] = useState<Product[] | null>(null);
  const [productsViewed, setProductsViewed] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setProductsViewed(data);
      });
  }, []);

  const handleSearchProducts = (value: string) => {
    setProductsViewed(() => {
      if (allProducts !== null) {
        return allProducts.filter((product) => {
          return product.title
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase());
        });
      } else {
        return null;
      }
    });
  };

  return (
    <main className="h-creen w-full flex flex-col gap-8 items-center p-12">
      <Search
        width="md"
        debouncedDelay={500}
        placeHolder="Search products..."
        handleSearch={handleSearchProducts}
      />

      <section className="w-[40rem] flex flex-wrap gap-4 justify-center">
        {productsViewed !== null ? (
          productsViewed.map((product) => {
            return (
              <div className="p-5 flex gap-4 w-full rounded-lg shadow-md shadow-slate-300">
                <img
                  src={product.category.image}
                  alt={product.title}
                  className="h-32 w-32 rounded"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="">{product.title}</h3>
                  <p className="">{product.description}</p>
                  <p className="">{product.category.name}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>Not products found</div>
        )}
      </section>
    </main>
  );
}

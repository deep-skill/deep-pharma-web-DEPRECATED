'use client';
import Search from '@/components/Search';
import { useState, useEffect } from 'react';

interface Product {
  brand_id: number;
  created_at: string;
  deleted_at: string | null;
  description: string;
  id: number;
  name: string;
  prescription_required: number;
  updated_at: string;
}

const ProductCatalogPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await fetchData('product');
        setProducts(data);
      } finally {
        console.log('Hello from finally');
        setLoading(false);
      }
    })();
  }, []);

  const handleSearchProducts = async (value: string) => {
    setLoading(true);
    try {
      if (value) {
        const data = await fetchData(`product/name/${value}`);
        setProducts(data);
      } else {
        const data = await fetchData('product');
        setProducts(data);
      }
    } finally {
      setLoading(false);
    }
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
        {loading ? (
          <div>Loading...</div>
        ) : products?.length ? (
          products.map((product , index) => {
            return (
              <div key={index} className="w-[40rem] p-5 shadow-md shadow-slate-300 flex flex-col gap-4">
                <h3 className="text-xl setProducts">{product.name}</h3>
                <p className="text-slate-500">{product.description}</p>
                <p className="text">
                  {`Prescription required: ${
                    product.prescription_required === 1 ? 'Yes' : 'No'
                  }`}
                </p>
              </div>
            );
          })
        ) : (
          <div>No products found</div>
        )}
      </section>
    </main>
  );
};
export default ProductCatalogPage;

async function fetchData(url: string) {
  try {
    const result = await fetch(`http://localhost:3001/${url}`);
    return await result.json();
  } catch (error) {
    throw new Error(`something went wrong: ${error}`);
  }
}

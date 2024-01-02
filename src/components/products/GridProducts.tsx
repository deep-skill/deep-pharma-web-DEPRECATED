import React from 'react';
import { type Product } from './Product';
import ProductGridItem from '../product/ProductGridItem';
interface Props {
  products: Product[];
}
const GridProducts = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem
          key={product.id}
          image={''}
          name={product.name}
          price={5}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default GridProducts;

'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ItemTableProduct from './itemTableProduct';
import { type Product } from './Product';

const TableProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload]);

  const reloadProduct = () => {
    setReload(!reload);
  };

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Prescripcion</th>
            <th>Marca</th>
            <th>Etiqueta</th>
            <th>Editar</th>
            <th>Eliminado</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ItemTableProduct
              key={product.id}
              product={product}
              reloadProduct={reloadProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await axios.get('http://localhost:3001/product');
    const filteredProducts = response.data.filter(
      (product: Product) => !product.deleted_at,
    );
    return filteredProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default TableProduct;

'use client';
import { useState, useEffect } from 'react';
import ItemTableBrand from './itemTableBrand';
import { type Brand } from './Brand';

const TableBrand: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/brand_api');
        const brandsData = await res.json();
        setBrands(brandsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload]);

  const reloadBrand = () => {
    setReload(!reload);
  };

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Editar</th>
            <th>Eliminado</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <ItemTableBrand
              key={brand.id}
              brand={brand}
              reloadBrand={reloadBrand}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBrand;

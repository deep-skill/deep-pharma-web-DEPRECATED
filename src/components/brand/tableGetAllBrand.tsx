import { getSearchBrand } from '@/lib/fetch/brandFetch/brandFetch';
import ModalUpdateBrand from './ModalUpdateBrand';
import ModalDeleteBrand from './ModalDeleteBrand';
import ModalError from '../ModalError';


const TableBrand = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const  brands = await getSearchBrand(query, currentPage);
console.log(brands)
  if(brands.error !== ''){
    return <div>
      <ModalError error={brands.error.message}/>
    </div>
  }

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
          {brands.brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>{brand.name}</td>
              <td><ModalUpdateBrand idBrand={brand.id}/></td>
              <td><ModalDeleteBrand  idBrand={brand.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBrand;

import { getAllBrand } from '@/lib/fetch/brandFetch/brandFetch';

const TableBrand = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const brands = await getAllBrand(query, currentPage);

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
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>{brand.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBrand;

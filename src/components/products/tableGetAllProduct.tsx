import { getAllProduct } from "@/lib/fetch/productFetch/productFetch";


const TableProduct = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const products = await getAllProduct(query , currentPage)
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
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.prescription_required === 1 ? 'Requerida' : 'No Requerida'}</td>
              <td>{product.brand?.name}</td>
              <td>{product.tags?.toString()}</td>
              <td>Editar</td>
              <td>Eliminado</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default TableProduct;

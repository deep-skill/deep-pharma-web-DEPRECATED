import ModalUpdate from './ModalUpdateTag';
import ModalDelete from './ModalDeleteTag';
import { getAllTag } from '@/lib/fetch/tagFetch/tagFetch';

const TableTagTag = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const { count, rows } = await getAllTag(query, currentPage);

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((tag) => (
            <tr key={tag.id} className="m-2 p-2">
              <td>{tag.id}</td>
              <td>{tag.name}</td>
              <td>{tag.category}</td>
              <td>
                <ModalUpdate idTag={tag.id} />
              </td>
              <td>
                <ModalDelete idTag={tag.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTagTag;
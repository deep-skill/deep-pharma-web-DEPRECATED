import { type Tag } from './Tag';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

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

async function getAllTag(
  query: string,
  currentPage: number,
): Promise<{ count: number; rows: Tag[] }> {
  try {
    const res = await fetch(
      `http://localhost:3001/tag-search?query=${query}&limit=10&page=${currentPage}`,
      { cache: 'no-store' },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { count: 0, rows: [] };
  }
}

export default TableTagTag;

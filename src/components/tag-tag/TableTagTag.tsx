import axios from 'axios';
import { Tag } from '../tag/Tag';

const TableTagTag = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const tags = await getAllTag();

  console.log(query);
  console.log(currentPage);

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => (
            <tr key={tag.id}>
              <td>{tag.id}</td>
              <td>{tag.name}</td>
              <td>{tag.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

async function getAllTag(): Promise<Tag[]> {
  try {
    const response = await axios.get('http://localhost:3001/tag');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default TableTagTag;

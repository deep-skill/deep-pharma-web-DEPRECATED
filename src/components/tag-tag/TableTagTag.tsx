import axios from 'axios';
import { Tag } from '../tag/Tag';
import Link from 'next/link';
import ModalUpdate from './ModalUpdate';

const TableTagTag = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const tags = await getAllTag( query , currentPage);

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
        <tbody >
          {tags.map((tag) => (
            <tr key={tag.id} className='m-2 p-2'>
              <td>{tag.id}</td>
              <td>{tag.name}</td>
              <td>{tag.category}</td>
              <td>
                <ModalUpdate idTag={tag.id}/>
              </td>
            <td>
                <Link href={`tag/${tag.id}`} className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700">eliminar</Link>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

async function getAllTag(query : string , currentPage : number): Promise<Tag[]> {

  try {
    const res = await fetch(`http://localhost:3001/tag-search?query=${query}&limit=10&page=${currentPage}`,{ cache: 'no-store' });
    const data = await res.json()

    return data.rows;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default TableTagTag;

"use client"
import axios from "axios";
import Link from 'next/link';
import { Tag } from "./Tag";

interface ItemTableTafProps {
    tag: Tag;
    reloadTag: () => void;
}

async function deleteTag(id: number  , reloadTag:()=> void) {
    try {
        await axios.delete(`http://localhost:3001/tag/${id}`);
        reloadTag();
    } catch (error) {
        console.log(error);
    }
}

const ItemTableBrand: React.FC<ItemTableTafProps> = ({tag , reloadTag }) => {
    return (
        <tr key={tag.id}>
            <td>{tag.id}</td>
            <td>{tag.name}</td>
            <td>{tag.category}</td>
            <td><Link href={`tag/${tag.id}`} className="bg-green-400 p-1 m-2 rounded hover:bg-green-500 active:bg-green-700">Modificar</Link></td>
            <td>
                <button onClick={() => deleteTag(tag.id , reloadTag)} className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700">eliminar</button>
            </td>
        </tr>
    )
}

export default ItemTableBrand
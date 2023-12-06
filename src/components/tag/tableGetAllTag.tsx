"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import ItemTableBrand from "./itemTableTag"
import { Tag } from "./Tag";

const TableTag: React.FC = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [ reload , setReload] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tagsData = await getAllBrand();
                setTags(tagsData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [reload]);

    const reloadTag = () =>{
        setReload(!reload)
    }

    return (
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Editar</th>
                        <th>Eliminado</th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map((tag) => (
                        <ItemTableBrand tag={tag} reloadTag={reloadTag} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

async function getAllBrand(): Promise<Tag[]> {
    try {
        const response = await axios.get("http://localhost:3001/tag");
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default TableTag;
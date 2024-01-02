"use client"
import axios from "axios";
import Link from 'next/link';
import { Brand } from "./Brand";

interface ItemTableBrandProps {
    brand: Brand;
    reloadBrand: () => void;
}

async function deleteBrand(id: number  , reloadBrand:()=> void) {
    try {
        await axios.delete(`/api/brand_api/${id}`);
        reloadBrand();
    } catch (error) {
        console.log(error);
    }
}

const ItemTableBrand: React.FC<ItemTableBrandProps> = ({ brand , reloadBrand }) => {
    return (
        <tr key={brand.id}>
            <td>{brand.id}</td>
            <td>{brand.name}</td>
            <td><Link href={`brand/${brand.id}`} className="bg-green-400 p-1 m-2 rounded hover:bg-green-500 active:bg-green-700">Modificar</Link></td>
            <td>
                <button onClick={() => deleteBrand(brand.id , reloadBrand)} className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700">eliminar</button>
            </td>
        </tr>
    )
}

export default ItemTableBrand

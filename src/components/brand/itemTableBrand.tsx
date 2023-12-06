"use client"
import axios from "axios";
import { Brand } from "./Brand";

interface ItemTableBrandProps {
    brand: Brand;
    reloadBrand: () => void;
}

async function deleteBrand(id: number  , reloadBrand:()=> void) {
    try {
        const response = await axios.delete(`http://localhost:3001/brand/${id}`);
        console.log(response);
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
            <td>{brand.created_at}</td>
            <td>{brand.updated_at}</td>
            <td>
                <button onClick={() => deleteBrand(brand.id , reloadBrand)} className="bg-red-300">eliminar</button>
            </td>
        </tr>
    )
}

export default ItemTableBrand
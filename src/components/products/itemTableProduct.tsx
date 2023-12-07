"use client"
import axios from "axios";
import Link from 'next/link';
import { Product } from "./Product";

interface ItemTableProductProps {
    product: Product;
    reloadProduct: () => void;
}

async function deleteProduct(id: number, reloadProduct: () => void) {
    try {
        const response = await axios.delete(`http://localhost:3001/product/${id}`);
        reloadProduct();
    } catch (error) {
        console.log(error);
    }
}


const ItemTableProduct: React.FC<ItemTableProductProps> = ({ product, reloadProduct }) => {

    const prescriptionText = (require: number): string => {
        if (require == 0) return "No requerida";
        return "Es requerida";
    }
    return (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{prescriptionText(product.prescription_required)}</td>
            <td>{product.brand?.name}</td>
            <td>{product.tags && product.tags.length > 0 ? product.tags[0].name : 'Sin Etiqueta'}</td>
            <td><Link href={`product/${product.id}`} className="bg-green-400 p-1 m-2 rounded hover:bg-green-500 active:bg-green-700">Modificar</Link></td>
            <td>
                <button onClick={() => deleteProduct(product.id, reloadProduct)} className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700">eliminar</button>
            </td>
        </tr>
    )
}

export default ItemTableProduct
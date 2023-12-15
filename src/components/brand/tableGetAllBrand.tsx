"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import ItemTableBrand from "./itemTableBrand";
import { Brand } from "./Brand";

const TableBrand: React.FC = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [ reload , setReload] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await getAllBrand();
                setBrands(brandsData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [reload]);

    const reloadBrand = () =>{
        setReload(!reload)
    }

    return (
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Editar</th>
                        <th>Eliminado</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand) => (
                        <ItemTableBrand key={brand.id} brand={brand} reloadBrand={reloadBrand} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};



async function getAllBrand(): Promise<Brand[]> {
    try {
      const token  = await axios.get('/api/getToken');
        const response = await axios.get("http://localhost:3001/brand",{
          headers: {
            'Authorization': `Bearer ${token.data}`
        }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default TableBrand;


import { Product } from '@/components/products/Product';
import UpdateProduct from '@/components/products/updateProduct';
import axios from 'axios';
import Link from 'next/link';


const getByIdProductAxios = async (id: number): Promise<Product | undefined> => {
    try {
        let response = await axios.get(`http://localhost:3001/brand/${id}`)
        return response.data;
    } catch (error) {
        return undefined
    }
}

export default async function Page({ params }: { params: { id: number } }) {
    const productById = await getByIdProductAxios(params.id)
    if (!productById) {
        return (
            <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
                <div>No se encontró la marca con el ID especificado</div>
                <Link href={'/forms/brand'} className="bg-slate-400 p-1 m-2 rounded hover:bg-slate-500 active:bg-slate-700">
                    Volver a Brand
                </Link>
            </section>
        );
    }
    return (
        <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
            <div>
                <h3>{productById.id}</h3>
                <p>{productById.name}</p>
            </div>
            <UpdateProduct idProduct={params.id} />
            <Link href={"/forms/product"} className='bg-slate-400 p-1 m-2 rounded hover:bg-slate-500 active:bg-slate-700'>Volver a Productos</Link>
        </section>
    );
}

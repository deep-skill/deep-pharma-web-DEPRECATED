
import { Tag } from '@/components/tag/Tag';
import UpdateTag from '@/components/tag/updateTag';
import axios from 'axios';
import Link from 'next/link';


const getByIdTagAxios = async (id: number): Promise<Tag | undefined> => {
    try {
        let response = await axios.get(`http://localhost:3001/tag/${id}`)
        return response.data;
    } catch (error) {
        return undefined
    }
}

export default async function Page({ params }: { params: { id: number } }) {
    const tagById = await getByIdTagAxios(params.id)
    if (!tagById) {
        return (
            <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
                <div>No se encontró la marca con el ID especificado</div>
                <Link href={'/forms/tag'} className="bg-slate-400 p-1 m-2 rounded hover:bg-slate-500 active:bg-slate-700">
                    Volver a tag
                </Link>
            </section>
        );
    }
    return (
        <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
            <div>
                <h3>Editar Tag Id: {tagById.id}</h3>
                <p>Nombre: {tagById.name}</p>
                <p>Categoria: {tagById.category}</p>
            </div>
            <UpdateTag idTag={tagById.id}/>
            <Link href={"/forms/tag"} className='bg-slate-400 p-1 m-2 rounded hover:bg-slate-500 active:bg-slate-700'>Volver a Tags</Link>
        </section>
    );
}
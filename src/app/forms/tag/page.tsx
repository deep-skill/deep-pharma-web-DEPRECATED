import Link from 'next/link';
import TableTag from "../../../components/tag/tableGetAllTag"

export default function Page() {
    return (
        <section className="flex flex-col align-center justify-center items-center w-full p-2 bg-slate-300 gap-3">
            <div >
                <h2 className="text-2xl ">Tabla Todas Las Etiquetas</h2>
                <TableTag />
            </div>
            <div >
                <Link href={"/forms/tag/create"} className='bg-white p-2 m-2 rounded'>Agregar Tag</Link>
            </div>
        </section>
    );
}
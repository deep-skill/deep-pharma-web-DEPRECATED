import Link from 'next/link';
import UpdateBrand from "@/components/brand/updateBrand";
import TableBrand from "@/components/brand/tableGetAllBrand";

export default function Page() {

    return (
        <section className="flex flex-col align-center justify-center items-center w-full p-2 bg-slate-300 gap-3">
            <div >
                <h2 className="text-2xl ">Tabla Todas Las Marcas</h2>
                <TableBrand />
            </div>
            <div >
                <Link href={"/forms/brand/create"} className='bg-white p-2 m-2 rounded'>Agregar Marca</Link>
            </div>
        </section>
    );
}
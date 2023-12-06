import CreateBrand from "@/components/brand/createBrand";
import UpdateBrand from "@/components/brand/updateBrand";

export default function Page() {

    return (
        <section className="flex flex-col align-center justify-center items-center w-full h-screen p-2 bg-slate-300 gap-3">
            <div >
                <h2 className="text-2xl ">Formulario Crear Brand</h2>
                <CreateBrand />
            </div>
            <div>
                <h2 className="text-2xl ">Formulario Editar Brand</h2>
                <UpdateBrand  idBrand={1} />
            </div>
        </section>
    );
}
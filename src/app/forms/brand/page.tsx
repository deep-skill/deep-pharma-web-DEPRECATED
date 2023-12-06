import CreateBrand from "@/components/brand/createBrand";

export default function Page() {


    
    return (
        <section className="flex flex-col align-center justify-center items-center w-full h-screen p-2 bg-slate-300">
            <h2 className="text-2xl ">Formulario  crear Brand</h2>
            <CreateBrand />
        </section>
    );
}
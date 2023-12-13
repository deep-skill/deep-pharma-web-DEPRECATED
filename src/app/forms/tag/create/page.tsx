"use client"
import CreateTag from "@/components/tag/createTag";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const CreateBrandPage = () => {
    return (
        <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
            <div className=" bg-slate-300 m-4 p-4 rounded">
                <h2>Crear  Tag</h2>
                <CreateTag />
            </div>
        </section>
    )
}
export default withPageAuthRequired(CreateBrandPage);

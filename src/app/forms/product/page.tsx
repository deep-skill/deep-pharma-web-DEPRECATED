"use client"
import TableProduct from "@/components/products/tableGetAllProduct";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";


const AllProductPage = () =>{
  return(
    <section className="flex flex-col align-center justify-center items-center w-full p-2 bg-slate-300 gap-3">
      <div >
        <h2 className="text-2xl ">Tabla Todas Las Productos</h2>
          <TableProduct/>
        </div>
        <div >
          <Link href={"/forms/product/create"} className='bg-white p-2 m-2 rounded'>Agregar Producto</Link>
        </div>
    </section>
    )
}

export default withPageAuthRequired(AllProductPage);

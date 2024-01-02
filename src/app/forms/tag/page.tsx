import ModalCreate from "@/components/tag/ModalCreate";
import SearchTag from "@/components/tag/SearchTag";
import TableTagTag from "@/components/tag/TableTagTag";
import TableTagTagSkeleton from "@/components/tag/TableTagTagSkeleton";
import { Suspense } from "react";


const AllTagPage = ({
  searchParams
}:{
  searchParams?:{
    query?:string
    page?:number
  }
}) => {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <section className="flex flex-col align-center justify-center items-center w-full p-2 bg-slate-300 gap-3">
      <div className="flex">
        <SearchTag placeholder=""/>
        <ModalCreate/>
      </div>
      <Suspense key={query} fallback= { <TableTagTagSkeleton/>}>
        <TableTagTag currentPage={currentPage} query={query} key={currentPage}/>
      </Suspense>
    </section>
  );
}

export default AllTagPage;

import Link from 'next/link';
import TableBrand from '@/components/brand/tableGetAllBrand';
import SearchTag from '@/components/SearchTable';
import { Suspense } from 'react';
import ModalCreateBrand from '@/components/brand/ModalCreateBrand';

const AllBrandPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {

  const query = searchParams?.query !== undefined && searchParams?.query !== null ? searchParams.query : '';
  const currentPage = searchParams?.page !== undefined && !isNaN(searchParams.page) ? Number(searchParams.page) : 1;

  return (
    <section className="flex flex-col align-center justify-center items-center w-full p-2 bg-slate-300 gap-3">
      <div>
      <SearchTag placeholder="" />
      <ModalCreateBrand/>
      </div>
      <div>
        <h2 className="text-2xl ">Tabla Todas Las Marcas</h2>
        <Suspense>
          <TableBrand 
          currentPage={currentPage}
          query={query}
          key={currentPage}
          />
        </Suspense>
      </div>
      <div>
        <Link href={'/forms/brand/create'} className="bg-white p-2 m-2 rounded">
          Agregar Marca
        </Link>
      </div>
    </section>
  );
};

export default AllBrandPage;

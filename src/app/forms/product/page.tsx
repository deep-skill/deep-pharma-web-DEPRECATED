import SearchTable from '@/components/SearchTable';
import TableProduct from '@/components/products/TableGetAllProduct';
import Link from 'next/link';

const AllProductPage = ({
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
      <SearchTable placeholder="" />
      </div>
      <div>
        <h2 className="text-2xl ">Tabla Todas Las Productos</h2>
        <TableProduct 
        currentPage={currentPage}
        query={query}
        key={currentPage}
        />
      </div>
      <div>
        <Link
          href={'/forms/product/create'}
          className="bg-white p-2 m-2 rounded"
        >
          Agregar Producto
        </Link>
      </div>
    </section>
  );
};

export default AllProductPage;

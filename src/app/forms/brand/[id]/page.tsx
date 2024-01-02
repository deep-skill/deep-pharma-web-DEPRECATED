import UpdateBrand from '@/components/brand/updateBrand';
import Link from 'next/link';

const UpdateBrandPage = async ({ params }: { params: { id: number } }) => {
  return (
    <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
      <UpdateBrand idBrand={params.id} />
      <Link
        href={'/forms/brand'}
        className="bg-slate-400 p-1 m-2 rounded hover:bg-slate-500 active:bg-slate-700"
      >
        Volver a Brand
      </Link>
    </section>
  );
};

export default UpdateBrandPage;

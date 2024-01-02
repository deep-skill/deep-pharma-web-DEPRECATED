import CreateBrand from '@/components/brand/createBrand';

const CreateBrandPage = () => {
  return (
    <section className="flex flex-col align-center justify-center items-center w-full h-full p-2 bg-slate-300 gap-3">
      <div className=" bg-slate-300 m-4 p-4 rounded">
        <h3>Crear Marca</h3>
        <CreateBrand />
      </div>
    </section>
  );
};
export default CreateBrandPage;

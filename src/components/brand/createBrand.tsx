'use client';
import Link from 'next/link';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormValues {
  name: string;
}

const createBranAxios = async (data: FormValues) => {
  try {
    await axios.post('/api/brand_api', data);
  } catch (error) {
    console.log(error);
  }
};

export default function CreateBrand() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createBranAxios(data);
  };

  return (
    <form className="flex flex-col  gap-2 " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col ">
        <label htmlFor="brand">Brand</label>
        <input
          className="p-2 w-full"
          {...register('name', {
            required: 'El nombre es obligatorio',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracter',
            },
            maxLength: {
              value: 50,
              message: 'El nombre no puede exceder los 50 caracteres',
            },
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col ">
        <button className="p-2 m-2 bg-slate-500 rounded" type="submit">
          Submit
        </button>
      </div>
      <div className="flex flex-col ">
        <Link href={'/forms/brand'} className="p-2 m-2 bg-slate-400 rounded">
          Volver a Brand
        </Link>
      </div>
    </form>
  );
}

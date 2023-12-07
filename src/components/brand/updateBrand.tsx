"use client"
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    name: string
}

type UpdateBrandProps = {
    idBrand: number;
};

const updateBranAxios = async (data: FormValues, id: number) => {
    try {
        await axios.put(`http://localhost:3001/brand/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}

const UpdateBrand: React.FC<UpdateBrandProps> = ({ idBrand }) => {
    const { register, handleSubmit , formState: { errors }} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => updateBranAxios(data, idBrand);

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label htmlFor="brand">Brand</label>
                <input
                    className="p-2 w-full"
                    {...register('name', {
                        required: 'El nombre es obligatorio',
                        minLength: {
                            value: 3,
                            message: 'El nombre debe tener al menos 3 caracter'
                        },
                        maxLength: {
                            value: 50,
                            message: 'El nombre no puede exceder los 50 caracteres'
                        }
                    })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col">
                <button className='bg-slate-400 p-1 m-2 rounded hover:bg-slate-500 active:bg-slate-700' type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UpdateBrand;
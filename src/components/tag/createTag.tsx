"use client"
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    name: string
    category: string
}

const createTagAxios = async (data: FormValues) => {
    try {
        await axios.post('http://localhost:3001/tag', data)
    } catch (error) {
        console.log(error)
    }
}

export default function CreateTag() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => createTagAxios(data)

    return (
        <form className="flex flex-col  gap-2 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col ">
                <label htmlFor="brand">Nombre</label>
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
            <div className="flex flex-col ">
                <label htmlFor="brand">Categoria</label>
                <input
                    className="p-2 w-full"
                    {...register('category', {
                        required: 'La categoria es obligatoria',
                        minLength: {
                            value: 3,
                            message: 'La categoria debe tener al menos 3 caracter'
                        },
                        maxLength: {
                            value: 50,
                            message: 'La categoria no puede exceder los 50 caracteres'
                        }
                    })}
                />
                {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            </div>
            <div className="flex flex-col ">
                <button className="bg-slate-400 p-2 m-2 rounded hover:bg-slate-500 active:bg-slate-700" type="submit">Submit</button>
            </div>
        </form>
    )
}

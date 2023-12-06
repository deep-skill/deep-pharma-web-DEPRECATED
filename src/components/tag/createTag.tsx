"use client"
import Link from 'next/link';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    name: string
    category:string
}

const createTagAxios = async (data: FormValues) => {
    console.log(data)
    try {
        let response = await axios.post('http://localhost:3001/tag', data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export default function CreateTag() {
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => createTagAxios(data)

    return (
        <form className="flex flex-col  gap-2 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col ">
                <label htmlFor="brand">Nombre</label>
                <input className="p-2 w-full"  {...register('name', { required: true })} />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="brand">Categoria</label>
                <input className="p-2 w-full"  {...register('category', { required: true })} />
            </div>
            <div className="flex flex-col ">
                <button className='p-2 m-2 bg-slate-500 rounded' type="submit">Submit</button>
            </div>
            <div className="flex flex-col ">
                <Link href={"/forms/tag"} className='p-2 m-2 bg-slate-400 rounded' >Volver a Tag</Link>
            </div>
        </form>
    )
}
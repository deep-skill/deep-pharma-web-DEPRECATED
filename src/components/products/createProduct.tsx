"use client"
import Link from 'next/link';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Tag } from '../tag/Tag';
import { Brand } from '../brand/Brand';

type FormValues = {
    name: string
    description: string
    prescriptionRequired: number
    brandId: number
    tagIds: Array<number>
}

const createProductAxios = async (data: FormValues) => {
    try {
        await axios.post('http://localhost:3001/product', data)
    } catch (error) {
        console.log(error)
    }
}

export default function CreateProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const [brands, setBrands] = useState<Brand[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (typeof data.brandId === 'string') data.brandId = parseInt(data.brandId, 10);
        if (typeof data.prescriptionRequired === 'string') data.prescriptionRequired = parseInt(data.prescriptionRequired, 10);

        if (Array.isArray(data.tagIds)) {
            data.tagIds = data.tagIds.map((tagId) => {
                if (typeof tagId === 'string') {
                    return parseInt(tagId, 10);
                }
                return tagId;
            });
        }
        createProductAxios(data)
    }

    useEffect(() => {
        const fetchDataTag = async () => {
            try {
                const tagsData = await getAllTag();
                setTags(tagsData);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchDataBrand = async () => {
            try {
                const brandsData = await getAllBrand();
                setBrands(brandsData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataBrand();
        fetchDataTag();
    }, []);

    return (
        <form className="flex flex-col  gap-2 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col ">
                <label htmlFor="brand">Nombre Producto</label>
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
                <label htmlFor="brand">Description</label>
                <input
                    className="p-2 w-full"
                    {...register('description', {
                        required: 'La descripcion es obligatorio',
                        minLength: {
                            value: 3,
                            message: 'La descripcion debe tener al menos 3 caracter'
                        },
                        maxLength: {
                            value: 50,
                            message: 'La descripcion no puede exceder los 50 caracteres'
                        }
                    })}
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="prescriptionRequired">Prescription Requerida?</label>
                <select className="p-2 w-full" {...register('prescriptionRequired', { required: 'La prescription es obligatorio' })}>
                    <option value="0">Eliga una opcion</option>
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
                {errors.prescriptionRequired && <p className="text-red-500">{errors.prescriptionRequired.message}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="brand">Elija marca</label>
                <select className="p-2 w-full" {...register('brandId', { required: true })}>
                    <option value="0">Eliga marca</option>
                    {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                            {brand.name}
                        </option>
                    ))}

                </select>
                {errors.brandId && <p className="text-red-500">{errors.brandId.message}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="tags">Elija etiqueta</label>
                <select className="p-2 w-full" {...register('tagIds', { required: true })} multiple>
                    {tags.map((tag) => (
                        <option key={tag.id} value={tag.id}>
                            {tag.name}
                        </option>
                    ))}
                </select>
                {errors.tagIds && <p className="text-red-500">{errors.tagIds.message}</p>}
            </div>
            <div className="flex flex-col ">
                <button className='p-2 m-2 bg-slate-500 rounded' type="submit">Submit</button>
            </div>
            <div className="flex flex-col ">
                <Link href={"/forms/product"} className='p-2 m-2 bg-slate-400 rounded' >Volver a Productos</Link>
            </div>
        </form>
    )
}

async function getAllTag(): Promise<Tag[]> {
    try {
        const response = await axios.get("http://localhost:3001/tag");
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function getAllBrand(): Promise<Brand[]> {
    try {
        const response = await axios.get("http://localhost:3001/brand");
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
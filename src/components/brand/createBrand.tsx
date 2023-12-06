"use client"
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form'; 

type FormValues = {
    name: string
  }

  const createBranAxios = async(data : FormValues) =>{
    try {
        let response = await axios.post('http://localhost:3001/brand', data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }

export default function CreateBrand() {

    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => createBranAxios(data)



    return (
        <form className="flex flex-col  gap-2 " onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col ">
                    <label htmlFor="brand">Brand</label>
                    <input className="p-2 w-full"  {...register('name', { required: true })} />
                </div>
                <div className="flex flex-col ">
                    <button className='p-2 m-2 bg-slate-500' type="submit">Submit</button>
                </div>
            </form>
    )
}
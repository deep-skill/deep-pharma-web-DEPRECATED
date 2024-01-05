'use server'

import { Brand, CreateBrandDto, UpdateBrandDto } from "@/interface/brand/Brand";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const URL = process.env.FETCH_URL

export const getAllBrand = async (): Promise<Brand[]> => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `${URL}/brand`,
      {
        headers: { Authorization: `Bearer ${token?.value}` },
        next: {
          revalidate: 60,
          tags: ['getAllBrand']
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [] ;
  }
}

export const getSearchBrand = async (query: string, currentPage: number): Promise<Brand[] > => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `${URL}/brand`,
      {
        headers: { Authorization: `Bearer ${token?.value}` },
        next: {
          revalidate: 60,
          tags: ['getAllBrand']
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [] ;
  }
}


export const getByIdBrand = async (id : number) => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `${URL}/brand/${id}`,
      {
        headers: { Authorization: `Bearer ${token?.value}` },
        next: { 
          revalidate: 60,
          tags: [`getByIdBrand${id}`]
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export const createBrand = async (createBrand: CreateBrandDto) => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  const body = JSON.stringify(createBrand);

  try {
    const res = await fetch(`${URL}/brand`, {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.value}`,
      },
    });

    const data = await res.json();
    revalidateTag('getAllBrand')
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const updateBrand = async (updateBrand: UpdateBrandDto, id : number) => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  const body = JSON.stringify(updateBrand);

  try {
    const res = await fetch(`${URL}/brand/${id}`, {
      method: 'PUT',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.value}`,
      },
    });

    const data = await res.json();
    revalidateTag('getAllBrand')
    revalidateTag(`getByIdBrand${id}`)
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const deleteBrand = async ( id : number) => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')

  try {
    const res = await fetch(`${URL}/brand/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.value}`,
      },
    });

    const data = await res.json();
    revalidateTag('getAllBrand')
    revalidateTag(`getByIdBrand${id}`)
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
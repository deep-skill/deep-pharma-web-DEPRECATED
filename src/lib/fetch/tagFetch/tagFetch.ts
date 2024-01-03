'use server'

import { CreateTagDto, Tag } from "@/interface/tag/Tag";
import { cookies } from "next/headers";

export const getAllTag = async (query: string, currentPage: number): Promise<{ count: number; rows: Tag[] }> => {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `http://localhost:3001/tag-search?query=${query}&limit=10&page=${currentPage}`,
      {
        headers: { Authorization: `Bearer ${token?.value}` },
        cache: 'no-store'
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { count: 0, rows: [] };
  }
}

export const createTag = async (CreateTag: CreateTagDto) => {
  const body = JSON.stringify(CreateTag);

  const cookieStore = cookies()
  const token = cookieStore.get('authToken')

  try {
    const res = await fetch(`http://localhost:3001/tag`, {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.value}`,
      },
      cache: 'no-store'
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};


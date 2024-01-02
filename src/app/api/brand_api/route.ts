import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(): Promise<any> {
  try {
    const { accessToken } = await getAccessToken();
    const response = await axios.get('http://localhost:3001/brand', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return error;
  }
}

export async function POST(req: NextRequest): Promise<any> {
  const dataForm = await req.json();

  try {
    const { accessToken } = await getAccessToken();
    const response = await axios.post('http://localhost:3001/brand', dataForm, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return error;
  }
}

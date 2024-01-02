import axios from 'axios';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: any): Promise<any> {
  try {
    const { accessToken } = await getAccessToken();
    const response = await axios.get(
      `http://localhost:3001/brand/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return error;
  }
}

export async function PUT(req: NextRequest, { params }: any): Promise<any> {
  const dataForm = await req.json();
  try {
    const { accessToken } = await getAccessToken();
    await axios.put(`http://localhost:3001/brand/${params.id}`, dataForm, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return NextResponse.json({ message: 'Brand Modificado' });
  } catch (error) {
    return error;
  }
}

export async function DELETE(req: NextRequest, { params }: any): Promise<any> {
  try {
    const { accessToken } = await getAccessToken();
    await axios.delete(`http://localhost:3001/brand/${params.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return NextResponse.json({ message: 'Brand Modificado' });
  } catch (error) {
    return error;
  }
}

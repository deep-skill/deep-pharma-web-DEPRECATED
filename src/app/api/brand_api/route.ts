import { getAccessToken} from '@auth0/nextjs-auth0';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
  try {
    const { accessToken } = await getAccessToken();
    const response = await axios.get("http://localhost:3001/brand", {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return error;
  }
};


export async function POST(req : NextRequest){
  const dataForm = await req.json()

  try {
  const { accessToken } = await getAccessToken();
    const response = await axios.post("http://localhost:3001/brand", dataForm ,{
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return error;
  }
}

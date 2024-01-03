import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(): Promise<any> {
	try {
	
		const response = await axios.get(`http://localhost:3001/tag-search?query=&limit=10&page=1`);
		return NextResponse.json(response.data);
	} catch (error) {
		return new NextResponse(JSON.stringify({ error: error }), {
			status: 500, 
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}


export async function POST(req: NextRequest): Promise<any> {
	const dataForm = await req.json();

	try {
		const { accessToken } = await getAccessToken();
		const response = await axios.post('http://localhost:3001/tag', dataForm, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return NextResponse.json(response.data);
	} catch (error) {
		return error;
	}
}
// pages/api/token.js
import axios from 'axios';

export async function GET(request: Request) {
  try {
    const data = {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUDIENCE,
      grant_type: process.env.GRANT_TYPE
    };
    const urlToken = process.env.TOKEN_BASE_URL || "";
    const response = await axios.post(urlToken, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return new Response(JSON.stringify(response.data.access_token), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}


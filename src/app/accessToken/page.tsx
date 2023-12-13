import axios from "axios"

const data = {
  client_id: process.env.TOKEN_CLIENT_ID,
  client_secret: process.env.TOKEN_CLIENT_SECRET,
  audience: 'http://localhost:3001/',
  grant_type: 'client_credentials'
};

 const getToken = async() => {
  try {
    const response = await axios.post('https://dev-nqzpabibd42atqci.us.auth0.com/oauth/token', data ,
    {headers: {
      'Content-Type': 'application/json'
    }});
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const MyTokenPage =async () => {
  const tokenData = await getToken();

  return (
    <div>
      <h1>Página protegida</h1>
      <p>Access Token: {tokenData.access_token}</p>
      <p>Expira en: {tokenData.expires_in}</p>
      <p>Tipo de token: {tokenData.token_type}</p>
    </div>
  );
};



export default MyTokenPage;

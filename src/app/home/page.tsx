import { getAccessToken } from "@auth0/nextjs-auth0";
import { decodeToken } from '@/lib/decodeToken'


const HomePage = async () => {
  const { accessToken } = await getAccessToken();
  const rol = decodeToken(accessToken)

  return <div>{rol}</div>;
};

export default HomePage;
